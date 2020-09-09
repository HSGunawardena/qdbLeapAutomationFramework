import { SetNewPasswordPageElements } from "../fixtures/PageElements/setNewPasswordPageElemets";
const snppe = new SetNewPasswordPageElements();

export class SetNewPasswordPage {

    getSetNewPasswordPageHeaderTitle() {
        return cy.get(snppe.pageTitleElement)
    }

    enterPassword(passowrd) {
        cy.get(snppe.passwordFieldElement).type(passowrd).should('have.value', passowrd)
    }

    reEnterPassword(passowrd) {
        cy.get(snppe.reEnterPasswordFieldElement).type(passowrd).should('have.value', passowrd)
    }

    clickOnConfirmAndContinueButton() {
        cy.get(snppe.confirmAndContinueButtonElement).click()
    }
}