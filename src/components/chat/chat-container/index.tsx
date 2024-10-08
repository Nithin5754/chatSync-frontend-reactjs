import ChatHeader from "../chat-header";

import MessageBar from "../message-bar";
import AuthChatContainer from "./AuthChat-Routes";

const ChatContainer = () => {
  return (
    <div className=" flex top-0 h-[100vh] w-[100%]  flex-col md:static md:flex-1  ">
      <ChatHeader />

      <AuthChatContainer />

    </div>
  );
};
export default ChatContainer;
