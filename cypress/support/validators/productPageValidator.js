import {
    ADD_TO_CART_BUTTON_CSS,
    IN_STOCK_CSS,
    OUT_OF_STOCK_BUTTON_CSS,
    PRODUCT_ITEM_CSS
} from "../pages/product/productPageElements";

/**
 * Validations for Product page
 */

export default function productPageValidator() {
    return {
        /**
         * And chainer for several validations
         *
         * @return product page validator
         */
        and() {
            return this;
        },

        /**
         * Validate that in stock count is as <count>
         *
         * @param count: Integer -> expected in stock count
         * @return product page validator
         */
        inStockValueIs(count) {
            cy.get(IN_STOCK_CSS)
                .then(el => {
                    let actInStockValue = parseInt(el.text().match(/-?\d+/g)[0], 10);
                    expect(actInStockValue)
                        .eq(count);
                })

            return this;
        },

        /**
         * Validate that Add to cart button exists
         *
         * @return product page validator
         */
        addToCartButtonExists() {
            cy.get(ADD_TO_CART_BUTTON_CSS)
                .should('exist')
                .and('be.visible');

            return this;
        },

        /**
         * Validate that Add to cart button disappear
         *
         * @return product page validator
         */
        addToCartButtonDisappear() {
            cy.get(PRODUCT_ITEM_CSS)
                .then(item => {
                    expect(item.find(ADD_TO_CART_BUTTON_CSS).length)
                        .eq(0)
                });

            return this;
        },

        /**
         * Validate that Out of stock button exists and is disabled
         *
         * @return product page validator
         */
        outOfStockButtonIsDisabled() {
            cy.get(OUT_OF_STOCK_BUTTON_CSS)
                .should('exist')
                .and('be.disabled');

            return this;
        }
    }
}
