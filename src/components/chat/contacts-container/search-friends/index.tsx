import { Separator } from "@radix-ui/react-dropdown-menu"
import { ScrollArea } from "../../../ui/scroll-area"
import { useAppSelector } from "../../../../store/hooks"
import { currentUsersSelector, userType } from "../../../../store/slices/userSlice"

import SearchUserShimmerUI from "./shimmerUI"
import SearchFriendDetails from "./search-friend-details"



const SearchFriendsList = () => {
  const searchUsers=useAppSelector(currentUsersSelector)
  return (
    <ScrollArea className="h-[415px]  outline-none border-none w-full rounded-md ">
      <div className="p-4">
      
        {searchUsers[0]&&searchUsers[0].length>0?searchUsers[0].map((user:userType) => (
          <>
       <SearchFriendDetails list={user}/>
            <Separator className="my-2 " />
          </>
        )):(
            <SearchUserShimmerUI/>
        )
      
      }
      </div>
    </ScrollArea>
  )
}
export default SearchFriendsList