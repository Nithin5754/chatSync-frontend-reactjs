import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Login } from "./Login"
import { Register } from "./Register"


const AuthComponents = () => {
  return (
    <Tabs defaultValue="login"   className="z-50  " >
    <TabsList className="   mt-4 absolute top-0 right-10">
      <TabsTrigger value="login" className="w-full">
        Login
      </TabsTrigger>
      <TabsTrigger value="register" className="w-full" >
        Register
      </TabsTrigger>
    </TabsList>
    <TabsContent value="login" >
      <Login />
    </TabsContent>
    <TabsContent value="register">
      <Register />
    </TabsContent>
  </Tabs> 
  )
}
export default AuthComponents