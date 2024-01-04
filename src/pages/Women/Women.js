import React from "react";
import { useSelector } from "react-redux";
import {
    useGetAllGenderDataQuery,
    selectAllGenderProduct,
} from "../../services/ReduxRtkQuery/allGenderSlices/allGenderSlice";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";

const Women = () => {
    const {
        // data: Data,
        isLoading,
        isError,
        isSuccess,
        error,
    } = useGetAllGenderDataQuery();

    const data = useSelector(selectAllGenderProduct);

    const dataForWomen = data.filter((item) => item.gender === "women");

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = <ProductPresentation data={dataForWomen} />;
    } else if (isError) {
        content = { error };
    }

    return content;
};

export default Women;
