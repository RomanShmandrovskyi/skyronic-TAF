import productPage from "../product/productPage";
import {PRODUCT_ITEM_LINK_XPATH} from "./homePageElements";

export default function homePage() {
    return {
        openProduct(productName) {
            cy.xpath(PRODUCT_ITEM_LINK_XPATH(productName))
                .click();

            return productPage();
        },
    }
}
