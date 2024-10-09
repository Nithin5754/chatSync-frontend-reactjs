import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "..";

export interface userType {
  length: number;
  id: string;
  profileImage: string;
  firstName: string;
  lastName: string;
  email: string;
  color: number;
  profileSetup: boolean;
  username:string;
}

interface stateType {
  currentChatPageDetails: userType | null;

  chatType: "single" | "group" | null;
}

const initialState: stateType = {
  currentChatPageDetails: null,
  chatType: null,
};

export const currentChatPage = createSlice({
  name: "cChatPage",
  initialState,
  reducers: {
    setCurrentChatPage: (
      state,
      action: PayloadAction<{ user: userType; type: string } | null>
    ) => {
      if (
        action.payload !== null &&
        action.payload?.user !== null &&
        action.payload.type !== null
      ) {
        state.currentChatPageDetails = action.payload.user;
        state.chatType = action.payload.type as "single" | "group";
      } else {
        state.currentChatPageDetails = null;
        state.chatType = null;
      }
    },
  },
});

export const { setCurrentChatPage } = currentChatPage.actions;

export const currentUserChatPage = (state: RootState) =>
  state.cChatPage.currentChatPageDetails;

export const currentChatPageType = (state: RootState) =>
  state.cChatPage.chatType;

export default currentChatPage.reducer;
