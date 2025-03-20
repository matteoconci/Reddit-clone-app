import { createSlice } from "@reduxjs/toolkit";
import { mockPosts, mockComments } from "../../mock/mockData";

const initialState = {
    posts: mockPosts,
    comments: mockComments,
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
});

export default postSlice.reducer;