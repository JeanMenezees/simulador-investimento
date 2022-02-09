/// <reference types="cypress" />

describe('quando clicar no botao simular', () => {
    it('deve aparecer o resultado', () => {
        // Visitar e verificar // Ver se a secao do resultado marcada esta no documento
        cy.visit('/');

        cy.get("#input__1--teste").type(1);
        cy.get("#input__2--teste").type(1);
        cy.get("#input__1cdi--teste").type(1);
        cy.get("#input__2cdi--teste").type(1);
    
        cy.get("#botao__click--teste").click();
        cy.get("#botao__click--teste2").click();

        cy.get("#botao__simular--teste").click();

        cy.get("#resultado--teste").should('be.visible');
    });

    it('deve aparecer os dados da api no resultado', () => {
        cy.visit('/');
        //arrange
        const valor1 = 2048.09
        const valor2 =1048.08;
        const valor3 = 1000;
        const zero = 0;
        // Clicar em tipos
        // Clique em outros e mude os valores
        cy.get("#input__1--teste").type(1);
        cy.get("#input__2--teste").type(1);
        cy.get("#input__1cdi--teste").type(1);
        cy.get("#input__2cdi--teste").type(1);
    
        cy.get("#botao__click--teste").click();
        cy.get("#botao__click--teste2").click();

        cy.get("#botao__simular--teste").click();
        // Ver se o valor bate com o arrange
        cy.get("#resultado__valor--teste1").should('have.text', "R$ "+ valor1);
        cy.get("#resultado__valor--teste2").should('have.text', zero + "%");
        cy.get("#resultado__valor--teste3").should('have.text', "R$ "+ zero);
        cy.get("#resultado__valor--teste4").should('have.text', "R$ "+ valor3);
        cy.get("#resultado__valor--teste5").should('have.text', "R$ "+ valor1);
        cy.get("#resultado__valor--teste6").should('have.text', "R$ "+ valor2);
    })
});