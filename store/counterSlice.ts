import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 1,
    reducers: {
        increment: (state, action) => {
            return state + 1;
        },
    }
});

// this is for dispatch
export const { increment } = counterSlice.actions;

// this is for configureStore
export default counterSlice.reducer;