"use client";

import { SidebarMainLinks } from "@/data/dashboard/sideBar.content";
import { useOpen } from "@/hooks/useOpen";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileSideBar = () => {
  const { isOpen } = useOpen();
  const currentpath = usePathname();

  return (
    isOpen && (
      <section className="animate-fade-in absolute top-16 my-1 ml-4 bg-white text-fg rounded-lg h-[300px] py-6 px-4 flex flex-col justify-center z-50 ">
        {SidebarMainLinks.map((link, index) => (
          <Link
            href={`/dashboard${link.href}`}
            key={index}
            className={`${currentpath === "/dashboard" + link.href && "text-purple"}  flex items-center justify-start p-4`}
          >
            {link.icon}
            <span className="ml-4">{link.title}</span>
          </Link>
        ))}
      </section>
    )
  );
};

export default MobileSideBar;
