import { Paperclip, SendHorizontal, SmilePlus } from "lucide-react"
import { useRef, useState } from "react"
import { cn } from "../../../lib/utils"
import { customBgColor } from "../../../utils/Helper"
import EmojiPicker, { Theme } from 'emoji-picker-react'

const MessageBar = () => {
  const emojiRef=useRef()
  const [isEmojiOpen,setEmojiOpen]=useState<boolean>(false)

  const [message,setMessage]=useState('')
 

  const handleSubmit=()=>{

  }

  const handleClickEmoji=(emoji:any)=>{
    setMessage(message+emoji.emoji)
  }
  return (
    <div className="h-[10vh] flex  justify-center items-center px-6 mb-6 gap-4">
      <div className="flex  rounded-md items-center gap-5  md:w-[60%] xl:w-[50%]   w-full dark:bg-[#3d3e41] pr-4">
        <input onChange={(e)=>setMessage(e.target.value)} value={message}  type="text" placeholder="Enter Message" className=" p-5   dark:bg-[#3d3e41] flex-1   bg-transparent focus:outline-none focus:border-none rounded-md" />
        <button className=" text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all">
        <Paperclip size={24}/>
        </button>
        <div className="relative">
        <button onClick={()=>setEmojiOpen(!isEmojiOpen)} className=" text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all">
        <SmilePlus size={24}/>
        </button>
        <div className="absolute bottom-16 right-0 ">
          <EmojiPicker
          theme={Theme.AUTO}
          open={isEmojiOpen}
          autoFocusSearch={false}
          onEmojiClick={handleClickEmoji}
          />
        </div>
        </div>
        
      </div>
      <button className={cn(`flex  rounded-md items-center gap-5 h-[9vh] w-[60px]  ${customBgColor}  `)} onClick={handleSubmit}>
      <SendHorizontal className='mx-auto' size={28}/> 
      </button>
    </div>
  )
}
export default MessageBar

