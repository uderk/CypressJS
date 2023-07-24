describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get("input[type='search']").should('exist');
  })
})