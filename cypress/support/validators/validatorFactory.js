import homePageValidator from "./homePageValidator";
import productPageValidator from "./productPageValidator";
import cartPageValidator from "./cartPageValidator";
import headerBarValidator from "./headerBarValidator";

export default function validateThat() {
    return {
        onHomePage() {
            return homePageValidator();
        },

        onProductPage() {
            return productPageValidator();
        },

        onCartPage() {
            return cartPageValidator();
        },

        onHeaderBar() {
            return headerBarValidator();
        }
    }
}
