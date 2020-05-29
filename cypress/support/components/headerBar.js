import homePage from "../pages/home/homePage";
import cartPage from "../pages/cart/cartPage";
import {CART_LINK_CSS, HOME_LINK_CSS} from "./headerBarElements";

/**
 * Header Bar page component
 * */
export default function headerBar() {
    return {
        /**
         * Click on Home link
         *
         * @return Home page object
         * */
        clickHome() {
            cy.get(HOME_LINK_CSS)
                .click();

            return homePage();
        },

        /**
         * Click on Cart link
         *
         * @return Cart page object
         * */
        clickCart() {
            cy.get(CART_LINK_CSS)
                .click();

            return cartPage();
        },
    }
}
