import { OPEN_SIDE_NAV, CLOSE_SIDE_NAV } from "../constants/actionTypes";

const InitialState = {
    isNavOpen: false
};

export default function (state = InitialState, action) {
    switch (action.type) {
        case OPEN_SIDE_NAV:
            return { isNavOpen: true };
        case CLOSE_SIDE_NAV:
            return { isNavOpen: false };
        default:
            return state;
    }
}