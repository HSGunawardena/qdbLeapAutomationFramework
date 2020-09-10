const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const { LoginPage } = require("../../../../page-objects/LoginPage");

const loginPage = new LoginPage();

When('I am logged in to the QDB Leap', () => {
    cy.fixture('urls').then((urls) => {
        cy.visit(urls.loginPageUrl)
    })
    cy.url().should('include', '/login')
    loginPage.login('user@domain.com', 'password1')
})
Then('I should see my user name', () => {

})