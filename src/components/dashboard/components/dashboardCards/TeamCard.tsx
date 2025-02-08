import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { TeamContentCard } from "@/data/dashboard/Team.content";
import { TeamContentCardProps } from "@/types/props";
import { ChevronRight, PencilLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TeamCard = () => {
  return (
    <div className="w-full px-4 py-6 bg-white rounded-md">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-lg font-medium text-black">Team</h1>
        <Link
          href={"/dashboard/team"}
          className="bg-[#5330B51F] text-purple rounded-xl py-2 px-2 flex gap-4 "
        >
          View All <ChevronRight />
        </Link>
      </div>
      <Table className="w-full mt-4">
        <TableBody>
          {TeamContentCard.map(
            (product: TeamContentCardProps, index: number) => (
              <TableRow
                key={index}
                className="flex justify-between items-center"
              >
                <TableCell>
                  <div className="flex gap-3 items-center">
                    <Image
                      src={product.Image}
                      width={50}
                      height={50}
                      alt="product"
                      className="bg-gray-200 rounded-full"
                    />
                    <div>
                      <h1 className="text-black text-md font-medium mb-1">
                        {product.name}
                      </h1>
                      <p className="text-gray-200 text-xs">{product.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <PencilLine />
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeamCard;
