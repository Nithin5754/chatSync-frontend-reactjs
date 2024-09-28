import { useSelector } from "react-redux";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { userInfoSelector } from "../../store/slices/authSlice";
import { useEffect } from "react";
import { apiClient } from "../../lib/api-client";
import { USER_LOGIN_INFO } from "../../utils/constant";


const Profile = () => {

  const selector=useSelector(userInfoSelector)


  if(selector){
    console.log(selector.user.firstName,"hello")
  }

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <h1>{selector&&selector.user.firstName}</h1>
      <ModeToggle />
    </div>
  );
};
export default Profile;
