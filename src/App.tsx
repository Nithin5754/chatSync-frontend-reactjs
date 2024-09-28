import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import LandingPage from "./pages/landingPage";
import PrivateRoutes from "./components/PrivateRoutes";
import AuthRoutes from "./components/AuthRoutes";
import useGetUserInfo, { AuthenticatedType } from "./utils/hooks/useGetUserInfo";

export default function App() {

  const isAuthenticated:AuthenticatedType=useGetUserInfo()

  console.log(isAuthenticated,"hello");
  


  return (
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route element={<AuthRoutes />}>
          <Route path="auth" element={<Auth />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="chat" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to={"auth"} />} />
      </Route>
    </Routes>
  );
}
