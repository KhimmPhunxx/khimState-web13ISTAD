import { combineReducers } from "redux";
import { ProductReducer } from './ProductReducer';
import { AuthReducer } from "./AuthReducer02";
import { profileReducer } from "./ProfileReducer";

export const RootReducer = combineReducers ({
    prodReducer: ProductReducer,
    authReducer: AuthReducer,
    profR : profileReducer
})