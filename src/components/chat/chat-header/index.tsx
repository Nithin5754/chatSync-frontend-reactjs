import { PhoneCallIcon, VideoIcon } from "lucide-react";
import { useAppSelector } from "../../../store/hooks";
import { currentUserChatPage } from "../../../store/slices/singleChatCurPageSlice";

const ChatHeader = () => {
  const chatDetails = useAppSelector(currentUserChatPage);
  return (
    <>
      {chatDetails !== null && (
        <div className=" border-b-[1.5px] h-[10vh] flex justify-between items-center  w-full border-b-gray-600">
            <div className="flex w-[300px]  ml-8">
           <div className="flex gap-4">
           <button className="rounded-full w-8 h-8  bg-red-800 dark:text-white ">
                {chatDetails.firstName[0]}
              </button>
            <div className="">
            <h6 className="font-bold m-auto">
                {chatDetails.firstName} {chatDetails.lastName}
              </h6>
              <h5 className="font-thin text-sm m-auto">
                {chatDetails.email} 
              </h5>
            </div>
           </div>
            </div>
            <div className="flex gap-4 justify-start mr-8 ">
            <button className="outline-none border-none bg-transparent dark:text-[#3d3e41] hover:dark:text-white transition-all duration-300 flex justify-center  p-m m-0 ">
              <VideoIcon size={30} className=""/>
              </button>
              <button className="outline-none border-none bg-transparent dark:text-[#3d3e41] hover:dark:text-white transition-all duration-300 flex justify-center  p-m m-0 ">
              <PhoneCallIcon size={30} className=""/>
              </button>
            </div>
        </div>
      )}
    </>
  );
};
export default ChatHeader;
