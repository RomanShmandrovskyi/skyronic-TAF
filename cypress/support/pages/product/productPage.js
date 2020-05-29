import homePage from "../home/homePage";
import {ADD_TO_CART_BUTTON_CSS, GO_BACK_LINK_CSS} from "./productPageElements";

/**
 * Product page object
 */
export default function productPage() {
    return {

        /**
         * Click BACK button on Product page
         *
         * @return Home page object
         */
        goBack() {
            cy.get(GO_BACK_LINK_CSS)
                .click();

            return homePage();
        },

        /**
         * Add product to cart. Support multiple addition.
         *
         * @param times (optional): Integer -> Click <times> times on Add to cart button
         * @return Product page object
         */
        addToCart(times = 1) {
            for (let i = 0; i < times; i++) {
                cy.get(ADD_TO_CART_BUTTON_CSS)
                    .click();
            }

            return this;
        },
    }
}
