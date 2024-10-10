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

export interface MessageContactType {
  messageId: string;      
  content: string;          
  timestamp: string;          
  senderId: string;    
  recipient:string
}



interface stateType {
  currentChatPageDetails: userType | null;

  messagesContainer:MessageContactType[]|[];

  chatType: "single" | "group" | null;
}

const initialState: stateType = {
  currentChatPageDetails: null,
  messagesContainer:[],
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
        state.messagesContainer=[]
      }
    },

    setContactMessage:(state,action:PayloadAction<{msg:MessageContactType}>)=>{

      if(action.payload.msg!==null){
        state.messagesContainer=[...state.messagesContainer,action.payload.msg]
      }
    }
  },
});

export const { setCurrentChatPage ,setContactMessage} = currentChatPage.actions;

export const currentUserChatPage = (state: RootState) =>
  state.cChatPage.currentChatPageDetails;

export const currentChatPageType = (state: RootState) =>
  state.cChatPage.chatType;


export const messageBoxSelector=(state:RootState)=>state.cChatPage.messagesContainer

export default currentChatPage.reducer;
