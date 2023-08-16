import { ActionType } from "../actions/ActionType"

const initialState = {
    profile: {}
}

export const profileReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case ActionType.FETCH_PROFILE:
            return {...state, profile: payload}
        default:
            return state

    }
}