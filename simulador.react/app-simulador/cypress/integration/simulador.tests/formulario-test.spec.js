/// <reference types="cypress" />

describe('Ao inicializar o formulario', () => {
  it('deve conter os dados de ipca', () => {
    cy.visit("/")
    // Após a visita ver se o input marcado tem o valor 9.15
    cy.get('#ipca').should('have.value', 9.15)
  });

  it('deve conter os dados de cdi', () => {
    cy.visit("/")
    // Após a visita ver se o input marcado tem o valor 10.06
    cy.get('#cdi').should('have.value', 10.06)
  });

  it('nao deve trocar o valor do ipca', () => {
    cy.visit('/');
    cy.get('#ipca').type('teste');
    cy.get('#ipca').should('have.value', 9.15);
  });

  it('nao deve trocar o valor do cdi', () => {
    cy.visit('/');
    cy.get('#cdi').type('teste');
    cy.get('#cdi').should('have.value', 10.06);
  });

  it('deve aparecer a label de erro dado um caracter digitado', () =>{
    cy.visit("/")
    //Visitar e digitar um caracter em todos os inputs dos formularios
    cy.get("#input__1--teste").type("a");
    cy.get("#input__2--teste").type("b");
    //Ver se as labels marcadas estao no documento
    cy.get("#label__1--teste").should('be.visible');
    cy.get("#label__2--teste").should('be.visible');
  });

  it('nao deve habilitar o botao dado os inputs vazios dos forms', () => {
    cy.visit("/")
    // Visitar e conferir se o botao de simular tem a propriedade desabilitado
    cy.get("#botao__simular--teste").should('not.have.a.property', "valido")
  });

  it('deve habilitar o botao de simular com dados validados', () => {
    cy.visit("/")
    // Visitar e conferir se o botao de simular tem a propriedade desabilitado
    cy.get("#input__1--teste").type(1);
    cy.get("#input__2--teste").type(1);
    cy.get("#input__1cdi--teste").type(1);
    cy.get("#input__2cdi--teste").type(1);

    cy.get("#botao__click--teste").click();
    cy.get("#botao__click--teste2").click();

    cy.get("#botao__simular--teste").click();
  });
});