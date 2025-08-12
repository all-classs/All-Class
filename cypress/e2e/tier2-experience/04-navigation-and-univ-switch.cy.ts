describe('사용자는 강의 목록에서 상세 페이지로 이동할 수 있고, 대학 전환 드롭다운을 통해 대학을 전환할 수 있다.', () => {
  it('사용자는 강의 목록에서 상세 페이지로 이동할 수 있다.', () => {
    cy.visitUniversity();
    cy.byTest('lecture-list').should('exist');

    cy.byTest('lecture-card').click();

    cy.byTest('lecture-detail').should('exist');
    cy.byTest('lecture-title').should('be.visible');
    cy.byTest('lecture-professor').should('be.visible');
  });

  it('사용자는 대학 전환 드롭다운을 통해 대학을 전환할 수 있다.', () => {
    cy.visitUniversity();

    const universityName = Cypress.env('TEST_UNIVERSITY_NAME');

    cy.byTest('univ-switch').click({ force: true });
    cy.byTest('univ-option').click({ force: true });

    cy.location('pathname').should('not.eq', encodeURI(`/${universityName}`));
  });
});
