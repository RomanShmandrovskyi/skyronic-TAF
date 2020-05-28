import {ADD_TO_CART_BUTTON_CSS, IN_STOCK_CSS} from "../pages/product/productPageElements";

export default function productPageValidator() {
    return {
        and() {
            return this;
        },

        inStockValueIs(count) {
            cy.get(IN_STOCK_CSS)
                .then(el => {
                    let actInStockValue = parseInt(el.text().match(/-?\d+/g)[0], 10);
                    expect(actInStockValue, 'In stock count is different from expected!')
                        .eq(count);
                })

            return this;
        },

        addToCartButtonExists() {
            cy.get(ADD_TO_CART_BUTTON_CSS)
                .should('exist')
                .and('be.visible');

            return this;
        }
    }
}
