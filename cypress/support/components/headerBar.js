import homePage from "../pages/home/homePage";
import {CART_LINK_CSS, HOME_LINK_CSS} from "./headerBarElements";

export default function headerBar() {
    return {
        clickHome() {
            cy.get(HOME_LINK_CSS)
                .click();

            return homePage();
        },

        clickCart() {
            cy.get(CART_LINK_CSS)
                .click();

            return cartPage();
        },
    }
}
