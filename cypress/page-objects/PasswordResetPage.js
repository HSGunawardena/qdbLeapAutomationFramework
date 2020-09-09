import { PasswordResetPageElements } from "../fixtures/PageElements/passwordResetPageElemets";
const prpe = new PasswordResetPageElements();

export class PasswordResetPage {

    getPasswordResetPageHeaderTitle() {
        return cy.get(prpe.pageTitleElement)
    }

    verifyPasswordResetPageHeaderTitle(expected) {
        cy.get(prpe.pageTitleElement).should('include.text', expected)
    }

    enterEmail(email) {
        cy.get(prpe.emailFieldElement).type(email).should('have.value', email)
    }

    clickOnSendRecoveryLinkButton() {
        cy.get(prpe.sendRecoveryLinkButtonElement).click()
    }
}