describe('사용자는 리뷰 좋아요를 누를 수 있고, 리뷰 정렬 탭을 통해 리뷰를 정렬할 수 있다.', () => {
  beforeEach(() => {
    cy.uiLogin();

    const universityName = Cypress.env('TEST_UNIVERSITY_NAME');
    cy.getLectureWithReviews(universityName).then((lectureWithReviews) => {
      cy.visitUniversity();
      cy.clickLectureByName(lectureWithReviews.lectureName);
      cy.byTest('lecture-detail').should('exist');
    });
  });

  it('사용자는 좋아요 버튼을 통해 리뷰에 좋아요를 누를 수 있다. 한번더 누르면 좋아요가 취소된다.', () => {
    cy.byTest('review-list').should('exist');
    cy.byTest('review-item').first().as('firstReview');
    cy.get('@firstReview')
      .find('[data-test="like-count"]')
      .invoke('text')
      .then((text) => {
        const initial = parseInt(text || '0', 10) || 0;

        cy.get('@firstReview').find('[data-test="like"]').click();
        cy.get('@firstReview')
          .find('[data-test="like-count"]')
          .should(($el) => {
            const now = parseInt($el.text() || '0', 10) || 0;
            expect(now).to.be.gte(initial);
          });

        cy.get('@firstReview').find('[data-test="like"]').click();
        cy.get('@firstReview')
          .find('[data-test="like-count"]')
          .should(($el) => {
            const now = parseInt($el.text() || '0', 10) || 0;
            expect(now).to.be.lte(initial + 1);
          });
      });
  });

  it('사용자는 리뷰 정렬 탭을 통해 리뷰를 특정 기준으로 정렬할 수 있다.', () => {
    cy.byTest('sort-container').should('exist');

    cy.byTest('sort-latest').click();
    cy.byTest('sort-rating_desc').click();
    cy.byTest('sort-rating_asc').click();
    cy.byTest('sort-likes_desc').click();

    cy.byTest('review-list').should('exist');
  });
});
