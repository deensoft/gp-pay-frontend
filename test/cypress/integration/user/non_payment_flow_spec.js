describe('Non payment flow pages', () => {
  beforeEach(() => {
    cy.task('setupStubs', [ { name: 'example', opts: {} } ])
  })
  describe('Homepage', () => {
    it('should have the page title \'Dashboard - System Generated test - GOV.UK Pay\'', () => {
      cy.visit('/')
      cy.title().should('eq', 'GOV.UK Pay')
    })
  })
})
