import { configureStore } from "@reduxjs/toolkit";
import heroSlice from "./ReduxToolkit/heroSlice";

const RootReducer = configureStore({
    reducer: {
        hero: heroSlice,
    },
});

export default RootReducer;
