import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
    name: "hero",
    initialState: { data: [] },
    reducers: {
        heroData: (state, action) => {
            //* Because of Immer we can writer this code
            state.data = action.payload;
            // return {
            //     ...state,
            //     data: action.payload,
            // };
        },
    },
});

//! exporting named action creators separately from the reducer
export const { heroData } = heroSlice.actions;

//! exporting the reducer
export default heroSlice.reducer;
