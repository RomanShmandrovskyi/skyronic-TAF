import productPage from "../product/productPage";
import {PRODUCT_ITEM_LINK_XPATH} from "./homePageElements";

/**
 * Home page object
 * */
export default function homePage() {
    return {

        /**
         * Open needed product by product name
         *
         * @param productName: String -> Name of needed product
         * @return Product page object
         * */
        openProduct(productName) {
            cy.xpath(PRODUCT_ITEM_LINK_XPATH(productName))
                .click();

            return productPage();
        },
    }
}
