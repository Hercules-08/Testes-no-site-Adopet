describe('Verificar se o titulo AdoPet esta no html', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
    it('Deve apresentar o titulo no html', () => {   
      cy.title().should('eq','AdoPet');
    })
  })