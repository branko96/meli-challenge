import { searchProducts, searchProductsSuccess, getProduct, getProductSuccess } from "../actions/products"
import dialogReducer, { initialState } from "./products"
import { exampleProduct } from "./mocks";
import productsReducer from "./products";

describe("Products Duck", () => {
  describe("Action creators", () => {
    it("searchProducts", () => {
      const search = "Botines nike"
      const result = searchProducts(search)
      expect(result).toEqual({
        type: "SEARCH_PRODUCTS_START",
        payload: search
      })
    })

    it("searchProductsSuccess", () => {
      const products = [exampleProduct]
      const result = searchProductsSuccess(products)
      expect(result).toEqual({
        type: "SEARCH_PRODUCTS_SUCCESS",
        payload: products
      })
    })

    it("getProduct", () => {
      const id = "MLA234323"
      const result = getProduct(id)
      expect(result).toEqual({
        type: "GET_PRODUCT_START",
        payload: id
      })
    })

    it("getProductSuccess", () => {
      const result = getProductSuccess(exampleProduct)
      expect(result).toEqual({
        type: "GET_PRODUCT_SUCCESS",
        payload: exampleProduct
      })
    })
  })
  describe("reducer", () => {
    it("SEARCH_PRODUCTS_START", () => {
      const search = "Pelota adidas"
      const stateAfterSearchStart = {
        products: [],
        isLoadingProducts: true,
        isLoadingProduct: false,
        selectedProduct: null
      }
      const result = productsReducer(initialState, {
        type: "SEARCH_PRODUCTS_START",
        payload: search
      })
      expect(result).toEqual(stateAfterSearchStart)
    })

    it("SEARCH_PRODUCTS_SUCCESS", () => {
      const payload = [exampleProduct]
      const stateAfterSearchSuccess = {
        products: [exampleProduct],
        isLoadingProducts: false,
        isLoadingProduct: false,
        selectedProduct: null
      }
      const result = dialogReducer(initialState, {
        type: "SEARCH_PRODUCTS_SUCCESS",
        payload
      })
      expect(result).toEqual(stateAfterSearchSuccess)
    })

    it("GET_PRODUCT_START", () => {
      const id = "MLA5243543"
      const stateAfterGetProductStart = {
        products: [],
        isLoadingProducts: false,
        isLoadingProduct: true,
        selectedProduct: null
      }
      const result = productsReducer(initialState, {
        type: "GET_PRODUCT_START",
        payload: id
      })
      expect(result).toEqual(stateAfterGetProductStart)
    })

    it("GET_PRODUCT_SUCCESS", () => {
      const payload = exampleProduct
      const stateAfterGetProductSuccess = {
        products: [],
        isLoadingProducts: false,
        isLoadingProduct: false,
        selectedProduct: exampleProduct
      }
      const result = dialogReducer(initialState, {
        type: "GET_PRODUCT_SUCCESS",
        payload
      })
      expect(result).toEqual(stateAfterGetProductSuccess)
    })

    it("default", () => {
      const result = dialogReducer(initialState, {
        type: "NADA_EN_MI_REDUCER"
      })
      expect(result).toEqual(initialState)
    })
  })
})
