import { call, put, takeLatest } from "redux-saga/effects"
import {
  GET_PRODUCT_START,
  getProductSuccess,
  SEARCH_PRODUCTS_START, searchProductsSuccess
} from "../actions/products"
import {fetchProductByIdApi, fetchProductsApi} from "../../services/products.service";

export function* watchProducts() {
  yield takeLatest(SEARCH_PRODUCTS_START, searchProductsApi)
  yield takeLatest(GET_PRODUCT_START, getProductById)
}

function* searchProductsApi({ payload }: ReturnType<any>) {
  try {
    const { data: { items: products } } = yield call(fetchProductsApi, payload)
    yield put(searchProductsSuccess(products))
  } catch (e) {
    console.log(e);
  }
}

function* getProductById({ payload }: ReturnType<any>) {
  try {
    const { data: product } = yield call(fetchProductByIdApi, payload)
    yield put(getProductSuccess(product))
  } catch (e) {
    console.log(e);
  }
}


