import { combineReducers, Reducer } from "redux"

import productsReducer from "./products"

export type GetStateFromReducers<T> = T extends (...args: any[]) => infer Ret
  ? Ret
  : T extends Record<any, any>
  ? {
      [K in keyof T]: GetStateFromReducers<T[K]>
    }
  : T

const allReducers: Reducer<any> = combineReducers({
  productsReducer
})

export type GlobalState = GetStateFromReducers<typeof allReducers>

export default allReducers
