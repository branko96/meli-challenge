"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../utils/constants");
const itemHelper_1 = require("../utils/itemHelper");
router.get("/", (req, res) => {
    res.send("Hello world!");
});
router.get("/items", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.query) {
        res.send("Query is required");
        return;
    }
    const { query } = req.query;
    const response = yield axios_1.default.get(`${constants_1.MLA_BASE_URL}${constants_1.MLA_SEARCH_PATH}${query}`).then((r) => {
        const { data: { filters, results } } = r;
        const categories = (0, itemHelper_1.getCategories)(filters);
        const rawItems = results.slice(0, 4);
        const items = (0, itemHelper_1.parseItems)(rawItems);
        return {
            categories,
            items
        };
    });
    res.send(response);
}));
router.get("/items/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        res.send("Item ID is required");
    }
    const { id } = req.params;
    const description = yield axios_1.default.get(`${constants_1.MLA_BASE_URL}${constants_1.MLA_GET_ITEM_PATH}${id}${constants_1.MLA_GET_ITEM_DESC_PATH}`).then((r) => {
        const { data: { plain_text } } = r;
        return plain_text;
    });
    const response = yield axios_1.default.get(`${constants_1.MLA_BASE_URL}${constants_1.MLA_GET_ITEM_PATH}${id}`).then((r) => {
        const { data: rawItem } = r;
        const item = (0, itemHelper_1.parseItemShow)(rawItem);
        return Object.assign(Object.assign({}, item), { description });
    });
    res.send(response);
}));
exports.default = router;
//# sourceMappingURL=index.js.map