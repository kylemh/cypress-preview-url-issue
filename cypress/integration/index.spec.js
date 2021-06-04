describe('Test', () => {
  it('works', () => {
    cy.visit('/');
    cy.get('[data-testid="welcome"]')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Welcome');
  });
});
