/*
The Step Definition can be a regular expression or a Cucumber expression. 
 https://docs.cucumber.io/cucumber/step-definitions/
*/

/*
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

WebStorm Support
If you want WebStorm to resolve your steps, use the capitalized Given/When/Then function names (instead of the initial given/when/then). Unfortunately, at this point WebStorm only understands regexp syntax:

Given(/^user navigated to the Start page?/, () => { });
Or a backtick syntax but without Cucumber Expressions :-(. In other words, this works:

Given(`user navigated to the start page`, () => { });
Then(/(.*?) is chosen/, choice => {})
But this doesn't:

Then(`{word} is chosen`, choice => {})
(See #56)
*/

// Example with cucumber expression.
Given(/^I go to the website (.*)$/, (url) => {
    cy.visit(url)
  })
  
 // Example with regulair expression.  
Then(/^I see (.*) in the title$/, (title) => {
  cy.title().should('include', title)
})
