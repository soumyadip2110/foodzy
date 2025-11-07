import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false
}

const showCartSlice = createSlice({
    name: 'showCart',
    initialState,
    reducers: {
        setShowCart: (state, action) => {
            state.show = action.payload
        }
    }
});

export const { setShowCart } = showCartSlice.actions;
export default showCartSlice.reducer;
