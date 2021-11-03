import { Product } from "../../models/product";

export const SEARCH_PRODUCTS_START = "SEARCH_PRODUCTS_START"
export const SEARCH_PRODUCTS_SUCCESS = "SEARCH_PRODUCTS_SUCCESS"
export const GET_PRODUCT_START = "GET_PRODUCT_START"
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS"

export const searchProducts = (search: string) => ({
  type: SEARCH_PRODUCTS_START,
  payload: search
})

export const searchProductsSuccess = (products: Product[]) => ({
  type: SEARCH_PRODUCTS_SUCCESS,
  payload: products
})

export const getProduct = (id: string) => ({
  type: GET_PRODUCT_START,
  payload: id
})

export const getProductSuccess = (product: Product) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: product
})
