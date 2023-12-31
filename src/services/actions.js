import { json_api } from "./API";
import axios from "axios";

//! Fetching hero section data
export const fetchHero = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(json_api + "hero_section")
            .then((response) => {
                const heroData = response.data;
                resolve(heroData);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
