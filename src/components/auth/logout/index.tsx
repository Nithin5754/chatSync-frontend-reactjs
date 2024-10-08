import { useNavigate } from "react-router-dom";
import { apiClient } from "../../../lib/api-client";
import { USER_LOGOUT_INFO } from "../../../utils/constant";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../store/slices/authSlice";


const LogoutUser = () => {
  const navigate = useNavigate();
const dispatch=useDispatch()
  const handleLogout = async () => {
    const isLogout = await apiClient.get(USER_LOGOUT_INFO, {
      withCredentials: true,
    });

    if (
      isLogout.status === 200 &&
      isLogout.data.message === "successfully log out"
    ) {
      dispatch(setUserInfo(null))
      navigate("/auth");
    }
  };

  return (
    <button
      className="outline-none border-none px-2 py-4"
      onClick={handleLogout}
    >
      <LogOut />
    </button>
  );
};
export default LogoutUser;
