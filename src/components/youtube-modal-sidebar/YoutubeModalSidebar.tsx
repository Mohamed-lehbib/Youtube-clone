import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import SidebarLink from "./SidebarLink";

export default function YoutubeModalSidebar() {
  return (
    <div className="lg:hidden fixed left-0 top-16 h-full bg-black py-4 pl-1 px-6">
      <div className="ml-4 flex flex-col items-start py-4">
        <SidebarLink icon={<AiFillHome size={32} />} text="Accueil" />
        <SidebarLink icon={<SiYoutubeshorts size={32} />} text="Shorts" />
        <SidebarLink icon={<MdSubscriptions size={32} />} text="Abonnements" />
        <SidebarLink icon={<MdVideoLibrary size={32} />} text="Vous" />
      </div>
    </div>
  );
}
