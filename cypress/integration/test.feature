Feature: Go to Cypress

    Scenario: Open website Cypress
        Given I go to the website "https://example.cypress.io"
        Then I see "Cypress.io: Kitchen Sink" in the title
        
        