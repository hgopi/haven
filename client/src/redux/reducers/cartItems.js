import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../constants/actionTypes";

const InitialState = [{ "id": 11, "title": "Rest Armchair", "mainImage": "/images/decoration-2.jpg", "subImage": "", "link": "/product/arm-chair", "price": 999, "oldPrice": 1499, "category": "Dining" }];

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