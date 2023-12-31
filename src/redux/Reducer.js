import { combineReducers } from "redux";
import * as actionTypes from "./ActionTypes";

export const heroReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HERO_SECTION:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export const reducer2 = (state = { arr: [] }, action) => {
    switch (action.type) {
        case actionTypes.ACTION_2:
            return {};
        default:
            return state;
    }
};

export const Reducer = combineReducers({
    hero_section: heroReducer,
    randomReducer: reducer2,
});
