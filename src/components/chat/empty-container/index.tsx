import { LottieAnimation } from "../../lootie"

import emptyAniamtion from '../../../json/empty-message.json'


const EmptyContainer = () => {
  return (
 <div className="">
   <LottieAnimation animationData={emptyAniamtion} height={400} width={400}/>

   <div className="flex gap-2 text-gray-400  ">
       <h1 className="text-center w-full text-gray-400 text-xl font-bold font-['poppins sf pro']">WELCOME TO <span className="text-emerald-600  mr-[.4rem]">CHAT-SYNC </span>
       CHAT APPLICATION</h1>
       </div>
 </div>
  )
}
export default EmptyContainer