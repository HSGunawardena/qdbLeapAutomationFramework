import { LoginPageElements } from "../fixtures/PageElements/logingPageElements";
const lpe = new LoginPageElements();

export class LoginPage {
    clickPasswordResetLink() {
        cy.get(lpe.linkElement).click()
    }
}