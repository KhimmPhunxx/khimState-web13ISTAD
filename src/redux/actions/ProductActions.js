import { base_URL } from "../../utils/Constent"
import { ActionType } from "./ActionType"

export const fetchAllProducts = () => {
    return(dispatch) => {
        fetch(`${base_URL}products`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: ActionType.FETCH_PRODUCTS,
            playload: resp
        }))
        .catch(er => console.log("fetch product error", er))
    }
}
 // if has 2 api will Create new Function like product Function