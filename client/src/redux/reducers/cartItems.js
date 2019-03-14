import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../constants/actionTypes";

const InitialState = [];

export default function (state = InitialState, action) {
    switch (action.type) {
        case ADD_CART_ITEM:
            return state.concat(action.payload);
        case REMOVE_CART_ITEM:
            return [...state.filter(item => item.title !== action.payload.title)]
        default:
            return state;
    }
}