import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DashboardTableCardContent } from "@/data/dashboard/dashboard.content";
import { CheckCheck, Hourglass, X } from "lucide-react";

const TableCard = () => {
  return (
    <div className="w-full md:w-[650px] md:h-[360px]  px-3 py-5 bg-white rounded-md">
      <div className=" grid grid-cols-1 sm:grid-cols-4 xs:grid-cols-2 gap-5 mx-4 mb-2 ">
        <div className="flex flex-col items-center gap-2">
          <span className="flex text-center gap-2 text-black font-medium ">
            <CheckCheck size={22} className="text-green-200" />
            Confirmed
          </span>
          <span className="flex text-center">27</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="flex text-center gap-2 text-black font-medium ">
            <Hourglass size={22} className="text-orange-200" />
            Pending
          </span>
          <span className="flex text-center">50</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="flex text-center gap-2 text-black font-medium ">
            <X size={22} className="text-red-200" />
            Canceled
          </span>
          <span className="flex text-center">23</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="flex text-center gap-2 text-black font-medium ">
            All
          </span>
          <span className="flex text-center">100</span>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DashboardTableCardContent.map((content, index) => (
            <TableRow key={index}>
              <TableCell>{content.name}</TableCell>
              <TableCell>
                <span
                  className={`
                  ${
                    content.status === "Done"
                      ? "bg-green-100 text-green-200"
                      : content.status === "In Review"
                        ? "bg-gray-100 text-gray-200"
                        : content.status === "In Progress"
                          ? "bg-orange-100 text-orange-200"
                          : "bg-red-100 text-red-200"
                  }
                   px-2 py-1 rounded-md`}
                >
                  {content.status}
                </span>
              </TableCell>
              <TableCell>{content.phone}</TableCell>
              <TableCell>{content.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableCard;
