/// <reference types="cypress" />

export {};

Cypress.Commands.add('byTest', (testId: string) => {
  return cy.get(`[data-test="${testId}"]`).filter(':visible').first();
});

Cypress.Commands.add('dedupeByTest', (testId: string) => {
  cy.document().then((doc) => {
    const nodes = Array.from(doc.querySelectorAll(`[data-test="${testId}"]`));
    if (nodes.length <= 1) return;
    const isVisible = (el: Element) => (el as HTMLElement).offsetParent !== null;
    const keeper = nodes.find(isVisible) ?? nodes[0];
    nodes.forEach((el) => {
      if (el !== keeper) el.parentElement?.removeChild(el);
    });
  });
});

Cypress.Commands.add('uiLogin', (userId?: string, userPw?: string) => {
  const id = userId ?? (Cypress.env('TEST_USER_ID') as string);
  const pw = userPw ?? (Cypress.env('TEST_USER_PW') as string);

  cy.intercept('POST', '**/signin').as('signin');
  cy.visit('/');

  cy.get('body').then(($body) => {
    const hasDataTest = $body.find('[data-test="open-login"]').length > 0;
    if (hasDataTest) {
      cy.dedupeByTest('open-login');
      cy.byTest('open-login').click();
    } else {
      cy.get('header', { timeout: 10000 }).within(() => {
        cy.contains('button', '로그인', { timeout: 10000 }).click();
      });
    }
  });
  cy.get('#login-id').filter(':visible').first().type(String(id), { force: true });
  cy.get('#login-password').filter(':visible').first().type(String(pw), { force: true });
  cy.dedupeByTest('login-form');
  cy.byTest('login-form').within(() => {
    cy.dedupeByTest('login-submit');
    cy.byTest('login-submit').click({ force: true });
  });
  cy.wait('@signin');

  cy.get('header').contains('button', '로그아웃', { timeout: 10000 }).should('be.visible');
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      byTest(testId: string): Chainable<JQuery<HTMLElement>>;
      dedupeByTest(testId: string): Chainable<void>;
      uiLogin(userId?: string, userPw?: string): Chainable<void>;
    }
  }
}

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
