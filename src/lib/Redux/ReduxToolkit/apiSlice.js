import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const JSON_API = process.env.REACT_APP_JSON_SERVER;

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: JSON_API,
    }),
    tagTypes: ["heroData", "products"], //* its updates the data when changed
    endpoints: (builder) => ({}),
});
