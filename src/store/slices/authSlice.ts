import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ResponseUserDataType } from "../../utils/types";



interface AuthState {
  userInfo:ResponseUserDataType|''
}


const initialState:AuthState={
  userInfo:''
}



export const authSlice=createSlice({
  name:'auth',
  initialState,
  reducers:{
      setUserInfo:(state,action)=>{
         state.userInfo=action.payload
      }
  }
})



export const {setUserInfo}=authSlice.actions
export const userInfoSelector=(state:RootState)=>state.auth
export default authSlice.reducer