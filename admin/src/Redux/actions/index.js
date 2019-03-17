import * as types from './../constants/actionTypes';

export const addAllProducts = (products) => ({ type: types.ADD_ALL_PRODUCTS, payload: products });