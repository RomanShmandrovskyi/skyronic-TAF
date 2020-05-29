import {CART_LINK_CSS} from "../components/headerBarElements";

/**
 * Validations for header bar component
 */
export default function headerBarValidator() {
    return {
        /**
         * Validate that items in cart is as <count>
         *
         * @param count: Integer -> expected product count in cart
         * @return header bar validator
         */
        itemsInCartIs(count) {
            cy.get(CART_LINK_CSS)
                .then(el => {
                    let inCartCountAct = parseInt(el.text().match(/-?\d+/g)[0], 10);
                    expect(inCartCountAct)
                        .eq(count);
                });

            return this;
        },
    }
}
