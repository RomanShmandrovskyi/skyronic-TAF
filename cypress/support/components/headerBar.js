import homePage from "../pages/home/homePage";
import {CART_LINK_CSS, HOME_LINK_CSS} from "./headerBarElements";

export default function navigate() {
    return {
        home() {
            cy.get(HOME_LINK_CSS)
                .click();

            return homePage();
        },

        cart() {
            cy.get(CART_LINK_CSS)
                .click();

            return cartPage();
        },
    }
}
