import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const weatherResult = createAsyncThunk(
    'weather/result',
    async () => {
        const respose: any = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${22.89}&lon=${15.987}&appid=9ed238c68268c5ddb917815b5697786d`
        );
        const data: any = await respose.json();
        console.log(data);

        return data;
    }
)

export const weatherResultSlice = createSlice({
    name: 'weather',
    initialState: [],
    reducers: {},
    extraReducers(builder) {
        builder.addCase(weatherResult.pending, (state: any, action: any) => {
            return state;
        }),
            builder.addCase(weatherResult.fulfilled, (state: any, action: any) => {
                // console.log(action.payload);

                // state.data.push(action.payload);
                return state;
            })
    },
});

// this is for dispatch

// this is for configureStore
export default weatherResultSlice.reducer;