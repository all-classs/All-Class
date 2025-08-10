describe('사용자는 로그인을하고 자신이 들은 강의에 리뷰를 작성할 수 있다.', () => {
  it('사용자는 헤더에 로그인 버튼을 통해 로그인할 수 있다.', () => {
    cy.clearCookies();

    cy.uiLogin();

    cy.get('header').contains('button', '로그아웃').should('be.visible');
  });

  it('사용자는 자신이 수강한 강의를 찾고 리뷰를 작성할 수 있다.', () => {
    cy.uiLogin();
    cy.visit(encodeURI('/동서대학교'));

    cy.contains('[data-test="lecture-card"] h3', '데이터마이닝', { timeout: 15000 })
      .scrollIntoView()
      .should('be.visible')
      .then(($h3) => {
        cy.wrap($h3).closest('a').click({ force: true });
      });
    cy.byTest('lecture-detail').should('exist');

    cy.byTest('write-review').click();
    cy.byTest('write-review-form').should('exist');
    cy.byTest('review-title-input').type('데이터마이닝 수업 후기');
    cy.byTest('review-content-input').type(
      '실습 위주로 진행되어 이해가 쉬웠고, 과제량이 적당했습니다. 추천합니다.'
    );
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

  it('사용자는 수강하지 않은 강의에 리뷰를 작성할 수 없다.', () => {
    cy.uiLogin();
    cy.visit(encodeURI('/동서대학교'));
    cy.byTest('lecture-card').first().click();
    cy.byTest('lecture-detail').should('exist');

    cy.byTest('write-review').click();
    cy.byTest('write-review-form').should('exist');
    cy.byTest('review-title-input').type('후기 작성 테스트');
    cy.byTest('review-content-input').type(
      '수강하지 않은 강의에 대한 리뷰 작성 시도가 차단되는지 확인합니다.'
    );
    cy.byTest('star-5').click({ force: true });
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert');
    });
    cy.byTest('write-submit').click({ force: true });

    cy.get('@alert').should('have.been.called');
  });
});
