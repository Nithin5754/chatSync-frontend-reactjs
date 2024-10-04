import { LottieAnimation } from "../../../lootie"

import Glow from '../../../../json/glow.json'
import SearchFriendsList from "../search-friends"
import { SearchIcon, UserCircle2, UserPlus } from "lucide-react"


const SearchListContainer = () => {
  return (
    <>
    
    {
      false?(
        <>
         <SearchFriendsList/>
        </>
      ):(<div className="w-full flex m-auto justify-center h-[300px] ">
        <div className="flex flex-col m-auto">
        <LottieAnimation animationData={Glow} height={200} width={200}/>
       <div className="flex gap-2 text-gray-400  ">
       <h1 className="text-center w-full text-gray-400 text-xl font-bold font-['poppins sf pro']">Search your <span className="text-emerald-600  mr-[.4rem]">Friend</span>
       here </h1>
       <UserPlus size={16} className="flex my-auto text-emerald-600  "/>
       </div>
        </div>
      </div>)
    }
    
    </>
  )
}
export default SearchListContainer