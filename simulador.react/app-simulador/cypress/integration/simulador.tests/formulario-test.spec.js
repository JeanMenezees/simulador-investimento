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
    //Ver se as labels marcadas estao no documento
  });

  it('nao deve habilitar o botao dado os inputs vazios dos forms', () => {
    cy.visit("/")
    // Visitar e conferir se o botao de simular tem a propriedade desabilitado
  });
});