import {
    ADD_TO_CART_BUTTON_CSS,
    IN_STOCK_CSS,
    OUT_OF_STOCK_BUTTON_CSS,
    PRODUCT_ITEM_CSS
} from "../pages/product/productPageElements";

export default function productPageValidator() {
    return {
        and() {
            return this;
        },

        inStockValueIs(count) {
            cy.get(IN_STOCK_CSS)
                .then(el => {
                    let actInStockValue = parseInt(el.text().match(/-?\d+/g)[0], 10);
                    expect(actInStockValue)
                        .eq(count);
                })

            return this;
        },

        addToCartButtonExists() {
            cy.get(ADD_TO_CART_BUTTON_CSS)
                .should('exist')
                .and('be.visible');

            return this;
        },

        addToCartButtonDisappear() {
            cy.get(PRODUCT_ITEM_CSS)
                .then(item => {
                    expect(item.find(ADD_TO_CART_BUTTON_CSS).length)
                        .eq(0)
                });

            return this;
        },

        outOfStockButtonIsDisabled() {
            cy.get(OUT_OF_STOCK_BUTTON_CSS)
                .should('exist')
                .and('be.disabled');

            return this;
        }
    }
}
