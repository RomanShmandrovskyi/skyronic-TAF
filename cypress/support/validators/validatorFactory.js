import homePageValidator from "./homePageValidator";
import productPageValidator from "./productPageValidator";
import cartPageValidator from "./cartPageValidator";

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
    }
}
