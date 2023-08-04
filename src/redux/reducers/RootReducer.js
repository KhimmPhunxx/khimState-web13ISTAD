import { combineReducers } from "redux";
import { ProductReducer } from './ProductReducer';

export const RootReducer = combineReducers ({
    prodReducer: ProductReducer
})