import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    console.log("Redirecting to sign-in");
    return await NextResponse.redirect(new URL("/auth/signin", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard",
};
