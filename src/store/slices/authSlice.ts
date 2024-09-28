import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ResponseUserDataType } from "../../utils/types";



interface AuthState {
  userInfo:ResponseUserDataType|null
}


const storedUserInfo = localStorage.getItem('userInfo');

let parsedUserInfo: ResponseUserDataType | null = null;
try {
  if (storedUserInfo) {
    parsedUserInfo = JSON.parse(storedUserInfo);
  }
} catch (error) {
  console.error("Failed to parse user info from localStorage", error);
}

const initialState: AuthState = {
  userInfo: parsedUserInfo,
};


export const authSlice=createSlice({
  name:'auth',
  initialState,
  reducers:{
      setUserInfo:(state,action)=>{
         state.userInfo=action.payload
         localStorage.setItem('userInfo',JSON.stringify(action.payload))

      }
  }
})



export const {setUserInfo}=authSlice.actions
export const userInfoSelector=(state:RootState)=>state.auth.userInfo
export default authSlice.reducer