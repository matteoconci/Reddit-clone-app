import { configureStore } from '@reduxjs/toolkit';
import nightMode from './slices/nightModeSlice';

export const store = configureStore({
    reducer: {
        nightMode
    },
});