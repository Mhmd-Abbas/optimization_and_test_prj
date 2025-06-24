/* eslint-disable no-undef */
describe('Verify that the navigation menu is working', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })
  it('should navigate to the Card set page', () => {
    cy.get('[id="cardSetPage"]').click()
  })

  it('should navigate to the about page', () => {
    cy.get('[id="aboutPage"]').click()
  })

  it('should navigate to the about page and get back to the home page', () => {
    cy.get('[id="aboutPage"]').click()
    cy.get('[id="homePage"]').click()
  })
})