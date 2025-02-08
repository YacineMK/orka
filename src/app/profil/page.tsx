import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { PencilLine } from "lucide-react";
import Image from "next/image";

const Profil = () => {
  return (
    <div className="px-6 py-6 bg-white rounded-md shadow-md space-y-5">
      <div className="">
        <Image
          src="https://placehold.co/600x600.png"
          alt="profile"
          width={130}
          height={130}
          className="rounded-full border-2 p-1 border-purple"
        />
        <div className="ml-2 mt-3">
          <h1 className="text-lg text-black font-bold">Joe Doe</h1>
          <p className="text-sm text-fg font-medium">Super Admin</p>
        </div>
      </div>
      <hr className="my-2 w-full bg-bg" />
      <form className="space-y-4">
        <div className="flex justify-between">
          <h1 className="text-lg text-black">Main Info</h1>
          <PencilLine size={22} />
        </div>

        <div>
          <Label>Position</Label>
          <Input type="text" className="w-full border rounded-lg p-2" />
        </div>
        <div>
          <Label>Company</Label>
          <Input type="text" className="w-full border rounded-lg p-2" />
        </div>
        <div>
          <Label>Location</Label>
          <Input type="text" className="w-full border rounded-lg p-2" />
        </div>
        <div>
          <Label>Birthday Date</Label>
          <Input type="text" className="w-full border rounded-lg p-2 " />
        </div>
        <hr className="w-full bg-bg " />
        <h1 className="text-lg text-black mb-2 mt-7">Contact Info</h1>
        <div>
          <Label>Email</Label>
          <Input type="text" className="w-full border rounded-lg p-2" />
        </div>
        <div>
          <Label>Mobile Number</Label>
          <Input type="text" className="w-full border rounded-lg p-2" />
        </div>
      </form>
    </div>
  );
};

export default Profil;
