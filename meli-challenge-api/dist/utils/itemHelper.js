"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseItemShow = exports.parseItem = exports.parseItems = exports.getCondition = exports.getCategories = void 0;
const constants_1 = require("./constants");
const getCategories = (filters) => {
    const categoryFilter = filters.filter((f) => f.id === "category")[0];
    return (categoryFilter === null || categoryFilter === void 0 ? void 0 : categoryFilter.values.map((category) => category.name)) || [];
};
exports.getCategories = getCategories;
const getCondition = (attributes) => {
    return attributes.filter((attr) => attr.id === constants_1.ATTR_ITEM_CONDITION)[0].value_name;
};
exports.getCondition = getCondition;
const parseItems = (rawItems) => {
    return rawItems.map((item) => (0, exports.parseItem)(item));
};
exports.parseItems = parseItems;
const parseItem = (item) => {
    const { id, title, thumbnail, shipping: { free_shipping }, price: amount, prices: { presentation }, attributes } = item;
    const condition = (0, exports.getCondition)(attributes);
    const { display_currency: currency } = presentation;
    return {
        id,
        title,
        picture: thumbnail,
        free_shipping,
        price: {
            amount,
            currency
        },
        condition,
    };
};
exports.parseItem = parseItem;
const parseItemShow = (item) => {
    const { id, title, pictures, shipping: { free_shipping }, price: amount, currency_id: currency, sold_quantity, attributes } = item;
    const condition = (0, exports.getCondition)(attributes);
    const picture = pictures[0].secure_url;
    return {
        id,
        title,
        picture,
        free_shipping,
        price: {
            amount,
            currency
        },
        condition,
        sold_quantity
    };
};
exports.parseItemShow = parseItemShow;
//# sourceMappingURL=itemHelper.js.map