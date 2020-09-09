const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
import { UserDetailsPage } from "../../../../page-objects/UserDetailsPage";

const userDetailsPage = new UserDetailsPage();

// Scenario 01: User Credential Registration - Account Details
Given('I am on the Account Details screen', () => {
    cy.fixture('urls').then((urls) => {
        cy.visit(urls.userDetailsPageUrl)
    })
    cy.url().should('include', '/onboard')
    userDetailsPage.verifyAccountDetailsTitle("Account Details")
})

When('I enter my email address', () => {
    userDetailsPage.enterEmail("sgunawardena@qdb.qa")
})

And('I enter a new password', () => {
    userDetailsPage.enterPassword("@#$DFerdfg#$@234")
})

And('I re-confirm the new password', () => {
    userDetailsPage.reEnterPassword("@#$DFerdfg#$@234")
})

Then('the credentials are saved', () => {
    userDetailsPage.clickOnContinueButton()
})
And('the about you details section is shown', () => {
    cy.url().should('include', '/onboard')
    userDetailsPage.verifyAboutYouTitle('About you')
})
Given('I have already provided account details', () => {
    userDetailsPage.verifyAboutYouTitle('About you')
})
When('I enter full name', () => {
    userDetailsPage.enterFullName('Saliya Gunawardena')
})
And('I am a Qatar National', () => {
    userDetailsPage.qatarNational('Yes')
})
And('I enter valid Qatar National ID', () => {
    userDetailsPage.enterNationalId('893054154V')
    userDetailsPage.sendOTPButtonIsDisabled()
})
And('I provide valid phone number', () => {
    userDetailsPage.enterPhone('12312312')
})
Then('Send OTP button is enabled', () => {
    userDetailsPage.sendOTPButtonIsEnabled()
})
And('I receive the OTP when clicked on Send OTP', () => {
    userDetailsPage.clickOnSendOTPButton()
})
Given('I hve already received the OTP', () => {
    userDetailsPage.verifyAboutYouTitle('About you')
    userDetailsPage.verifyOTPTitle('Enter OTP:')
})
When('I enter correct OTP', () => {
    userDetailsPage.enterOtp('123456')
})
Then('about your business section is shown', () => {
    cy.url().should('include', '/onboard')
    userDetailsPage.verifyAboutYourBusinessTitle('About your Business')
})
Given('I have already verified the OTP', () => {
    cy.url().should('include', '/onboard')
})
When('I enter my business details', () => {
    userDetailsPage.selectIndustry('Communication')
    userDetailsPage.selectBusinessSector('Communication')
    userDetailsPage.selectNewBusinessOption()
    userDetailsPage.createAccountButtonIsDisabled()
    userDetailsPage.enterYourAmount('500000')
})
And('I click on create account button', () => {
    userDetailsPage.createAccountButtonIsEnabled()
    userDetailsPage.clickOnCreateAccountButton()
})
Then('I should be able to create account', () => {
    cy.url().should('include', '/onboard')
    userDetailsPage.verifyCheckYourInboxTitle('Check your inbox')
})
Given('I am in the check your inbox page', () => {
    userDetailsPage.verifyCheckYourInboxTitle('Check your inbox')
    userDetailsPage.verifyVerificationEmail('sgunawardena@qdb.qa')
})
When('I wait for 30 seconds', () => {
    userDetailsPage.resendEmailVerificationButtonIsDisabled()
    cy.wait(30000)
})
Then('I am able to send the verification email for the second time', () => {
    userDetailsPage.resendEmailVerificationButtonIsEnabled()
    userDetailsPage.clickOnResendEmailVerificationButton()
})
And('I should be able verify account', () => {
    userDetailsPage.resendEmailVerificationButtonIsDisabled()
})
Given('I am in the send OTP section', () => {
    cy.fixture('urls').then((urls) => {
        cy.visit(urls.userDetailsPageUrl)
    })
    cy.url().should('include', '/onboard')
    userDetailsPage.verifyAccountDetailsTitle("Account Details")
    userDetailsPage.enterEmail("sgunawardena@qdb.qa")
    userDetailsPage.enterPassword("@#$DFerdfg#$@234")
    userDetailsPage.reEnterPassword("@#$DFerdfg#$@234")
    userDetailsPage.clickOnContinueButton()
    userDetailsPage.enterFullName('Saliya Gunawardena')
    userDetailsPage.qatarNational('Yes')
    userDetailsPage.enterNationalId('893054154V')
    userDetailsPage.sendOTPButtonIsDisabled()
    userDetailsPage.enterPhone('12312312')
    userDetailsPage.clickOnSendOTPButton()
})
And('I have not received the OTP in the first attempt', () => {
    userDetailsPage.resendOTPButtonIsDisabled()
})
When('I wait for 60 seconds', () => {
    cy.wait(61000)
})
Then('I am able to send OTP for the second time', () => {
    userDetailsPage.resendOTPButtonIsEnabled()
    userDetailsPage.verifyResendButtonText('Resend OTP')
    userDetailsPage.clickOnResendOTPButton()
    userDetailsPage.resendOTPButtonIsDisabled()
})
And('I receive the OTP to continue', () => {
    userDetailsPage.enterOtp('789012')
    userDetailsPage.verifyAboutYourBusinessTitle('About your Business')
})