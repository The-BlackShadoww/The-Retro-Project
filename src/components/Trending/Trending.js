import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";
import {
    useGetTrendDataQuery,
    selectAllTrend,
} from "../../services/ReduxRtkQuery/homeSlices/trendSlice";
import { useSelector } from "react-redux";
import Section from "../../layouts/Section";

const Trending = () => {
    const {
        data: trendData,
        isLoading,
        isError,
        isSuccess,
        error,
    } = useGetTrendDataQuery();
    console.log(trendData);

    const data = useSelector(selectAllTrend);

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = (
            <Section title={"Trending"}>
                <div className="">
                    <CardSwiper arr={data} />
                </div>
            </Section>
        );
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return content;
};

export default Trending;

// import React from "react";
// import { CardSwiper } from "../../lib/Swiper/Swiper";
// import {
//     useGetTrendDataQuery,
//     selectAllTrend,
// } from "../../services/ReduxRtkQuery/homeSlices/trendSlice";
// import { useSelector } from "react-redux";

// const Trending = () => {
//     const {
//         data: trendData,
//         isLoading,
//         isError,
//         isSuccess,
//         error,
//     } = useGetTrendDataQuery();
//     console.log(trendData);

//     const data = useSelector(selectAllTrend);

//     let content;

//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isSuccess) {
//         content = (
//             <div className="mt-24">
//                 <div className="mb-7">
//                     <h1>Trending</h1>
//                 </div>
//                 <div className="">
//                     <CardSwiper arr={data} />
//                 </div>
//             </div>
//         );
//     } else if (isError) {
//         content = <p>{error}</p>;
//     }

//     return content;
// };

// export default Trending;
