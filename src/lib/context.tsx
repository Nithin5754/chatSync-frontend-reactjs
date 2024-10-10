import React, { createContext, useContext, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userInfoSelector } from "../store/slices/authSlice";
import { HOST } from "../utils/constant";

import { io } from "socket.io-client";
import { currentUserChatPage, messageBoxSelector, MessageContactType, setContactMessage } from "../store/slices/singleChatCurPageSlice";

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const socket: any = useRef();

  const currentUserChatDetails=useAppSelector(currentUserChatPage)

  const userInfo = useAppSelector(userInfoSelector);
const dispatch=useAppDispatch()

  





      
  const handleReceiveMessage=(message:any)=>{

    console.log("start","sender"+message.sender._id)
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log("receipent"+message.recipient._id)
    console.log(" ");
    console.log(" ");
    console.log("current user id",userInfo&&userInfo.user.id);
//  if(currentUserChatDetails!==null&&   console.log("current chat open user"+currentUserChatDetails))
      
    if(userInfo&&currentUserChatDetails&&[message.sender._id,message.recipient._id].includes(userInfo.user.id)){

      let messageData:MessageContactType={
        messageId:message.id,
        content:message.content,
        timestamp: message.createdAt.toString(),
        senderId:message.sender._id,
        recipient:message.recipient._id
      }
     
     if(messageData){
      dispatch(setContactMessage({msg:messageData}))
     }

    }
    }

  useEffect(() => {
    if (userInfo) {
      socket.current = io(HOST, {
        withCredentials: true,
        query: {
          userId: userInfo.user.id,
          username: userInfo.user.username,
        }
      });

      socket.current.on('connect',()=>console.log("connected to socket server")
      )




      socket.current.on('receiveMessage',handleReceiveMessage)



      return ()=>{
        socket.current.disconnect()
      }
    }

   
  }, [userInfo,currentUserChatDetails]);

  return (
    <SocketContext.Provider value={socket} >
    {children}
    </SocketContext.Provider>
  )
};
