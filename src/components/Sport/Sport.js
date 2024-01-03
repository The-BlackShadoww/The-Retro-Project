import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";
import { useSelector } from "react-redux";
import {
    useGetSportDataQuery,
    selectAllSport,
} from "../../services/ReduxRtkQuery/homeSlices/sportSlice";

const Sport = () => {
    const {
        data: Data,
        isLoading,
        isError,
        isSuccess,
        error,
    } = useGetSportDataQuery();
    console.log(Data);

    const data = useSelector(selectAllSport);

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = (
            <section className="mt-14">
                <div className="mb-7">
                    <h1>Shop by Sport</h1>
                </div>
                <div>
                    <CardSwiper arr={data} />
                </div>
            </section>
        );
    } else if (isError) {
        content = <p>{error}</p>;
    }
    return content;
};

export default Sport;
