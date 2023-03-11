describe('Launch Page', () => {
    it ('should display the launch page', () => {
      cy.visit(`http://localhost:3000/launch/62dd70d5202306255024d139`)
      cy.contains('h1', 'Crew-5')
    })

    it ('should display the correct launch data', () => {
        cy.visit(`http://localhost:3000/launch/62dd70d5202306255024d139`)
        cy.contains('h1', 'Crew-5')

        cy.contains('p', 'Wed Oct 05 2022')
        cy.contains('p', 'Success')
        cy.contains('blockquote', '62dd70d5202306255024d139')

        cy.contains('p', 'Crew-5')
        cy.contains('p', 'Crew Dragon')
        cy.contains('blockquote', '62dd73ed202306255024d145')

        cy.contains('p', 'B1077')
        cy.contains('blockquote', '633d9da635a71d1d9c66797b')
    })
  })

export {}