import { ActionType } from "../actions/ActionType"

const initialState = {
    products: [],
    categories: [],
    isLoading: true
}
export const ProductReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        // if has 2 api will create new case
        case ActionType.FETCH_PRODUCTS:
        // Statement
        return{...state, products: payload, isLoading: false}
        case ActionType.FETCH_CATEGORY:
        return{...state, categories: payload, isLoading: false}
        // statement loginuser
            default: 
                return state

    }
}