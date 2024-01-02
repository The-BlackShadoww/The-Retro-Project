import React from "react";
import { useSelector } from "react-redux";
import {
    useGetHeroDataQuery,
    selectAllHero,
} from "../../lib/Redux/ReduxToolkit/heroSlice";

const Hero = () => {
    const {
        data: heroData,
        isLoading,
        isError,
        isSuccess,
        error,
    } = useGetHeroDataQuery();

    const allHeroes = useSelector(selectAllHero);

    // const data = allHeroes.map((d) => <p>{d.name}</p>);

    let content;
    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        // content = JSON.stringify(heroData);
        content = JSON.stringify(allHeroes);
        // content = data;
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return <>{content}</>;
};

export default Hero;

//! ------ Original code --------
// import React from "react";
// import { useGetHeroDataQuery } from "../../lib/Redux/ReduxToolkit/heroSlice";

// const Hero = () => {
//     const {
//         data: heroData,
//         isLoading,
//         isError,
//         isSuccess,
//         error,
//     } = useGetHeroDataQuery();

//     let content;

//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isSuccess) {
//         content = JSON.stringify(heroData);
//     } else if (isError) {
//         content = <p>{error}</p>;
//     }

//     return <>{content}</>;
// };

// export default Hero;
