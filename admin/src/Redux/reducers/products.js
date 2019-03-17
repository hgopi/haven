import { ADD_ALL_PRODUCTS } from "./../constants/actionTypes";

const InitialState = [];

export default function (state = InitialState, action) {
    switch (action.type) {
        case ADD_ALL_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}