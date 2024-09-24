import { MessageCircle } from "lucide-react"
import { cn } from "../../lib/utils"
import { textCustomColor } from "../../utils/Helper"




const Logo = () => {
  return (

  <div className="flex gap-4">
        <h1 className={cn(`md:text-2xl font-serif  text-xl text-white relative z-50 ${textCustomColor}`)}>
    chatSYNC 
  </h1>
    <MessageCircle className="text-purple-700 z-50" fill="#7c0fd5"/>
  </div>
  )
}
export default Logo