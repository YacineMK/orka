"use client";
import SettingsContent from "@/data/dashboard/settings.content";

const Settings = () => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-[500px] mx-2 px-5 py-5 bg-white rounded-md">
      <SettingsContent />
    </div>
  );
};

export default Settings;
