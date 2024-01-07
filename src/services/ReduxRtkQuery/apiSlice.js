import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JSON_API } from "../API";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: JSON_API,
    }),
    tagTypes: [
        "hero",
        "products",
        "trending",
        "iconic",
        "sport",
        "community",
        "allGenderProducts",
        "newFeaturedProducts",
        "products",
    ], //* its updates the data when changed
    endpoints: (builder) => ({}),
});
