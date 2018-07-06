given('I go to the website {string}', (url) => {
    cy.visit(url)
  })
  
then('I see {string} in the title', (title) => {
  cy.title().should('include', title)
})
