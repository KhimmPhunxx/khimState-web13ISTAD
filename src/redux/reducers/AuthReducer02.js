import secureLocalStorage from "react-secure-storage"
import { ActionType } from "../actions/ActionType"

const auth = secureLocalStorage.getItem('auth')
const initialState = auth ? {islogin: true, auth: auth} : {islogin: false, auth: null}

export const AuthReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case ActionType.LOGIN_SUCCESS:
            return{...state, islogin: true, auth: payload}
            default: 
            return state
    }
}