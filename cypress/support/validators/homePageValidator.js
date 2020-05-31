import {PRODUCT_ELEMENT_CSS, PRODUCT_LINK_CSS, PRODUCT_PRICE_CSS} from "../pages/home/homePageElements";

/**
 * Validations for Home page
 */
export default function homePageValidator() {
    return {
        /**
         * And chainer for several validations
         *
         * @return Home page validator
         */
        and() {
            return this;
        },

        /**
         * Verify that products count is as <count>
         *
         * @param count: Integer -> products count
         * @return Home page validator
         */
        productsCountIs(count) {
            cy.get(PRODUCT_ELEMENT_CSS).should('have.length', count);

            return this;
        },

        /**
         * Validate that products are in the same order as in <productsArray>
         * Compare by deep equal
         *
         * @param productsArray: Object: arr -> expected array of products like:
         * [
         *   {
         *     name: 'prodName1,
         *     price: 'prodPrice1'
         *   },
         *   {
         *     name: 'prodName2,
         *     price: 'prodPrice2'
         *   }, ...
         * ]
         *
         * @return Home page validator
         */
        productsAreLike(productsArray) {
            let actProdArr = [];
            cy.get(PRODUCT_ELEMENT_CSS)
                .each(product => {
                    actProdArr.push({
                        name: product.find(PRODUCT_LINK_CSS).text(),
                        price: product.find(PRODUCT_PRICE_CSS).text()
                    });
                })
                .then(() => expect(actProdArr)
                    .to.deep.eq(productsArray));

            return this;
        },
    }
}
