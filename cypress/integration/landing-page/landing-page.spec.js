
/// <reference types="cypress" />

context('LandingPage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })

    it('Debo poder ir a la Seccion de Inicio', () => {
        cy.wait(3500);
        cy.get('#inicioId').click()
        cy.wait(3500);
    })

    it('Debo poder hacer click en "Siguenos"', () => {
        cy.wait(3500);
        cy.get('#buttonSiguenos').click();
        cy.wait(3500);
        cy.scrollTo('top');
        cy.wait(3500);
    })

    it('Debo poder ir a la Seccion de Beneficios', () => {
        cy.wait(3500);
        cy.get('#beneficiosId').click();
        cy.wait(3500);
        cy.scrollTo('top');
        cy.wait(3500);
    })

    it('Debo poder scrollear al footer', () => {
        cy.wait(3500);
        cy.scrollTo('bottom');
        cy.wait(3500);
    })

    it('Debo poder hacer click en "Conocer más"', () => {
        cy.wait(3500);
        cy.get('#buttonConocerMas').click();
        cy.wait(3500);
    })

    it('Debo poder ir a "Register"', () => {
        cy.wait(3000);
        cy.get('#registerId').click();
    })
})