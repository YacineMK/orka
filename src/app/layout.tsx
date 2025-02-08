import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const roboto = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orka",
  description: "a platform to plan and manage your logistics tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
