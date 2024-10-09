
import { useNavigate, useParams } from "react-router-dom";
import ChatContainer from "../../components/chat/chat-container"
import { useEffect } from "react";
import { apiClient } from "../../lib/api-client";
import { CHAT_ID_BY_USERNAME, SEARCH_USERS } from "../../utils/constant";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { currentUserChatPage, setCurrentChatPage } from "../../store/slices/singleChatCurPageSlice";

const Chat = () => {


  const { chatId} = useParams();

const dispatch=useAppDispatch()

const navigate=useNavigate()

const currentUserChatPageDetails=useAppSelector(currentUserChatPage)

  useEffect(()=>{
    if(chatId&&typeof chatId ==='string'&&currentUserChatPageDetails===null){
      findChatAddress()
    }
  },[chatId])


  async function findChatAddress() {
    
      let findChatDetails=await apiClient.post(CHAT_ID_BY_USERNAME,{chatId},{withCredentials:true})

      if(findChatDetails&&findChatDetails.data.data!=='empty users'){
        dispatch(setCurrentChatPage({ user:findChatDetails.data.data, type:"single" }));


      }else if(findChatDetails&&findChatDetails.data.data==='empty users'||findChatDetails.status!==200){
        navigate('/chat')
      }
     
    
  }
  return (
       <ChatContainer/>
  )
}
export default Chat