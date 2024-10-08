import { Plus, Search } from "lucide-react";

import { Button } from "../../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import SearchInput from "./search-input";

import SearchListContainer from "./searchList-container";
import { customBgColor } from "../../../utils/Helper";





export function ContactsContainer() {
  return (
    <Popover>
      <PopoverTrigger asChild className="">
        <Button variant="outline" className="bg-transparent outline-none hover:bg-transparent  border-none"><Plus  size={16}/></Button>
      </PopoverTrigger>
   
     <PopoverContent className=" w-[400px] h-[500px] ml-24 bg-neutral-900  ">
        <div className="grid gap-4">
          <div className="space-y-2">
          <div className=" flex h-[7vh] rounded-md dark:bg-neutral-800 ">
  
          <SearchInput/>
       <div className={`w-[50px] h-[5vh]  rounded-md relative  right-2   flex m-auto py-0 justify-center ${customBgColor}`}>
        <button className=" border-none outline-none border-0  bg-transparent  flex items-center">
            <Search/>
        </button>
       </div>
    </div>
          </div>
          <div className="grid gap-2">
       
       <SearchListContainer/>
         
      
          </div>
        </div>
      </PopoverContent>
 
    </Popover>
  )
}




