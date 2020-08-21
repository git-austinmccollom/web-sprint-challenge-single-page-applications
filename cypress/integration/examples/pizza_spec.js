describe('pizza order', () => {
    it('Navigate to http://localhost:3000/pizza', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should( 'include', 'localhost')
    })
    it('type name', () => {
        cy.get('input[name="name"]')
            .type('Firstname Lastname')
            .should('have.value', 'Firstname Lastname')
    })
    it('select a size', () => {
        cy.get('select')
            .select('small')
    })
    it('select all toppings', () => {
        cy.get('[name="peppers"]')
            .check()
            .should('have.value', 'true')
    })
    it('select all toppings', () => {
        cy.get('[name="onions"]')
            .check()
            .should('have.value', 'true')
    })
    it('select all toppings', () => {
        cy.get('[name="jalapeños"]')
            .check()
            .should('have.value', 'true')
    })
    it('select all toppings', () => {
        cy.get('[name="olives"]')
            .check()
            .should('have.value', 'true')
    })
    it('submit', () => {
        cy.get('button')
            .click()
        cy.url().should( 'include', 'confirmation')
    })
})