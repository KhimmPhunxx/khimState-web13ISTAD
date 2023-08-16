import axios from "axios"
import { base_URL } from "../../utils/Constent"
import { ActionType } from "./ActionType"

export const fetchProfile = (auth) => {
    return (dispatch) => {
        axios(`${base_URL}auth/profile`, {
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${auth}`
            }
        })
        .then((res => {
            if(res.status == 200){
                dispatch({
                    type: ActionType.FETCH_PROFILE,
                    payload: res.data
                })
                return Promise.resolve()
            }
        }))
    }
}