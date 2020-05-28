import homePage from "../home/homePage";
import {ADD_TO_CART_BUTTON_CSS, GO_BACK_LINK_CSS} from "./productPageElements";

export default function productPage() {
    return {

        goBack() {
            cy.get(GO_BACK_LINK_CSS)
                .click();

            return homePage();
        },

        // able to click several times, to add several products to cart
        addToCart(times) {
            for (let i = 0; i < times; i++) {
                cy.get(ADD_TO_CART_BUTTON_CSS)
                    .click();
            }

            return this;
        },
    }
}
