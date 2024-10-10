import { Paperclip, Receipt, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../lib/utils";
import { customBgColor } from "../../../utils/Helper";
import EmojiPickerComponents from "../emoji-picker";
import InputMessage from "../input-message";
import { useSocket } from "../../../lib/context";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import { userInfoSelector } from "../../../store/slices/authSlice";
import {
  currentChatPageType,
  currentUserChatPage,

} from "../../../store/slices/singleChatCurPageSlice";

const MessageBar = () => {
  const [message, setMessage] = useState("");
  const userinfo = useAppSelector(userInfoSelector);

  const currentUserChatPageDetails = useAppSelector(currentUserChatPage);
  const socket: any = useSocket();
  const dispatch = useAppDispatch();
  const updateMessage = (message: string) => {
    setMessage(message);
  };

  const handleSubmit = () => {
    if (socket) {
      socket.current.emit("sendMessage", {
        sender: userinfo?.user.id,
        recipient: currentUserChatPageDetails?.id,
        messageType: "text",
        content: message,    
        fileUrl: undefined,
      });
    }
  };

  return (
    <div className="h-[10vh] flex  justify-center items-center px-6 mb-6 gap-4">
      <div className="flex  rounded-md items-center gap-5  md:w-[60%] xl:w-[50%]   w-full dark:bg-[#3d3e41] pr-4">
        <InputMessage updateMessage={updateMessage} message={message} />

        <button className=" text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all">
          <Paperclip size={24} />
        </button>
        <div className="relative">
          <EmojiPickerComponents
            updateMessage={updateMessage}
            currentMessage={message}
          />
        </div>
      </div>
      <button
        className={cn(
          `flex  rounded-md items-center gap-5 h-[9vh] w-[60px]  ${customBgColor}  `
        )}
        onClick={handleSubmit}
      >
        <SendHorizontal className="mx-auto" size={28} />
      </button>
    </div>
  );
};
export default MessageBar;
