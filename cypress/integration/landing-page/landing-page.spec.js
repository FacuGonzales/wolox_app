
/// <reference types="cypress" />

context('LandingPage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })

    it('Debo poder scrollear dentro de la página', () => {
        cy.wait(2500);
        cy.scrollTo('center');
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('center');
        cy.wait(2000);
        cy.scrollTo('top');
        cy.wait(2000);
        cy.scrollTo('center');
    })

    it('Debo poder hacer click en "Siguenos"', () => {
        cy.wait(2500);
        cy.get('#buttonSiguenos').click();
    })

    it('Debo poder hacer click en "Conocer más"', () => {
        cy.wait(2500);
        cy.get('#buttonConocerMas').click();
    })

    it('Debo poder ir a "Inicio" y luego a "Beneficios"', () => {
        cy.wait(2500);
        cy.scrollTo('top');
        cy.wait(2500);
        cy.get('#inicioId').click();
        cy.wait(5000);
        cy.get('#beneficiosId').click();
        cy.wait(3000);
    })

    it('Debo poder volver a "Home"', () => {
        cy.wait(3000);
        cy.get('#homeId').click();
    })

    it('Debo poder ir a "Register"', () => {
        cy.wait(3000);
        cy.get('#registerId').click();
    })
})