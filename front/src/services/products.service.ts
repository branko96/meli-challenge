import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";
import { API_BASE_URL, ITEMS_PATH } from "../utils/constants";

export const fetchProductsApi = (query: string) => {
  const client = applyCaseMiddleware(axios.create());
  return client.get(`${API_BASE_URL}${ITEMS_PATH}?query=${query}`)
}

export const fetchProductByIdApi = (id: string) => {
  const client = applyCaseMiddleware(axios.create());
  return client.get(`${API_BASE_URL}${ITEMS_PATH}/${id}`)
}
