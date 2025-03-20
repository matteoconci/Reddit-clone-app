import { configureStore } from '@reduxjs/toolkit';
import nightMode from './slices/nightModeSlice';
import subreddits from './slices/subredditsSlice';
import hotPosts from './slices/hotPostsSlice';

export const store = configureStore({
    reducer: {
        nightMode,
        subreddits,
        hotPosts,
    },
});