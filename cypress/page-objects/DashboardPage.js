import { DashboardElements } from "../fixtures/PageElements/dashboard";
const de = new DashboardElements();

export class DashboardPage {
    getDashboardPageHeaderTitle() {
        return cy.contains(de.pageTitleElement)
    }
}