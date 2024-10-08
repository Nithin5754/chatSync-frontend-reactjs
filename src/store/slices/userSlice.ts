import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface userType {
  map(arg0: (user: userType) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  length: number;
  id: string;
  profileImage: string;
  firstName: string;
  lastName: string;
  email: string;
  color: number;
  profileSetup: boolean;
}

interface keyArray {
  [key: string]: userType[];
}

interface UserState {
  userSearchResult: keyArray;

  currentSearchResult: userType[] | [];
}

const initialState: UserState = {
  userSearchResult: {},
  currentSearchResult: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserResult: (
      state,
      action: PayloadAction<{ key: string; result: userType }>
    ) => {
      let lengthSearchResult = Object.keys(state.userSearchResult);

      if (lengthSearchResult.length > 7) {
        delete state.userSearchResult[lengthSearchResult[0]];
      }

      if (!state.userSearchResult[action.payload.key]) {
        state.userSearchResult[action.payload.key] = [action.payload.result];
        state.currentSearchResult = [action.payload.result];
      } else {
        state.currentSearchResult = state.userSearchResult[action.payload.key];
      }
    },

    setCurrentSearchRslt: (state, _action) => {
      state.currentSearchResult = [];
    },
  },
});

export const { setUserResult, setCurrentSearchRslt } = userSlice.actions;
export const currentUsersSelector = (state: RootState) =>
  state.user.currentSearchResult;
export default userSlice.reducer;
