import { Product } from "../models/product";

export const API_BASE_URL: string = "http://localhost:8082/api"
export const ITEMS_PATH: string = "/items"


export const formatCurrency = (x: number | undefined) => {
  if (!x) {
    return ""
  }

  return `$ ${x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
}

export const getDecimals = (product: Product) => {
  if (!product) {
    return ""
  }

  return String("").padStart(product.price.decimals, "0");
}
