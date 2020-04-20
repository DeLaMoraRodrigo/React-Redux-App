import axios from "axios";

export const fetchCard = () => {
    return dispatch => {
        dispatch({ type: "FETCH_CARD_START" });
        axios.get("https://db.ygoprodeck.com/api/v6/randomcard.php")
             .then(res => {
                console.log(res)
                dispatch({ type: "FETCH_CARD_SUCCESS", payload: res.data})
             })
             .catch(err => {
                console.log(err)
                dispatch({ type: "FETCH_CARD_FAILURE", payload: `Error ${err.response.status}: ${err.response.data}`})
             })
    }
}