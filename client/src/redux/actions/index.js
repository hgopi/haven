import * as types from './../constants/actionTypes';

export const openSideNav = () => ({ type: types.OPEN_SIDE_NAV, isOpen: true });
export const closeSideNav = () => ({ type: types.CLOSE_SIDE_NAV, isOpen: false });