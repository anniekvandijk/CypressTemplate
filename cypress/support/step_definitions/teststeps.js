/*
The Step Definition can be a regular expression or a Cucumber expression. 
 https://docs.cucumber.io/cucumber/step-definitions/
*/

// Example with cucumber expression.
Given('I go to the website {string}', (url) => {
  cy.visit(url)
});
  
 // Example with regulair expression.  
Then(/^I see (.*) in the title$/, (title) => {
  cy.title().should('include', title)
});

// Example without expression
Then('the logo name should be cypress.io', () => {
  cy.get('.navbar-brand').should('have.text',"cypress.io")
});
