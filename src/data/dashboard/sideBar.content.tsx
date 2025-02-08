import { link } from "fs";
import {
  ChartColumnBig,
  LayoutDashboard,
  FolderOpenDot,
  SlidersHorizontal,
  CalendarFold,
} from "lucide-react";

export const SidebarMainLinks = [
  {
    title: "dashboard",
    href: "/",
    icon: <LayoutDashboard />,
  },
  {
    title: "planning",
    href: "/planning",
    icon: <FolderOpenDot />,
  },

  {
    title: "Calender",
    href: "/calender",
    icon: <CalendarFold />,
  },

  {
    title: "Statistiques",
    href: "/statistics",
    icon: <ChartColumnBig />,
  },
];

export const SidebarSecondaryLinks = [
  {
    title: "Settings",
    href: "/settings",
    icon: <SlidersHorizontal />,
  },
];
