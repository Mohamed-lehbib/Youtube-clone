import React from "react";
import SidebarLink from "./SidebarLink";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdHistory, MdVideoLibrary } from "react-icons/md";

export default function YoutubeSidebar() {
  return (
    <div className="hidden lg:block fixed left-0 top-24 h-full bg-black py-4 pl-1">
      {/* Sidebar Links */}
      <div className="flex flex-col items-center">
        <SidebarLink icon={<AiFillHome size={30} />} text="Accueil" />
        <SidebarLink icon={<SiYoutubeshorts size={30} />} text="Shorts" />
        <SidebarLink icon={<MdSubscriptions size={30} />} text="Abonnements" />
        <SidebarLink icon={<MdVideoLibrary size={30} />} text="Vous" />
      </div>
    </div>
  );
}
