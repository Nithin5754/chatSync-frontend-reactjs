import React, { createContext, useContext, useEffect, useRef } from "react";
import { useAppSelector } from "../store/hooks";
import { userInfoSelector } from "../store/slices/authSlice";
import { HOST } from "../utils/constant";

import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const socket: any = useRef();

  const userInfo = useAppSelector(userInfoSelector);

  useEffect(() => {
    if (userInfo) {
      socket.current = io(HOST, {
        withCredentials: true,
        query: {
          userId: userInfo.user.id,
          username: userInfo.user.username,
        },
      });

      socket.current.on('connect',()=>console.log("connected to socket server")
      )

      return ()=>{
        socket.current.disconnect()
      }
    }

   
  }, [userInfo]);

  return (
    <SocketContext.Provider value={socket} >
    {children}
    </SocketContext.Provider>
  )
};
