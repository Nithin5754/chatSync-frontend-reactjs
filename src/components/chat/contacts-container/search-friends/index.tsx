import { Separator } from "@radix-ui/react-dropdown-menu"
import { ScrollArea } from "../../../ui/scroll-area"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `hello.${a.length - i}`
)
const SearchFriendsList = () => {
  return (
    <ScrollArea className="h-[415px]  outline-none border-none w-full rounded-md ">
      <div className="p-4">
      
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm hover:bg-neutral-800 px-4 py-2 rounded-md transition-all duration-500">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
export default SearchFriendsList