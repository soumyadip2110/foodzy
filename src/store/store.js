import { configureStore } from "@reduxjs/toolkit";
import searchReducers from './searchSlice'
import showCartReducers from './showCartSlice'
import cartReducers from './cartSlice'

export const store = configureStore({
    reducer: {
        search: searchReducers,
        showCart: showCartReducers,
        cart: cartReducers
    }
});
