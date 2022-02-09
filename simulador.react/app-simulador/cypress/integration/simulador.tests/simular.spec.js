/// <reference types="cypress" />

describe('quando clicar no botao simular', () => {
    it('deve aparecer o resultado', () => {
        // Visitar e verificar // Ver se a secao do resultado marcada esta no documento
        cy.visit('/');

        cy.get("#botao__click--teste").click();
        cy.get("#botao__click--teste2").click();
        cy.get("#botao__simular--teste").click();

        cy.get("#resultado--teste").should('be.visible');
    });

    it('deve aparecer os dados da api no resultado', () => {
        // Clicar em tipos
        // Ver se o valor bate com o arrange
    })
});