import { all, fork } from "redux-saga/effects"
import { watchProducts } from "./products.sagas"

export const rootSaga = function* root() {
  yield all([
    fork(watchProducts)
  ])
}
