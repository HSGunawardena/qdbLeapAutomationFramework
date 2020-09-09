import { UserDetailsPageElements } from "../fixtures/PageElements/userDetailsPageElements";
const udpe = new UserDetailsPageElements();

export class UserDetailsPage {
    enterEmail(email) {
        cy.get(udpe.emailFieldElement).type(email)
    }
    enterPassword(passowrd) {
        cy.get(udpe.passwordFieldElement).type(passowrd).should('have.value', passowrd)
    }
    reEnterPassword(passowrd) {
        cy.get(udpe.reEnterPasswordFieldElement).type(passowrd).should('have.value', passowrd)
    }
    clickOnContinueButton() {
        cy.get(udpe.continueButtonElement).click()
    }
    verifyAccountDetailsTitle(expected) {
        cy.xpath(udpe.accountDetailsTitleElement).should('include.text', expected)
    }
    verifyAboutYouTitle(expected) {
        cy.xpath(udpe.aboutYouTitleElement).should('include.text', expected)
    }
    verifyAboutYourBusinessTitle(expected) {
        cy.xpath(udpe.aboutYourBusinessTitleElement).should('include.text', expected)
    }
    enterFullName(fullName) {
        cy.get(udpe.fullNameElement).type(fullName).should('have.value', fullName)
    }
    qatarNational(status) {
        if (status === 'Yes') {
            cy.get(udpe.qatarNationalRadioElement).eq(0).check().should('be.checked')
        } else if (status === 'No') {
            cy.get(udpe.qatarNationalRadioElement).eq(1).check().should('be.checked')
        } else {
            cy.log('Incorrect Nationality type in the test. Please check the test again. Applicable values: Yes / No only')
        }
    }
    enterNationalId(qnid) {
        cy.get(udpe.qatarNationalIDElement).type(qnid).should('have.value', qnid)
    }
    enterPhone(phone) {
        cy.get(udpe.phoneNumberElement).type(phone).should('have.value', '+974 ' + phone)
    }
    sendOTPButtonIsEnabled() {
        cy.get(udpe.sendOTPButtonElement).should('not.be.disabled')
    }
    sendOTPButtonIsDisabled() {
        cy.get(udpe.sendOTPButtonElement).should('be.disabled')
    }
    clickOnSendOTPButton() {
        cy.get(udpe.sendOTPButtonElement).click()
    }
    verifyOTPTitle(title) {
        cy.contains(udpe.OTPInputFieldTitleElement).should('include.text', title)
    }
    enterOtp(otp) {
        cy.get(udpe.otpInputElements).eq(8).type(otp).should('have.value', otp[0])
        cy.get(udpe.otpInputElements).eq(9).should('have.value', otp[1])
        cy.get(udpe.otpInputElements).eq(10).should('have.value', otp[2])
        cy.get(udpe.otpInputElements).eq(11).should('have.value', otp[3])
        cy.get(udpe.otpInputElements).eq(12).should('have.value', otp[4])
        cy.get(udpe.otpInputElements).eq(13).should('have.value', otp[5])
    }
    selectIndustry(industry) {
        cy.get(udpe.industryInputElement).click()
        cy.get(udpe.industryAndBusinessSectorDropdownListsElement).eq(0).click()
    }
    selectBusinessSector(businessSector) {
        cy.get(udpe.businessSectorInputElement).click()
        cy.get(udpe.industryAndBusinessSectorDropdownListsElement).eq(1).click()
    }
    selectNewBusinessOption() {
        cy.get(udpe.newBusinessElement).click()
    }
    selectExistingBusinessOption() {
        cy.get(udpe.existingBusinessElement).click()
    }
    enterYourAmount(amount) {
        cy.get(udpe.yourAmountElement).type(amount)
    }
    createAccountButtonIsEnabled() {
        cy.get(udpe.createAccountButtonElement).should('not.be.disabled')
    }
    createAccountButtonIsDisabled() {
        cy.get(udpe.createAccountButtonElement).should('be.disabled')
    }
    clickOnCreateAccountButton() {
        cy.get(udpe.createAccountButtonElement).click()
    }
    verifyCheckYourInboxTitle(expected) {
        cy.get(udpe.checkYourInboxTitleElement).should('include.text', expected)
    }
    verifyVerificationEmail(expected) {
        cy.get(udpe.verificationEmailInputElement).should('have.value', expected)
    }
    resendEmailVerificationButtonIsDisabled() {
        cy.get(udpe.resendEmailVerificationLinkElement).should('not.be.enabled')
    }
    resendEmailVerificationButtonIsEnabled() {
        cy.get(udpe.resendEmailVerificationLinkElement).should('be.enabled')
    }
    clickOnResendEmailVerificationButton() {
        cy.get(udpe.resendEmailVerificationLinkElement).click()
    }
    resendOTPButtonIsDisabled() {
        cy.get(udpe.resendOTPButtonElement).should('not.be.visible')
    }
    resendOTPButtonIsEnabled() {
        cy.get(udpe.resendOTPButtonElement).should('be.visible')
    }
    verifyResendButtonText(expected) {
        cy.get(udpe.resendOTPButtonElement).should('have.text', expected)
    }
    clickOnResendOTPButton() {
        cy.get(udpe.resendOTPButtonElement).click()
    }
}