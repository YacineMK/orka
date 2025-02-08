"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const StatusSelect = () => {
  const [status, setStatus] = useState("Done");
  const [subStatus, setSubStatus] = useState(0);

  return (
    <div className="flex  w-full justify-center my-3">
      <div className="flex flex-col lg:flex-row  w-full  py-2 my-2 bg-white rounded-md shadow-sm">
        <div className="w-full border-r border-fg border-opacity-30">
          <div className="w-full mb-4 flex justify-center items-center">
            <span className="text-fg font-semibold mt-3">Done</span>
          </div>
          <div className="grid grid-cols-3 px-2 gap-3">
            {[0, 1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                onClick={() => {
                  setStatus("Done");
                  setSubStatus(num);
                }}
                className={`rounded-sm shadow-sm ${
                  status === "Done" && subStatus === num
                    ? "bg-purple text-white"
                    : "bg-bg text-fg"
                }`}
              >
                Done
              </Button>
            ))}
          </div>
        </div>
        <div className="w-full border-r border-fg border-opacity-30">
          <div className="w-full mb-4 flex justify-center items-center">
            <span
              className="text-fg font-semibold mt-3"
              onClick={() => setStatus("Review")}
            >
              Review
            </span>
          </div>
          <div className="grid grid-cols-3 px-2 gap-3">
            {[0, 1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                onClick={() => {
                  setStatus("Review");
                  setSubStatus(num);
                }}
                className={`rounded-sm shadow-sm ${
                  status === "Review" && subStatus === num
                    ? "bg-purple text-white"
                    : "bg-bg text-fg"
                }`}
              >
                Review
              </Button>
            ))}
          </div>
        </div>

        <div className="w-full border-fg">
          <div className="w-full mb-4 flex justify-center items-center">
            <span
              className="text-fg font-semibold mt-3"
              onClick={() => setStatus("Canceled")}
            >
              Canceled
            </span>
          </div>
          <div className="grid grid-cols-3 px-2 gap-3">
            {[0, 1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                onClick={() => {
                  setStatus("Canceled");
                  setSubStatus(num);
                }}
                className={`rounded-sm shadow-sm ${
                  status === "Canceled" && subStatus === num
                    ? "bg-purple text-white"
                    : "bg-bg text-fg"
                }`}
              >
                Canceled
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusSelect;
