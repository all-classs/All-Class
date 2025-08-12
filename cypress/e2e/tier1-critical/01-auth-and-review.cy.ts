describe('사용자는 로그인을하고 자신이 들은 강의에 리뷰를 작성할 수 있다.', () => {
  it('사용자는 헤더에 로그인 버튼을 통해 로그인할 수 있다.', () => {
    cy.clearCookies();

    cy.uiLogin();

    cy.get('header').contains('button', '로그아웃').should('be.visible');
  });

  it('사용자는 자신이 수강한 강의를 찾고 리뷰를 작성할 수 있다.', () => {
    cy.uiLogin();

    cy.getMyLectures().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length.greaterThan(0);

      const enrolledLecture = response.body.data[0];
      const lectureName = enrolledLecture.lectureName;

      cy.visitUniversity();
      cy.clickLectureByName(lectureName);

      cy.byTest('lecture-detail').should('exist');
      cy.byTest('write-review').click();
      cy.byTest('write-review-form').should('exist');

      cy.byTest('review-title-input').type(`${lectureName} 수업 후기`);
      cy.byTest('review-content-input').type('E2E 테스트로 작성된 리뷰입니다.');
      cy.byTest('star-5').click({ force: true });

      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alert');
      });
      cy.byTest('write-submit').click({ force: true });

      cy.get('@alert').should('have.been.called');
      cy.byTest('review-list').should('exist');
      cy.byTest('review-item').should('exist');

      cy.reload();
      cy.byTest('review-list').should('exist');
      cy.byTest('review-item').should('exist');
    });
  });

  it('사용자는 수강하지 않은 강의에 리뷰를 작성할 수 없다.', () => {
    cy.uiLogin();

    cy.getMyLectures().then((enrolledResponse) => {
      const enrolledLectures = enrolledResponse.body.data.map(
        (lecture: { lectureName: string }) => lecture.lectureName
      );

      const universityName = Cypress.env('TEST_UNIVERSITY_NAME');

      cy.getUniversityLectures(universityName).then((allLecturesResponse) => {
        const allLectures = allLecturesResponse.body.data;

        const unenrolledLecture = allLectures.find(
          (lecture: { lectureName: string }) => !enrolledLectures.includes(lecture.lectureName)
        );

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(unenrolledLecture).to.not.be.undefined;

        if (!unenrolledLecture) {
          throw new Error('비수강 강의를 찾을 수 없습니다');
        }

        cy.visitUniversity();
        cy.clickLectureByName(unenrolledLecture.lectureName);

        cy.byTest('lecture-detail').should('exist');
        cy.byTest('write-review').click();
        cy.byTest('write-review-form').should('exist');
        cy.byTest('review-title-input').type('권한 테스트');
        cy.byTest('review-content-input').type('수강하지 않은 강의에 대한 리뷰 작성 시도');
        cy.byTest('star-5').click({ force: true });

        cy.window().then((win) => {
          cy.stub(win, 'alert').as('alert');
        });
        cy.byTest('write-submit').click({ force: true });

        cy.get('@alert').should('have.been.called');
      });
    });
  });
});
