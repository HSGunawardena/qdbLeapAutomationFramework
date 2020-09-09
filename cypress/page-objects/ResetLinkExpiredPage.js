import { ResetLinkExpiredPageElements } from "../fixtures/PageElements/resetLinkExpiredPageElements";
const prpe = new ResetLinkExpiredPageElements();

export class ResetLinkExpiredPage {

    getResetLinkExpiredPageHeaderTitle() {
        return cy.get(prpe.pageTitleElement)
    }

    verifyResetLinkExpiredPageHeaderTitle(expected) {
        cy.get(prpe.pageTitleElement).should('include.text', expected)
    }

    enterEmail(email) {
        cy.get(prpe.emailFieldElement).type(email).should('have.value', email)
    }

    clickOnSendRecoveryLinkButton() {
        cy.get(prpe.sendRecoveryLinkButtonElement).click()
    }
}