import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import allReducers from "./reducers"
import { rootSaga } from "./sagas"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer =
  (process.env.NODE_ENV !== "production" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) ||
  compose

const sagaMiddleware = createSagaMiddleware()
const store = createStore(allReducers, {}, composeEnhancer(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export default store
