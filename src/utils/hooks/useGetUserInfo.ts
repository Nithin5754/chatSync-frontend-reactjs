import { useEffect, useState } from "react";
import { apiClient } from "../../lib/api-client";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setUserInfo, userInfoSelector } from "../../store/slices/authSlice";
import { USER_LOGIN_INFO } from "../constant";

export interface AuthenticatedType {
  isLoading: boolean;
  isAuthenticate: boolean;
}

const useGetUserInfo = () => {
  const isUserInfo = useAppSelector(userInfoSelector);
  const [isAuthenticated, setAuthenticated] = useState<AuthenticatedType>({
    isLoading: false,
    isAuthenticate: false,
  });
  const dispatch = useAppDispatch();

   useEffect(()=>{
    const fetchUser = async () => {
      try {
        const fetchUserData = await apiClient.get(USER_LOGIN_INFO, { withCredentials: true });
        if (fetchUserData.data) {
          dispatch(setUserInfo(fetchUserData.data));
          setAuthenticated({
            isLoading: false,
            isAuthenticate: true,
          });
        }
        
        if (!isUserInfo) {
          setAuthenticated({ isLoading: true, isAuthenticate: false });
          fetchUser();
        } else {
          setAuthenticated({ isLoading: false, isAuthenticate: true });
        }
      } catch (error) {}
    };
   },[!isUserInfo,dispatch])



  return isAuthenticated;
};
export default useGetUserInfo;
