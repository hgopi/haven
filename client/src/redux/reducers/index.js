import { combineReducers } from "redux";
import navigation from "./navigation";
import cartItems from './cartItems';
import products from './products';

const rootReducer = combineReducers({
    navigation,
    cartItems,
    products
});

export default rootReducer;