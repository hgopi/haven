import { GET_ALL_PRODUCTS, GET_LATEST_PRODUCTS, GET_PRODUCT_DETAILS, CLEAR_PRODUCT_DETAILS } from './../constants/actionTypes';

const InitialState = {
    latest: [],
    all: [],
    details: null
}

export default function (state = InitialState, action) {
    switch (action.type) {

        case GET_LATEST_PRODUCTS:
            return {
                ...state,
                latest: action.payload.slice(0)
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                all: action.payload.slice(0)
            }
        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case CLEAR_PRODUCT_DETAILS:
            return {
                ...state,
                details: null
            }
        default:
            return state;
    }
}