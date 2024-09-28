import { userInfoSelector } from "../store/slices/authSlice";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const PrivateRoutes = () => {
  const isUserInfo = useAppSelector(userInfoSelector);
  let authenticated = false;
  if (isUserInfo) {
    authenticated = !!isUserInfo;
  }

  return authenticated ? <Outlet /> : <Navigate to={"/auth"} />;
};
export default PrivateRoutes;
