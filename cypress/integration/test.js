describe('My First Cypress test', function() {
    it('Visits Cypress website and checks the title', function() {
      cy.visit('https://example.cypress.io')
      cy.title().should('include', 'Cypress.io: Kitchen Sink')
    })
  })