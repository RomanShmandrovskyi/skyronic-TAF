import headerBar from "../../../support/components/headerBar";
import validateThat from "../../../support/validators/validatorFactory";

import {expProdArr} from '../../../fixtures/allProducts';
import {iPad, tShirt} from "../../../fixtures/productInfo";

describe('Test suite', () => {

    beforeEach('Go to url...', () => {
        cy.visit(Cypress.env('host'));
    });

    it('Home page validations', () => {
        headerBar().clickHome();

        validateThat().onHomePage()
            .productsCountIs(3)
            .and()
            .productsAreLike(expProdArr);
    });

    it('Product page validations', () => {
        headerBar().clickHome()
            .openProduct(iPad.title);

        validateThat().onProductPage()
            .inStockValueIs(2)
            .and()
            .addToCartButtonExists();
    });

    it('Add to cart', function () {
        let times = 1;

        headerBar().clickHome()
            .openProduct(tShirt.title)
            .addToCart(times);

        validateThat().onHeaderBar()
            .itemsInCartIs(times);
    });
})
