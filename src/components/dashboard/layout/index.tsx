"use client";

import { LayoutProps } from "@/types/props";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import useMediaQuery from "@/hooks/useResponsive";
import MobileSideBar from "./MobileSideBar";

const Layout = ({ children }: LayoutProps) => {
  const { isMd } = useMediaQuery();
  return (
    <div className="overflow-hidden text-fg ">
      <Navbar />
      <section className="flex h-[calc(100vh-64px)]">
        {isMd ? <Sidebar /> : <MobileSideBar />}
        <div className="py-6 px-5 overflow-auto w-full">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
