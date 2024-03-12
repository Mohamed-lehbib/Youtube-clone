import React from "react";
import { sidebarLinkProps } from "../../data/props/sidebarLinkProps";

export default function SidebarLink({ icon, text }: sidebarLinkProps) {
  return (
    <div className="mb-6 flex items-center group">
      <div className="text-white text-2xl mr-2">{icon}</div>
      <span className="text-white text-s pl-1 group-hover:text-gray-400">
        {text}
      </span>
    </div>
  );
}
