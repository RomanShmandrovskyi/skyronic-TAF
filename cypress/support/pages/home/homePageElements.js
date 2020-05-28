module.exports = {
    PRODUCT_ITEM_LINK_XPATH: (productName) => `//a[@class="title" and text()="${productName}"]`,
    PRODUCT_ELEMENT_CSS: '.product',
    PRODUCT_LINK_CSS: '.title',
    PRODUCT_PRICE_CSS: '.price',
}
