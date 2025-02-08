import Layout from "@/components/dashboard/layout";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="hide-scrollbarfx hide-scrollbar overflow-x-hidden">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
