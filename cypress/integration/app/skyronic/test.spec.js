import navigate from "../../../support/components/headerBar";
import validateThat from "../../../support/validators/validatorFactory";

import { expProdArr } from '../../../fixtures/allProducts';
import {iPad} from "../../../fixtures/productInfo";

describe('Test suite', () => {

    beforeEach('Go to url...', () => {
        cy.visit(Cypress.env('host'));
    });

    it('Validate products', () => {
        navigate().home();

        validateThat().onHomePage()
            .productsCountIs(3)
            .and()
            .productsAreLike(expProdArr);
    });

    it('Add to cart validations', () => {
        navigate().home()
            .openProduct(iPad.title);

        validateThat().onProductPage()


    });
})
