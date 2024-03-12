import React from "react";
import { sidebarLinkProps } from "../../data/props/sidebarLinkProps";

export default function SidebarLink({ icon, text }: sidebarLinkProps) {
  return (
    <div className="mb-6 flex flex-col items-center group">
      <div className="text-white text-2xl">{icon}</div>
      <span className="text-white text-xs pl-1 mt-2 group-hover:text-gray-400">
        {text}
      </span>
    </div>
  );
}
