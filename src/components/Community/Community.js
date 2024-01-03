import React from "react";
import { CardSwiperLg } from "../../lib/Swiper/Swiper";
import "../../assests/styles/global.css";
import {
    useGetCommunityDataQuery,
    selectAllCommunity,
} from "../../services/ReduxRtkQuery/homeSlices/communitySlice";
import { useSelector } from "react-redux";

const Community = () => {
    const {
        data: Data,
        isLoading,
        isError,
        isSuccess,
        error,
    } = useGetCommunityDataQuery();
    console.log(Data);

    const data = useSelector(selectAllCommunity);

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = (
            <section className="mt-24">
                <span className="mb-7 -z-10">
                    <h1>Retro Membership</h1>
                </span>
                <div>
                    <CardSwiperLg arr={data} />
                </div>
            </section>
        );
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return content;
};

export default Community;
