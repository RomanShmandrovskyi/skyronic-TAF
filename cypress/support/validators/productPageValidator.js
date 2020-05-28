import {IN_STOCK_CSS} from "../pages/product/productPageElements";

export default function productPageValidator() {
    return {
        and() {
            return this;
        },

        inStockValueIs(count) {
            cy.get(IN_STOCK_CSS)
                .then(el => {
                    let actInStockValue = parseInt(el.text().match(/-?\d+/g)[0], 10);
                    expect(actInStockValue).eq(count);
                })
        }
    }
}
