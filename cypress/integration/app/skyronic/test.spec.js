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
        let inStock = 2;

        headerBar().clickHome()
            .openProduct(iPad.title);

        validateThat().onProductPage()
            .inStockValueIs(inStock)
            .and()
            .addToCartButtonExists();
    });

    it('Add to cart validations', () => {
        let expProductCountInCart = 1;

        headerBar().clickHome()
            .openProduct(tShirt.title)
            .addToCart();

        validateThat().onHeaderBar()
            .itemsInCartIs(expProductCountInCart);
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

    it('Fail that in cart there are 0 products after adding', function () {
        headerBar().clickHome()
            .openProduct(cd.title)
            .addToCart(2);

        validateThat().onHeaderBar()
            .itemsInCartIs(0);
    });
})
