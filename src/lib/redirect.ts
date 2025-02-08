"use server";

import { redirect } from "next/navigation";

export const Redirect = async (path: string) => {
  redirect(path);
};
