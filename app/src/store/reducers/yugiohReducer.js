const initialState = {
    name: "",
    type: "",
    desc: "",
    image: "",
    isFetching: false,
    error: ""
}

export const yugiohReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CARD_START":
            return {
                ...state,
                isFetching: true
            }
        case "FETCH_CARD_SUCCESS":
            return {
                ...state,
                name: action.payload.name,
                type: action.payload.type,
                desc: action.payload.desc,
                image: action.payload.card_images[0].image_url,
                isFetching: false,
                error: ""
            }
        case "FETCH_CARD_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: 
            return state;
    }
}