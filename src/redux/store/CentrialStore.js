import { applyMiddleware, compose, legacy_createStore } from "redux";
import { RootReducer } from "../reducers/RootReducer";
import thunk from "redux-thunk";

const middleWere = [thunk]
export const CentrialStore = legacy_createStore(RootReducer, compose(applyMiddleware(...middleWere)))