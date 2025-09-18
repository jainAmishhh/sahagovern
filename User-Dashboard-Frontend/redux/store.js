// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";

const store = configureStore({
  reducer: {
    posts: postReducer, // 👈 posts slice
  },
});

export default store;
