import { configureStore } from "@reduxjs/toolkit";
import searchReducers from './searchSlice'
import showCartReducers from './showCartSlice'

export const store = configureStore({
    reducer: {
        search: searchReducers,
        cart: showCartReducers
    }
});
