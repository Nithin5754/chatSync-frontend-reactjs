import { MessageCircle } from "lucide-react"
import { cn } from "../../lib/utils"
import { textCustomColor } from "../../utils/Helper"
import { Link } from "react-router-dom"


import { motion } from "framer-motion";






export const Logo = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
     <MessageCircle className="text-purple-700 z-50" fill="#7c0fd5"/>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(`md:text-2xl font-serif  text-xl text-white relative z-50 ${textCustomColor}`)}
      >
       chatSYNC 
      </motion.span>
    </Link>
  );
};