import FlowDiagram from "@/components/dashboard/components/luancher/workflow"
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

function Annimation() {
  return (
    <div>
        <nav className="flex mb-7 justify-between items-center h-16 bg-white text-black border-b border-b-gray-100 shadow-sm px-2 md:px-4">
        <div className="flex justify-between items-center px-1 pt-5 pb-7 w-full">
          <div className="flex space-x-5 items-center">
            <span className="text-lg font-medium">Presentation of project :</span>
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
          </nav>
        </div>
      </nav>
        <FlowDiagram />
    </div>
  )
}

export default Annimation