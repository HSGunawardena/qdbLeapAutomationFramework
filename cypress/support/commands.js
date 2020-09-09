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

// TODO: This is a mail server for receiving the emails when sign up and reset password. Need to work on this to improve
// const { MailSlurp } = require("mailslurp-client");
// const mailslurp = new MailSlurp({apiKey: "7c34431a8d18fde5fbd657826eb03135a6a32923c1eace419158eb76808781b8"});

// Cypress.Commands.add("createInbox", () => {
//   return mailslurp.createInbox();
// })