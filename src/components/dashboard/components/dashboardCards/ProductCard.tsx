import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { ProductsContent } from "@/data/dashboard/products.content";
import { ProductCardProps } from "@/types/props";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="w-full  px-4 py-6 bg-white rounded-md">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-lg font-medium text-black">Products</h1>
        <Link
          href={"dashboard/products"}
          className="bg-[#5330B51F] text-purple rounded-xl py-2 px-2 flex gap-4 "
        >
          View All <ChevronRight />
        </Link>
      </div>
      <Table className="w-full mt-4">
        <TableBody>
          {ProductsContent.map((product: ProductCardProps, index: number) => (
            <TableRow key={index} className="flex justify-between items-center">
              <TableCell>
                <div className="flex gap-3 items-center">
                  <Image
                    src={product.image}
                    width={50}
                    height={50}
                    alt="product"
                    className="bg-gray-200 rounded-full"
                  />
                  <div>
                    <h1 className="text-black text-md font-medium mb-1">
                      {product.name}
                    </h1>
                    <p className="text-gray-200 text-xs">
                      {product.description}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-right">
                  <h1 className="text-black text-sm font-medium mb-1">
                    {product.price}$
                  </h1>
                  <p className="text-gray-200 text-xs">Nov 14, 07:00 AM</p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductCard;
