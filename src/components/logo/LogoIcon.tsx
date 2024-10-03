import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";


export const LogoIcon = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <MessageCircle className="text-purple-700 z-50" fill="#7c0fd5"/>
    </Link>
  );
};
