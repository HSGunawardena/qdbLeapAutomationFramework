const { Given, When, Then, Before } = require("cypress-cucumber-preprocessor/steps");
const faker = require('faker');
import { LoginPage } from "../../../../page-objects/LoginPage";
import { PasswordResetPage } from "../../../../page-objects/PasswordResetPage";
import { SetNewPasswordPage } from "../../../../page-objects/SetNewPasswordPage";
import { DashboardPage } from "../../../../page-objects/DashboardPage";
import { ResetLinkExpiredPage } from "../../../../page-objects/ResetLinkExpiredPage";

const loginPage = new LoginPage();
const passwordResetPage = new PasswordResetPage();
const setNewPasswordPage = new SetNewPasswordPage();
const dashboardPage = new DashboardPage();
const resetLinkExpiredPage = new ResetLinkExpiredPage();
const emailID = faker.internet.email();
// const password = faker.internet.password();
let activationLink;

// Scenario 01: Redirecting to reset password page
Given('I have forgotten my login credentials', () => {
    cy.fixture('urls').then((urls) => {
        cy.visit(urls.loginPageUrl)
    })
    cy.url().should('include', '/login')
})

When('I select Forgot password', () => {
    loginPage.clickPasswordResetLink()
})

Then('I should be directed to reset my password', () => {
    cy.url().should('include', '/forgot-password')
    passwordResetPage.verifyPasswordResetPageHeaderTitle('FORGOT PASSWORD?')
})

// Scenario 02: Sending link to given email
Given('I am on the reset password screen', () => {
    cy.fixture('urls').then((urls) => {
        cy.visit(urls.passwordRestPageUrl)
    })
    cy.url().should('include', '/forgot-password')
})

When('I enter my email address', () => {
    passwordResetPage.enterEmail(emailID) 
    passwordResetPage.clickOnSendRecoveryLinkButton()
})

Then('a link should be sent a unique recovery link on my email', () => {
    // FIXME: Need to work with email funciton
    cy.getLastEmail(emailID).then((email) => {
        activationLink = email.match(/href="([^"]*)/)[1]
        cy.visit(activationLink)
        // expect(activationLink).to.match('') // TODO: Provide correct link part to match
    })
    passwordResetPage.verifyPasswordResetPageHeaderTitle('EMAIL SENT')
})

// Scenario 03: Confirming the new password
Given('I have successfully received a link on my email to verify myself', () => {
    cy.visit(activationLink)
})

When('I land on the reset page', () => {
    cy.url().should('include', '/forgot-password') // TODO: Fill with the correct url of password setting page
    setNewPasswordPage.getSetNewPasswordPageHeaderTitle().contains('Set new password')
})

Then('I should be able to enter a new password', () => {
    setNewPasswordPage.enterPassword(password)
})

And("I should be able to re-confirm the new password", () => {
    setNewPasswordPage.reEnterPassword(password)
})

Given("I have successfully reset the password", () => {
    setNewPasswordPage.clickOnConfirmAndContinueButton()
})

Then("I should be able to login to the portal and get to the landing page", () => {
    dashboardPage.getDashboardPageHeaderTitle().contains('Your application progress')
})

Then("a prompt should be displayed in the landing link, that informs me of the link’s invalidity (e.g. expired link, or unauthorized link)", () => {
    resetLinkExpiredPage.verifyResetLinkExpiredPageHeaderTitle("YOUR RECOVERY LINK HAS EXPIRED")
})