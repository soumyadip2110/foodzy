import { configureStore } from "@reduxjs/toolkit";
import searchReducers from './searchSlice'

export const store = configureStore({
    reducer: {
        search: searchReducers
    }
});
