import { SEARCH_PRODUCTS } from "../actions/products"

const initialState = {
  products: []
}

const productsReducer = function (state = initialState, action: any) {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}

export default productsReducer
