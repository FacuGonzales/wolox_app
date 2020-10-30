/// <reference types="cypress" />

context('LandingPage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/register');
    })

    it('Debo poder rellenar el formulario y registrarme', () => {
        cy.wait(2500);
        cy.get('#nombreId').type('Prueba')
        cy.wait(2000);
        cy.get('#apellidoId').type('Apellido Prueba')
        cy.wait(2000);
        cy.get('#paisId').select('Argentina')
        cy.wait(2000);
        cy.get('#provinciaId').select('Córdoba')
        cy.wait(2000);
        cy.get('#emailId').type('prueba@gmail.com')
        cy.wait(2000);
        cy.get('#telefonoId').type('351000012')
        cy.wait(2000);
        cy.get('#passwordId').type('1234Prueba')
        cy.wait(2000);
        cy.get('#rpPasswordId').type('1234Prueba')
        cy.wait(2000);
        cy.get('#checkId').click();
        cy.wait(3000);
        cy.get('#buttonEnviar').click();
    })

    
})