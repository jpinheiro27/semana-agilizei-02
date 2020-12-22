/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Comando para executar Login em Background
       * @example
       * cy.backgroundLogin()
       * 
       */
      backgroundLogin(): Chainable<any>
  
    }
  }