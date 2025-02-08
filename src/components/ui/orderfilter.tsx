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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import useMediaQuery from "@/hooks/useResponsive";

const OrderFilter = () => {
  const { isMd } = useMediaQuery();

  return (
    <div className="w-full flex gap-4  bg-white border rounded-lg p-3">
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
        </div>
      </div>
      {isMd && (
        <div className="flex flex-col justify-start gap-2">
          <Button className="bg-purple px-4 py-1 text-white">
            <Filter size={16} className="mr-2" />{" "}
            <span className="text-md">Filter</span>
          </Button>
          <Dialog>
            <DialogTrigger className="bg-purple px-5 py-[10px] text-white rounded-md">
              <span className="text-sm  flex">ajouter</span>
            </DialogTrigger>
            <DialogContent className="bg-white ">
              <DialogHeader>
                <DialogTitle>Ajouter membre</DialogTitle>
                <DialogDescription>
                  Veuillez remplir les champs ci-dessous pour ajouter un membre
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-between w-full">
                <div className="space-y-2">
                  <Label>Nom</Label>
                  <Input
                    type="text"
                    className="bg-white border rounded-lg px-4 py-2"
                    placeholder="Nom"
                  />
                </div>
                <div className=" space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="text"
                    className="bg-white border rounded-lg px-4 py-2"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className=" space-y-2">
                <Label>Role</Label>
                <Input
                  type="text"
                  className="bg-white border rounded-lg p-2"
                  placeholder="Role"
                />
              </div>
              <div className=" space-y-2">
                <Label>Numero</Label>
                <Input
                  type="text"
                  className="bg-white border rounded-lg p-2"
                  placeholder="Numero"
                />
              </div>
              <div className=" space-y-2">
                <Label>Address</Label>
                <Input
                  type="text"
                  className="bg-white border rounded-lg p-2"
                  placeholder="Address"
                />
              </div>
              <Button className="bg-purple px-4 py-1 text-white">
                Ajouter
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default OrderFilter;
