"use client";

import { Label } from "@/components/ui/label";
import {
  SidebarMainLinks,
  SidebarSecondaryLinks,
} from "@/data/dashboard/sideBar.content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const currentpath = usePathname();
  const [hovered, setHovered] = useState(true);

  return (
    <section
      className={`${hovered && "w-[280px]"} h-full flex flex-col gap-6 text-fg bg-white shadow-md md:py-10 transition-all duration-600 ease-in-out`}
      onMouseEnter={() => setHovered(true)}
    >
      <ul className="px-4">
        {SidebarMainLinks.map((link, index) => (
          <Link
            href={link.href.startsWith("/") ? link.href : `/${link.href}`}
            key={index}
            className={`${currentpath === link.href && "text-purple"} transition-transform duration-300 ease-in-out hover:bg-bg rounded-md flex items-center justify-start p-4`}
          >
            {link.icon}
            {hovered && (
              <span className="ml-4 transition-opacity duration-300 ease-in-out opacity-100">
                {link.title}
              </span>
            )}
          </Link>
        ))}
      </ul>
      <ul className="px-4">
        {hovered && (
          <Label className="text-md font-semibold text-black">Other</Label>
        )}
        {SidebarSecondaryLinks.map((link, index) => (
          <Link
            href={link.href.startsWith("/") ? link.href : `/${link.href}`}
            key={index}
            className={`${currentpath === link.href && "text-purple"} hover:bg-bg rounded-md flex items-center justify-start p-4`}
          >
            {link.icon}
            {hovered && (
              <span className="ml-4 transition-opacity duration-300 ease-in-out opacity-100">
                {link.title}
              </span>
            )}
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
