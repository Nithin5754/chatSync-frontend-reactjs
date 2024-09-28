import { useSelector } from "react-redux"
import { userInfoSelector } from "../../store/slices/authSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "sonner"

const Chat = () => {


  const selector=useSelector(userInfoSelector)

    const navigate=useNavigate()

    useEffect(()=>{
        if(selector&&!selector.user.profileSetup){
          toast.error("profile setting is incomplete")
          navigate('/profile')
        }

    },[selector,navigate])

  return (
    <div>
      hello
    </div>
  )
}
export default Chat