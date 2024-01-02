// import React from "react";
// import { useGetProductQuery } from "../../lib/Redux/ReduxToolkit/apiSlice";

// const Product = () => {
//     const {
//         data: product,
//         isLoading,
//         isError,
//         isSuccess,
//         error,
//     } = useGetProductQuery();

//     let content;

//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isSuccess) {
//         content = JSON.stringify(product);
//     } else if (isError) {
//         content = <p>{error}</p>;
//     }

//     return content;
// };

// export default Product;
