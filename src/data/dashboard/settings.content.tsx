import React, { useState } from "react";
import { SettingsContentProps } from "@/types/props";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Building2, CreditCard, User, Waypoints } from "lucide-react";

const SettingsContent = () => {
  const [open, setOpen] = useState({
    Account: false,
    MyCompany: false,
    ConnectedApps: false,
    Payments: false,
  });

  const settingsContent: SettingsContentProps[] = [
    {
      title: "Account",
      name: "Account",
      desctiption: "Manage your account",
      isOpen: open.Account,
      icon: <User size={21} />,
    },
    {
      title: "My Company",
      name: "MyCompany",
      desctiption: "Manage your company",
      isOpen: open.MyCompany,
      icon: <Building2 size={21} />,
    },
    {
      title: "Connected Apps",
      name: "ConnectedApps",
      desctiption: "Manage your connected apps",
      isOpen: open.ConnectedApps,
      icon: <Waypoints size={21} />,
    },
    {
      title: "Payments",
      name: "Payments",
      isOpen: open.Payments,
      desctiption: "Manage your payments",
      icon: <CreditCard size={21} />,
    },
  ];

  return (
    <>
      {settingsContent.map((item: SettingsContentProps, index: number) => (
        <div key={index}>
          <div
            key={item.title}
            className="flex justify-between items-center p-2"
          >
            <div className="flex gap-3 items-center">
              {item.icon}
              <h3 className="text-md hover:text-purple-600 font-semibold">
                {item.title}
              </h3>
            </div>
            <div
              onClick={() =>
                setOpen((prevState) => ({
                  ...prevState,
                  [item.name]: !item.isOpen,
                }))
              }
            >
              {item.isOpen ? (
                <ChevronUp size={21} />
              ) : (
                <ChevronDown size={21} />
              )}
            </div>
          </div>
          {item.isOpen && (
            <div className="px-4 py-3 rounded-md bg-bg">
              <p className="text-sm text-gray-600">{item.desctiption}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SettingsContent;
