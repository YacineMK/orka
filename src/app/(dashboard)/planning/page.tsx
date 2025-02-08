"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import FlowDiagram from "@/components/dashboard/components/workflow/workflow";

const Dashboard = () => {
  const [view, setView] = useState("month");
  const label = new Date().toLocaleString("default", {
    day: "numeric",
    month: "long",
  });
  return (
    <div>
      <nav className="flex justify-between items-center h-16 bg-white text-black border-b border-b-gray-100 shadow-sm px-4 md:px-8">
        <div className="flex justify-between items-center px-1 pt-2 pb-3 w-full">
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
          <div className="flex gap-2 items-center justify-end px-5">
            <button
              type="button"
              className="bg-[#DCE7FF] flex justify-center items-center text-2xl px-2 py-2 rounded-md text-blue-200"
            >
              <IoIosArrowBack />
            </button>
            <button
              type="button"
              className="bg-[#DCE7FF] flex justify-center items-center text-2xl px-2 py-2 rounded-md text-blue-200"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </nav>
      <div className="shadow-sm p-4 w-full">
        <FlowDiagram />
      </div>
    </div>
  );
};

export default Dashboard;
