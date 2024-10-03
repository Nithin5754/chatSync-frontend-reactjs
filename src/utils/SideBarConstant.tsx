
import {
  IconArrowLeft,
  IconUserBolt,
} from "@tabler/icons-react";
import { GroupIcon } from "lucide-react";




  export const SideBarlinks = [

    {
      label: "DIRECT MESSAGES",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "CHANNELS", 
      href: "#",
      icon: (
        <GroupIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ]


