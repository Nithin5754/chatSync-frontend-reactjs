import { Boxes } from "../../components/acernity/background-boxes";
import AuthComponents from "../../components/auth";
import Logo from "../../components/logo";




const Auth = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute top-5 left-10">
   <Logo/>
      </div>
    <div className="absolute  inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
       
    <Boxes />

    <AuthComponents/>
  </div>
)
  
}
export default Auth



















