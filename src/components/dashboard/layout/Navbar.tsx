"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import useMediaQuery from "@/hooks/useResponsive";
import { useOpen } from "@/hooks/useOpen";
import { useForm, SubmitHandler } from "react-hook-form";
import { Redirect } from "@/lib/redirect";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Isearch {
  value: string;
}

const Navbar = () => {
  const { register, handleSubmit } = useForm<Isearch>();
  const { isXXs } = useMediaQuery();
  const { toggle } = useOpen();

  const onSubmit: SubmitHandler<Isearch> = (data) => {
    const link = data.value.toLowerCase();
    if (link === "dashboard") return Redirect("/dashboard");
    return Redirect(`/dashboard/${link}`);
  };

  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black border-b border-b-gray-100 shadow-sm px-4 md:px-8 ">
      <div className="w-full md:w-2/3 flex ">
        <Image
          src="/Logo.svg"
          alt="logo"
          height={60}
          width={100}
          className="md:mr-24"
          onClick={toggle}
        />
      </div>

      {!isXXs && (
        <div className="w-1/3 flex justify-end mr-3">
          <Popover>
            <PopoverTrigger>
              <Bell />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Link href={"/profil"} className="flex ml-2 items-center">
            <Avatar className="mr-3">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/124599?v=4"
                alt="avatar"
                className="rounded-full"
              />
            </Avatar>

            <div>
              <h1 className="text-sm sm:text-md font-medium">Mr. Heddouche</h1>
              <p className="text-xs sm:text-sm text-fg font-medium">Admin</p>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
