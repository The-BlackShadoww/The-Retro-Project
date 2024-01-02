import { apiSlice } from "./apiSlice";
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

const heroAdapter = createEntityAdapter();

const initialState = heroAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHeroData: builder.query({
            query: () => "/hero",
            transformErrorResponse: (responseData) => {
                return heroAdapter.setAll(initialState, responseData);
            },
            // providesTags: (result, error, arg) => [
            //     { type: "Hero", id: "LIST" },
            //     ...result.ids.map((id) => ({ type: "Hero", id })),
            // ],
        }),
    }),
});

export const { useGetHeroDataQuery } = extendedApiSlice;

//! returns the query result object
export const selectResult = extendedApiSlice.endpoints.getHeroData.select();

//! Creates memoized selector
export const selectHeroData = createSelector(
    selectResult,
    (getResult) => getResult.data // normalized state object with ids & entities
);

//! getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllHero,
    selectById: selectHeroById,
    selectEntities: selectHeroEntities,
    selectTotal: selectHeroTotal,
} = heroAdapter.getSelectors((state) => selectHeroData(state) ?? initialState);
