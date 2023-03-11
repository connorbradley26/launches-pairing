
describe('Home Page', () => { 
  it ('should display the home page', () => {
      cy.visit(`http://localhost:3000/`)
      cy.contains('h1', 'SpaceX Launches')
  })

  it ('should display the 10 launch cards', () => {
    cy.visit(`http://localhost:3000/`)
    cy.get('[data-cy=launch-card]').should('have.length', 10)
  })
})

export {}