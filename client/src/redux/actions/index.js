import * as types from './../constants/actionTypes';

export const openSideNav = () => ({ type: types.OPEN_SIDE_NAV, isOpen: true });
export const closeSideNav = () => ({ type: types.CLOSE_SIDE_NAV, isOpen: false });

export const addCartItem = (item) => ({ type: types.ADD_CART_ITEM, payload: item });
export const removeCartItem = (item) => ({ type: types.REMOVE_CART_ITEM, payload: item });