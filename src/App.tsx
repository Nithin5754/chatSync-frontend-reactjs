import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import LandingPage from "./pages/landingPage";


export default function App() {
  return (
<Routes>

   <Route path="/" >
   <Route index element={<LandingPage/>}/>
   <Route path="auth" element={<Auth/>}/>
   <Route path="chat" element={<Chat/>}/>
   <Route path="profile" element={<Profile/>}/>
   <Route path="*" element={<Navigate to={'auth'}/>}/>
   </Route>
</Routes>
  )
}