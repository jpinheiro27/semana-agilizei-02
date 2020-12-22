// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364', 
        'R6xmma6F4U6edNQuu67M0vFMBcc%2BZrYPy3JHnuSig%2FVVFhLjvyoi0KynWq6%2FYEXj95CNbXi2bSa%2FAKC9bQ9DdZ1Et6rH%2B%2FkCeUUZdv503vhgCkSEAz7pNFXr9Vxxy9ZrtL%2B0miW%2FbbgJgfx4I4dS7IyiN0m7DUb6rph0NhK%2FnPrUobqXvW3xhygfW4NXTHyIGoQVZrtpUtQTjATDEQoEUXzx8Tk83tBzaPPVE8UvdiXv0qYdQTvhfCkXtDD3Uojlhk8RH0yqT447%2Bt5ccGtskKR9GnFdUE6lr%2FkoEpO1K1%2BM00p48Omdic%2Fnf07Skd5PckdkaHG59pI4S%2BY4CwOE1f5G0qJ57CEwPS%2FnwmXPSPPXUZTV4l8zklkzPJqXsUDsN5p%2FK4%2FvZ2Fc0p30IK2caTT7rb%2B2%2BUrpJc92imDlN%2Fo%3D000310'
        )
})