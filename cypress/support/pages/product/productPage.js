import homePage from "../home/homePage";
import {ADD_TO_CART_BUTTON_CSS, GO_BACK_LINK_CSS} from "./productPageElements";

export default function productPage() {
    return {

        goBack() {
            cy.get(GO_BACK_LINK_CSS)
                .click();

            return homePage();
        },

        addToCart() {
            cy.get(ADD_TO_CART_BUTTON_CSS)
                .click();

            return this;
        },
    }
}
