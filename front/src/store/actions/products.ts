export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS"

export const searchProducts = (search: string) => ({
  type: SEARCH_PRODUCTS,
  payload: search
})
