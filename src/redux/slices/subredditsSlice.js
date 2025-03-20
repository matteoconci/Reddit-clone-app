import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch subreddit data
export const fetchSubreddits = createAsyncThunk(
    "subreddits/fetchSubreddits",
    async(query) => {
        console.log(query);
        const response = await axios.get(`https://www.reddit.com/subreddits/search.json?q=${query}&limit=5`);
        return response.data.data.children.map((child) => ({
            id: child.data.id,
            display_name: child.data.display_name,
            icon_img: child.data.icon_img,
            subscribers: child.data.subscribers
        }));
    }
);

const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        query: "",
        subreddits: [],
        error: null,
        isLoading: false
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        clearResults: (state) => {
            state.subreddits = [];
            state.error = null;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubreddits.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.isLoading = false;
                state.subreddits = action.payload;
            })
            .addCase(fetchSubreddits.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
})

export default subredditsSlice.reducer;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectQuery = (state) => state.subreddits.query;
export const selectError = (state) => state.subreddits.error;
export const selectIsLoading = (state) => state.subreddits.isLoading;
export const { setQuery, clearResults } = subredditsSlice.actions;