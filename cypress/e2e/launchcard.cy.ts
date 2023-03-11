
describe('Launch Card', () => {
    it ('should display the 10 launch cards', () => {
      cy.visit(`http://localhost:3000/`)
      cy.get('[data-cy=launch-card]').should('have.length', 10)
    })
  
    it ('should link to the launch page', () => {
      
      let launchName = '';
      
      cy.visit(`http://localhost:3000/`)

      cy.get('[data-cy=launch-card-name]').eq(2).then((launchCardName) => {
        launchName = launchCardName.text()
      })

      cy.get('[data-cy=launch-card-more-details]').
        eq(2).
        invoke('attr', 'href').
        then((href) => {
            cy.visit(`http://localhost:3000${href}`)
            cy.contains('h1', launchName)
        })
  
    })

    it('should display the correct launch card data', () => {
      cy.visit(`http://localhost:3000/`)

      cy.get('[data-cy=launch-card]').eq(2).then((launchCard) => {
        const launchName = launchCard.find('[data-cy=launch-card-name]').text()
        const launchDate = launchCard.find('[data-cy=launch-card-date]').text()
        const launchCore = launchCard.find('[data-cy=launch-card-core]').text()
        const launchPayload = launchCard.find('[data-cy=launch-card-payload]').text()
        const launchSuccess = launchCard.find('[data-cy=launch-card-success]').text()

        cy.get('[data-cy=launch-card-more-details]').
          eq(2).
          invoke('attr', 'href').
          then((href) => {
              cy.visit(`http://localhost:3000${href}`)
              cy.contains('h1', launchName)
              cy.contains('p', launchDate)
              cy.contains('p', launchCore)
              cy.contains('p', launchPayload)
              cy.contains('p', launchSuccess)
          })
      })
    })
})

export {}