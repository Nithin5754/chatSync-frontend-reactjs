


import { useState } from "react";
import { Links, Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";


import { cn } from "../../lib/utils";
import { LinkProps, Outlet } from "react-router-dom";
import { Logo } from "../logo";
import { LogoIcon } from "../logo/LogoIcon";
import { SideBarlinks } from "../../utils/SideBarConstant";
import { Plus } from "lucide-react";
import { ContactsContainer } from "../chat/contacts-container";



const HOD = (Component: React.ComponentType< {
  link: Links;
  className?: string;
  props?: LinkProps
}>) => {
  return (props: { link: Links; idx: number }) => {
      if(props.link.label==='DIRECT MESSAGES' ){
        return (
          <div className="flex flex-row justify-between">
            <Component {...props} />
            <div className="">
          
            <ContactsContainer/>
            </div>
          </div>
        );
      }else{
        return <Component {...props} />
        
          
      
        
        
      }
  };
};



 const  EnchanedComponents=HOD(SidebarLink)

export function SideBarPage() {

  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        " flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" 
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 border-r-2 border-r-gray-500 ">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {SideBarlinks.map((link, idx) =>{
             return <EnchanedComponents key={idx} link={link} idx={idx} />
              } )}
            </div>
          </div>
          <div>
        
          </div>
        </SidebarBody>
      </Sidebar>
  <Outlet/>
    </div>
  );
}








