import { LinkProps } from "react-router-dom";
import { Links, SidebarLink } from "../ui/sidebar";
import { ContactsContainer } from "../chat/contacts-container";
import LogoutUser from "../auth/logout";


 const HocSideBarLink = (Component: React.ComponentType< {
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
      }else if(props.link.label==='Logout'){
         return (
          <div className="flex flex-row justify-between">
          <Component {...props} />
          <div className="">
        
          <LogoutUser/>
          </div>
        </div>
             
         )

      }else{
        return <Component {...props} />
        
          
      
        
        
      }
  };
};


export const  EnhancedComponents=HocSideBarLink(SidebarLink)