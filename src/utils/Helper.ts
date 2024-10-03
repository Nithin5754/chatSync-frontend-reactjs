import { toast } from "sonner"


export const textCustomColor='bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)'

export const  customBgColor='bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)'


export function loginValidation (email:string,password:string){
  if (!email&&!password ) {
    toast.error("all field required")
     return false
   }else if (!email ) {
   toast.error("email is required!")
    return false
  }else if(!password){
    toast.error("password is required")
    return false
  }

  return true

}



export function registerValidation (email:string,password:string,confirmPassword:string,firstName:string,lastName:string){
  if (!email&&!password&&!confirmPassword&&!firstName&&!lastName ) {
    toast.error("all field required")
     return false
   }else if(!firstName){
    toast.error("firstName is required")
    return false
  }else if(!lastName){
    toast.error("lastName is required")
    return false
  }else if (!email ) {
   toast.error("email is required!")
    return false
  }else if(!password){
    toast.error("password is required")
    return false
  }else if(!confirmPassword){
    toast.error("confirm password is required")
    return false
  }else if(password!==confirmPassword){
    toast.error("password not match please try again")
    return false
  }

  return true

}