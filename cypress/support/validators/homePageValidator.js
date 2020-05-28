import {PRODUCT_ELEMENT_CSS, PRODUCT_LINK_CSS, PRODUCT_PRICE_CSS} from "../pages/home/homePageElements";

export default function homePageValidator() {
    return {
        and() {
            return this;
        },

        productsCountIs(count) {
            cy.get(PRODUCT_ELEMENT_CSS).should('have.length', count);
            return this;
        },

        productsAreLike(productsArray) {
            let actProdArr = [];
            cy.get(PRODUCT_ELEMENT_CSS)
                .each(product => {
                    actProdArr.push({
                        name: product.find(PRODUCT_LINK_CSS).text(),
                        price: product.find(PRODUCT_PRICE_CSS).text()
                    });
                })
                .then(() => expect(actProdArr, 'Products on home page are different from expected!')
                    .to.deep.eq(productsArray));

            return this;
        },
    }
}
