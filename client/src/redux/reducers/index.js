import { combineReducers } from "redux";
import navigation from "./navigation";
import cartItems from './cartItems';

const rootReducer = combineReducers({
    navigation,
    cartItems
});

export default rootReducer;