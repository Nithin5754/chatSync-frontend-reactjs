import { useAppSelector } from "../../../../store/hooks"
import { currentUserChatPage } from "../../../../store/slices/singleChatCurPageSlice"
import EmptyContainer from "../../empty-container"
import MessageBar from "../../message-bar"
import MessageContainer from "../../message-container"


const AuthChatContainer = () => {

  const chatDetails=useAppSelector(currentUserChatPage)
  return (
    <>
{
  chatDetails!==null?(<>
  <MessageContainer/>
    
    <MessageBar />
  </>
  ):(<EmptyContainer/>)
}
    </>
  )
}
export default AuthChatContainer