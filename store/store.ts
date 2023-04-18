import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import locationSlice from './locationSlice';
import weatherResultSlice from './weatherResult';

export default configureStore({
    reducer: {
        counter: counterSlice,
        location: locationSlice,
        weather: weatherResultSlice
    },
});