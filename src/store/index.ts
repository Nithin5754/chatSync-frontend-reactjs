import { configureStore } from "@reduxjs/toolkit/react";

import authSlice from "./slices/authSlice";
import  userSlice  from "./slices/userSlice";
import  currentChatPageSlice  from "./slices/singleChatCurPageSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user:userSlice,
    cChatPage:currentChatPageSlice
  },
  devTools: true,
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
