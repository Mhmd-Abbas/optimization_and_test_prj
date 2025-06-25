/* eslint-disable no-undef */
describe('Verify that both the "add new set" and "add new card" forms work', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })
  //happy cases
  it('should navigate to the Card set page and add a new set', () => {
    cy.get('[id="cardSetPage"]').click()
    cy.get('[data-cy="toggle_form"]').click()
    cy.get('[data-cy="set_form"]').should('exist')
    cy.get('[data-cy="set_form"]')
      .find('[id="titleInput"]').clear().type("new set")
    cy.get('[data-cy="set_form"]')
      .find('[type="submit"]').click()
  })

  it('should navigate to the Card set page and add a new card', () => {
    cy.get('[id="cardSetPage"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[class="cardPageContainer"]').should('exist')
    cy.get('[data-cy="toggle_form"]').click()
    cy.get('[data-cy="card_form"]').should('exist')
    cy.get('[data-cy="card_form"]')
      .find('[id="termInput"]').clear().type("new term")
    cy.get('[data-cy="card_form"]')
      .find('[id="descriptionInput"]').clear().type("new description")
    cy.get('[data-cy="card_form"]')
      .find('[type="submit"]').click()
  })


  //edge cases
  it('should navigate to the Card set page and try to add a new set with no title', () => {
    cy.get('[id="cardSetPage"]').click()
    cy.get('[data-cy="toggle_form"]').click()
    cy.get('[data-cy="set_form"]').should('exist')
    cy.get('[data-cy="set_form"]')
      .find('[id="titleInput"]').clear()
    cy.get('[data-cy="set_form"]')
      .find('[type="submit"]').click()
    cy.get('[class="error"]').should('exist')
  })

  it('should navigate to the Card set page and add a new card with no term and no description', () => {
    cy.get('[id="cardSetPage"]').click()
    cy.get('[data-cy="1"]').click()
    cy.get('[class="cardPageContainer"]').should('exist')
    cy.get('[data-cy="toggle_form"]').click()
    cy.get('[data-cy="card_form"]').should('exist')
    cy.get('[data-cy="card_form"]')
      .find('[id="termInput"]').clear()
    cy.get('[data-cy="card_form"]')
      .find('[id="descriptionInput"]').clear()
    cy.get('[data-cy="card_form"]')
      .find('[type="submit"]').click()
    cy.get('[class="error"]').should('exist')
  })
})