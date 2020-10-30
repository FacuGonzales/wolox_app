/// <reference types="cypress" />

context('LandingPage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/register');
    })

    it('Debo poder completar el campo nombre', () => {
        cy.wait(2500);
        cy.get('#nombreId').type('Prueba')
        cy.wait(2000);
    })

    it('Debo poder completar el campo apellido', () => {
        cy.wait(2500);
        cy.get('#apellidoId').type('Apellido Prueba')
        cy.wait(2000);
    })

})