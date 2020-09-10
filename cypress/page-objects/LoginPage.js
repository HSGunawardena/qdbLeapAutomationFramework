import { LoginPageElements } from "../fixtures/PageElements/logingPageElements";
const lpe = new LoginPageElements();

export class LoginPage {
    clickPasswordResetLink() {
        cy.get(lpe.forgotPasswordLinkElement).click()
    }
    login(email, password) {
        cy.get(lpe.emailFieldElement).type(email).should('have.value', email)
        cy.get(lpe.passwordFieldElement).type(password).should('have.value', password)
        cy.get(lpe.signInButtonElement).click()
    }
}