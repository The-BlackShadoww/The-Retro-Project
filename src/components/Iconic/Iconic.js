import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";
import {
    useGetIconicDataQuery,
    selectAllIconic,
} from "../../services/ReduxRtkQuery/homeSlices/iconicSlice";
import { useSelector } from "react-redux";

const Iconic = () => {
    const {
        data: Data,
        isLoading,
        isError,
        isSuccess,
        error,
    } = useGetIconicDataQuery();
    console.log(Data);

    const data = useSelector(selectAllIconic);

    let content;
    
    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = (
            <section className="mt-24">
                <div className="mb-7">
                    <h1>Always Iconic</h1>
                </div>
                <div className="">
                    <CardSwiper arr={data} />
                </div>
            </section>
        );
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return content;
};

export default Iconic;
