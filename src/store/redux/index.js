import { configureStore } from "@reduxjs/toolkit";

import burger from "./slice/burger";
import posts from "./slice/posts";

export const getBurgerState = state => state.burger;
export const getPostsState = state => state.posts;

export const store = configureStore({
  reducer: {
    burger,
    posts,
  },

  devTools: process.env.NODE_ENV !== "production",
});
