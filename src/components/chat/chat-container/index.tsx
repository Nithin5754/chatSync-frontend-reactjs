import ChatHeader from "../chat-header"
import MessageBar from "../message-bar"
import MessageContainer from "../message-container"

const ChatContainer = () => {
  return (
   <div className=" flex top-0 h-[100vh] w-[100%]  flex-col md:static md:flex-1  ">
    <ChatHeader/>
    <MessageContainer/>
    <MessageBar/>
   </div>
  )
}
export default ChatContainer