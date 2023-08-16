import { base_URL } from "../../utils/Constent"
import { ActionType } from "./ActionType"

export const fetchAllProducts = () => {  
    return(dispatch) => {
        fetch(`${base_URL}products`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: ActionType.FETCH_PRODUCTS,
            payload: resp
        }))
        .catch(er => console.log("fetch product error", er))
    }
}
 // if has 2 api will Create new Function like product Function
 export const fetchAllCatories = () => {
    return (dispatch) => {
        fetch(`${base_URL}categories`)
        .then(resp => resp.json())
        .then(resp => dispatch({
            type: ActionType.FETCH_CATEGORY,
            payload: resp
        }))
        .catch(() => console.log("Error to Fetch Categories"))
    }
 }
//  fetch email and password form postman API john@mail.com 
