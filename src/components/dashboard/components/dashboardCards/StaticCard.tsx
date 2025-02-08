import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Bolt } from "lucide-react";
import Image from "next/image";

const StaticCard = () => {
  return (
    <Table className="bg-white shadow-sm rounded-md">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Bolt size={20} />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Confiramtions</TableHead>
          <TableHead>Confirmed</TableHead>
          <TableHead>Panding</TableHead>
          <TableHead>Canceled</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Image
              src="https://placehold.co/600x600.svg"
              alt="image"
              width={40}
              height={40}
              className="rounded-full bg-fg "
            />
          </TableCell>
          <TableCell>Joe Don</TableCell>
          <TableCell>12 Orders </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-green-100 text-green-200">
              4 Orders
            </span>
          </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-orange-100 text-orange-200">
              4 Orders
            </span>
          </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-red-100 text-red-200">
              4 Orders
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              src="https://placehold.co/600x600.svg"
              alt="image"
              width={40}
              height={40}
              className="rounded-full bg-fg "
            />
          </TableCell>
          <TableCell>Joe Don</TableCell>
          <TableCell>12 Orders </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-green-100 text-green-200">
              4 Orders
            </span>
          </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-orange-100 text-orange-200">
              4 Orders
            </span>
          </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-red-100 text-red-200">
              4 Orders
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              src="https://placehold.co/600x600.svg"
              alt="image"
              width={40}
              height={40}
              className="rounded-full bg-fg "
            />
          </TableCell>
          <TableCell>Joe Don</TableCell>
          <TableCell>12 Orders </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-green-100 text-green-200">
              4 Orders
            </span>
          </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-orange-100 text-orange-200">
              4 Orders
            </span>
          </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-red-100 text-red-200">
              4 Orders
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              src="https://placehold.co/600x600.svg"
              alt="image"
              width={40}
              height={40}
              className="rounded-full bg-fg "
            />
          </TableCell>
          <TableCell>Joe Don</TableCell>
          <TableCell>12 Orders </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-green-100 text-green-200">
              4 Orders
            </span>
          </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-orange-100 text-orange-200">
              4 Orders
            </span>
          </TableCell>
          <TableCell>
            <span className="px-3 py-1 justify-center rounded-md bg-red-100 text-red-200">
              4 Orders
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default StaticCard;
