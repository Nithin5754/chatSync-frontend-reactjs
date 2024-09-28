import { userInfoSelector } from "../store/slices/authSlice";
import { useAppSelector } from "../store/hooks";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  const isUserInfo = useAppSelector(userInfoSelector);
  let authenticated = false;
  if (isUserInfo) {
    authenticated = !!isUserInfo;
  }
  return authenticated ? <Navigate to={"/chat"} /> : <Outlet />;
};
export default AuthRoutes;
