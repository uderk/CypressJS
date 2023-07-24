describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit("https://www.cypress.io/");
    cy.get("#dropdownProduct").should('exist');
  })
})