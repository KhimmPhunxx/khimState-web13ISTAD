import { ActionType } from "../actions/ActionType"

const initialState = {
    products: []
}
export const ProductReducer = (state = initialState, action) => {
    const {type, playload} = action
    switch(type){
         // if has 2 api will create new case
        case ActionType.FETCH_PRODUCTS:
            // Statement
            return{...state, products: playload}
            default: 
                return state

    }
}