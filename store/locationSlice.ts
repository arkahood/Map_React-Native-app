import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const weatherResult = createAsyncThunk(
    'result',
    async ({ longitude, latitude }: any) => {
        const respose = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9ed238c68268c5ddb917815b5697786d`
        );
        const data = await respose.json();
        return data;
    }
)

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        latitude: 28.65,
        longitude: 77.23,
    },
    reducers: {
        setLocation: (state, action) => {
            return action.payload;
        },
    }
});

// this is for dispatch
export const { setLocation } = locationSlice.actions;

// this is for configureStore
export default locationSlice.reducer;