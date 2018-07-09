/*
The Step Definition can be a regular expression or a Cucumber expression. 
 https://docs.cucumber.io/cucumber/step-definitions/
*/

// Example with cucumber expression.
given('I go to the website {string}', (url) => {
    cy.visit(url)
  })
  
 // Example with regulair expression.  
then(/^I see (.*) in the title$/, (title) => {
  cy.title().should('include', title)
})
