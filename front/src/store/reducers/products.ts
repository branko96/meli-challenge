import {
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  SEARCH_PRODUCTS_START,
  SEARCH_PRODUCTS_SUCCESS
} from "../actions/products"
import { Product } from "../../models/product";

export interface InitialState {
  products: Product[]
  isLoadingProducts: boolean
  isLoadingProduct: boolean
  selectedProduct: Product | null
}

export const initialState: InitialState = {
  products: [],
  isLoadingProducts: false,
  isLoadingProduct: false,
  selectedProduct: null
}

const productsReducer = function (state = initialState, action: any) {
  switch (action.type) {
    case SEARCH_PRODUCTS_START:
      return {
        ...state,
        isLoadingProducts: true
      }
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoadingProducts: false
      }
    case GET_PRODUCT_START:
      return {
        ...state,
        isLoadingProduct: true
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        selectedProduct: action.payload,
        isLoadingProduct: false
      }
    default:
      return state
  }
}

export default productsReducer
