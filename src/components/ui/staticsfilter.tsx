"use client";

import { Filter } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import useMediaQuery from "@/hooks/useResponsive";

const StaticsFilter = () => {
  const [date, setDate] = useState(new Date());
  const { isMd } = useMediaQuery();

  return (
    <div className="w-full flex gap-4  bg-white border rounded-lg p-3 mb-5">
      <div className="w-full flex flex-col gap-4">
        <Input
          type="text"
          className="bg-white border rounded-lg p-2"
          placeholder="search by name"
        />
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Avilable">Avilable</SelectItem>
              <SelectItem value="Not Avilable">Not Avilable</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Quantity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="<100">{"< "}100</SelectItem>
              <SelectItem value=">100">{"> "}100</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <Calendar mode="single" selected={date} initialFocus />
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Not Avilable">Confirmed</SelectItem>
              <SelectItem value="Avilable">Panding</SelectItem>
              <SelectItem value="Avilable">Canceled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {isMd && (
        <div className="flex flex-col justify-start gap-2">
          <Button className="bg-purple px-4 py-1 text-white">
            <Filter size={16} className="mr-2" />{" "}
            <span className="text-md">Filter</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default StaticsFilter;
