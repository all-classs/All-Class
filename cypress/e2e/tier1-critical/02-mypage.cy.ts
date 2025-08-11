describe('사용자는 마이페이지에서 리뷰 및 강의를 관리할 수 있다.', () => {
  it('사용자는 비로그인 상태에서 마이페이지에 접근 시 로그인 유도를 받는다.', () => {
    cy.clearCookies();

    cy.visit('/mypage/reviews');

    cy.location('pathname').should('eq', '/');
    cy.location('search').should('contain', 'showLogin=true');
  });

  it('사용자는 로그인 후 마이페이지에 접근하며 내 강의 목록을 확인할 수 있다.', () => {
    cy.uiLogin();
    cy.visit('/mypage/lectures');

    cy.byTest('my-lectures-list').should('exist');
    cy.byTest('my-lecture-card').first().click();

    cy.byTest('lecture-detail').should('exist');
  });

  it('사용자는 마이페이지에서 내 리뷰를 수정 및 삭제할 수 있다.', () => {
    cy.uiLogin();
    cy.visit('/mypage/reviews');

    cy.get('body').then(($body) => {
      const hasList = $body.find('[data-test="my-reviews-list"]').length > 0;
      if (!hasList) {
        cy.byTest('my-reviews-empty').should('exist');
        return;
      }

      cy.byTest('my-reviews-list').within(() => {
        cy.byTest('my-review-item').first().as('target');
        cy.get('@target').find('[data-test="my-review-edit"]').click({ force: true });
      });
      cy.byTest('write-review-form').should('exist');
      cy.byTest('review-title-input').type(' (수정)');
      cy.byTest('write-submit').click({ force: true });

      cy.byTest('my-reviews-list').within(() => {
        cy.get('@target')
          .find('[data-test="my-review-title"]')
          .should(($t) => {
            expect($t.text()).to.contain('(수정)');
          });
      });

      cy.window().then((win) => {
        const confirmStub = cy.stub(win, 'confirm').returns(true);
        cy.wrap(confirmStub).as('confirm');
      });
      cy.byTest('my-reviews-list').within(() => {
        cy.get('@target').find('[data-test="my-review-delete"]').click({ force: true });
      });
      cy.get('@confirm').should('have.been.called');
    });
  });
});
