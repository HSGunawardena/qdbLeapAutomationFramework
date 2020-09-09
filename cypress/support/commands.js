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

Cypress.Commands.add('getLastEmail', email => {
    function requestEmail() {
      return cy
        .request({
          method: 'GET',
          url: 'http://localhost:4003/last-email',
          headers: {
            'content-type': 'application/json',
          },
          qs: {
            email,
          },
          json: true,
        })
        .then(({ body }) => {
          if (body) {
            return body;
          }
  
          // If body is null, it means that no email was fetched for this address.
          // We call requestEmail recursively until an email is fetched.
          // We also wait for 300ms between each call to avoid spamming our server with requests
          cy.wait(300);
  
          return requestEmail();
        });
    }
  
    return requestEmail();
  });