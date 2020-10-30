/// <reference types="cypress" />

context('ListPage', () => {
    beforeEach(() => {
        cy.saveToken()
        cy.wait(2000);
        cy.visit('http://localhost:4200/listado');
    })

    it('Debo poder filtrar por nombre de tecnología', () => {
        cy.wait(5000);
        cy.get('#filterInputId').type('Angular');
        cy.wait(2500);
        cy.get('#filterInputId').clear();
        cy.wait(2500);
        cy.get('#filterInputId').type('An');
        cy.wait(2500);
        cy.get('#filterInputId').clear();
        cy.wait(2500);
        cy.get('#filterInputId').type('Node');
        cy.wait(2500);
        cy.get('#filterInputId').clear();

    })

    it('Debo poder filtrar por tecnologias del Front', () => {
        cy.wait(5000);
        cy.get('#filterFrontId').click();
        cy.wait(3500);
    })

    it('Debo poder filtrar por tecnologias del Back', () => {
        cy.wait(5000);
        cy.get('#filterBackId').click();
        cy.wait(3500);
    })

    it('Debo poder filtrar por tecnologias Mobile', () => {
        cy.wait(5000);
        cy.get('#filterMobileId').click();
        cy.wait(3500);
    })

    it('Debo poder filtrar por Todas las tecnologias', () => {
        cy.wait(5000);
        cy.get('#filterTodosId').click();
        cy.wait(3500);
    })

    it('Debo poder ordenarlas de A-Z', () => {
        cy.wait(5000);
        cy.get('#filterAzId').click();
        cy.wait(3500);
    })

    it('Debo poder ordenarlas de Z-A', () => {
        cy.wait(5000);
        cy.get('#filterZaId').click();
        cy.wait(3500);
    })

    it('Debo poder darle like a una tecnología', () => {
        cy.wait(5000);
        cy.get('#NodeId > .item-wrap > .info-tec-container > #buttonLikeId').click();
        cy.wait(3500);
        cy.get('#ReactId > .item-wrap > .info-tec-container > #buttonLikeId').click()
        cy.wait(3500);
        cy.get('#AngularId > .item-wrap > .info-tec-container > #buttonLikeId').click();
        cy.wait(2000);
        cy.scrollTo('top');
    })
    
})