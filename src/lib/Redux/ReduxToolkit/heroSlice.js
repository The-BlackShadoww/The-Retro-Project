import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//* you have to dispatch this function from a component
export const fetchData = createAsyncThunk(
    "hero/fetchData",
    async (data, thunkAPI) => {
        try {
            const response = await axios.get(
                `http://localhost:3001/hero_section`
            );
            return response.data;
        } catch (error) {
            // throw error;
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const heroSlice = createSlice({
    name: "hero",
    initialState: { data: [] },
    reducers: {
        heroData: (state, action) => {
            //* Because of Immer we can writer this code
            // return {
            //     ...state,
            //     data: action.payload,
            // };
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        });
    },
});

//! exporting named action creators separately from the reducer
export const { heroData } = heroSlice.actions;
//! exporting the reducer
export default heroSlice.reducer;
