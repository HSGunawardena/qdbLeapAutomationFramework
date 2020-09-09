const { When, Then } = require("cypress-cucumber-preprocessor/steps");

const faker = require('faker');
const randomEmail = faker.internet.email();


When('I have sent a mail', () => {
    cy.log(randomEmail)
})
Then('I should receive it and be able to read it', () => {
})