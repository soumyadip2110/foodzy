import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const item = state.find(i => i.id === action.payload.id);
            if (item) {
                item.qty++;
                // if (state.find(item => item.id === action.payload.id)) {
                //     return state.map(item => (
                //         item.id === action.payload.id ?
                //             { ...item, qty: (item.qty + 1) }
                //             : (item)
                //     ))
            } else {
                state.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            return state.filter(item => (
                item.id !== action.payload
            ))
        },
        incrementItem: (state, action) => {
            return state.map(item => item.id === action.payload ? { ...item, qty: item.qty + 1 } : item);
        },
        decrementItem: (state, action) => {
            return state.map(item => item.id === action.payload ? { ...item, qty: item.qty - 1 } : item);
        }
    }
});

export const { addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
