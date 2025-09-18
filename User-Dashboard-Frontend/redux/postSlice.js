// src/redux/postSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload); // add new post to top
    },
    clearPosts: (state) => {
      state.posts = [];
    },
  },
});

export const { setPosts, addPost, clearPosts } = postSlice.actions;

export default postSlice.reducer;
