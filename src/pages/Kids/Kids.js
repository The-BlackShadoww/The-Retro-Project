import React from "react";
import { useSelector } from "react-redux";
import {
    useGetAllGenderDataQuery,
    selectAllGenderProduct,
} from "../../services/ReduxRtkQuery/allGenderSlices/allGenderSlice";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";

const Kids = () => {
    const {
        // data: Data,
        isLoading,
        isError,
        isSuccess,
        error,
    } = useGetAllGenderDataQuery();

    const data = useSelector(selectAllGenderProduct);

    const dataForKids = data.filter((item) => item.gender === "kids");

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = (
            <ProductPresentation data={dataForKids} color={"white"} />
        );
    } else if (isError) {
        content = { error };
    }

    return content;
};

export default Kids;
