import { useSelector } from "react-redux"
import { userInfoSelector } from "../../store/slices/authSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "sonner"
import ChatContainer from "../../components/chat/chat-container"

const Chat = () => {


  // const selector=useSelector(userInfoSelector)

  //   const navigate=useNavigate()

  //   useEffect(()=>{
  //       if(selector&&!selector.user.profileSetup){
  //         toast.error("profile setting is incomplete")
  //         navigate('/profile')
  //       }

  //   },[selector,navigate])

  return (
       <ChatContainer/>
  )
}
export default Chat