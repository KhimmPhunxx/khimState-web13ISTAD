import axios from "axios"
import { base_URL } from "../../utils/Constent"
import { ActionType } from "./ActionType"

export const fetchProfile = (auth) => {
    return (dispatch) => {
        axios(`${base_URL}auth/profile`, {
            headers: {
                "Content-type" : "application/json",
                "Authorization" : `Bearer ${auth}`
            }
        })
        .then((resp => {
            if(resp.status == 200){
                dispatch({
                    type: ActionType.FETCH_PROFILE,
                    payload: resp.data
                })
                return Promise.resolve()
            }
        }))
    }
}