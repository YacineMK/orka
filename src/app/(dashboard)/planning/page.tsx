"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FlowDiagram from "@/components/dashboard/components/workflow/workflow";
import Link from "next/link";


const Dashboard = () => {
  const [view, setView] = useState("month");
  const label = new Date().toLocaleString("default", {
    day: "numeric",
    month: "long",
  });

  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center h-16 bg-white text-black border-b border-b-gray-100 shadow-sm px-2 md:px-8">
        <div className="flex justify-between items-center px-1 pt-5 pb-7 w-full">
          <div className="flex space-x-5 items-center">
            <span className="text-lg font-medium">{label}</span>
            <Popover>
              <PopoverTrigger className="flex flex-row items-center gap-1 font-medium">
                <span>Select view</span>
                <IoIosArrowDown className="text-lg text-blue-200" />
              </PopoverTrigger>
              <PopoverContent className="w-[140px] flex ml-20">
                <div className="flex flex-col gap-2 justify-start">
                  <button
                    type="button"
                    className={view === "month" ? "active" : ""}
                  >
                    Month
                  </button>
                  <button
                    type="button"
                    className={view === "week" ? "active" : ""}
                  >
                    Week
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <nav className="flex space-x-3 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className=" flex items-center">
                  Optimise <IoIosArrowDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44 space-y-2 px-2">
                <DropdownMenuSeparator />
                <DropdownMenuItem>By Time</DropdownMenuItem>
                <DropdownMenuItem>By Ressources</DropdownMenuItem>
                <DropdownMenuItem>By Cost</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className=" bg-bg text-green-200 border border-green-200">
              <Link href="/presentation">Luanch Simulation</Link>
            </Button>
          </nav>
        </div>
      </nav>
      <div className="shadow-sm p-4 w-full mt-[40px]">
        <FlowDiagram />
      </div>
    </div>
  );
};

export default Dashboard;
