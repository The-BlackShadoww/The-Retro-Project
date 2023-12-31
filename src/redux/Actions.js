import * as actionTypes from "./ActionTypes";
import { fetchHero } from "../services/actions";

export const heroData = (data) => {
    return {
        type: actionTypes.FETCH_HERO_SECTION,
        payload: data,
    };
};
export const fetchHeroData = () => (dispatch) => {
    fetchHero()
        .then((data) => dispatch(heroData(data)))
        .catch((error) => console.log(error));
};

