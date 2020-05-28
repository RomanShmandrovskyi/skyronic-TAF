import headerBar from "../../../support/components/headerBar";
import validateThat from "../../../support/validators/validatorFactory";

import {expProdArr} from '../../../fixtures/allProducts';
import {iPad, tShirt, cd} from "../../../fixtures/productInfo";

describe('Skyronic test suite', () => {

    beforeEach('Go to URL...', () => {
        cy.visit(Cypress.env('host'));
    });

    it('Home page validations', () => {
        let productsCount = 3;

        headerBar().clickHome();

        validateThat().onHomePage()
            .productsCountIs(productsCount)
            .and()
            .productsAreLike(expProdArr);
    });

    it('Product page validations', () => {
        let inStockCount = 2;

        headerBar().clickHome()
            .openProduct(iPad.title);

        validateThat().onProductPage()
            .inStockValueIs(inStockCount)
            .and()
            .addToCartButtonExists();
    });

    it('Add to cart validations', () => {
        let times = 3;

        headerBar().clickHome()
            .openProduct(tShirt.title)
            .addToCart(times);

        validateThat().onHeaderBar()
            .itemsInCartIs(times);
    });

    it('Add to cart limit validation', () => {
        headerBar().clickHome()
            .openProduct(cd.title)
            .addToCart(cd.inStock);

        validateThat().onProductPage()
            .addToCartButtonDisappear()
            .and()
            .outOfStockButtonIsDisabled();
    });
})
