import {CART_LINK_CSS} from "../components/headerBarElements";

export default function headerBarValidator() {
    return {
        itemsInCartIs(count) {
            cy.get(CART_LINK_CSS)
                .then(el => {
                    let inCartCountAct = parseInt(el.text().match(/-?\d+/g)[0], 10);
                    expect(inCartCountAct, 'Count of products in cart is different from expected!')
                        .eq(count);
                });
        },
    }
}