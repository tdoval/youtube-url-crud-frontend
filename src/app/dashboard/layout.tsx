import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | CRUD YT URL",
  description: "Dashboard with stats, links, and more.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex flex-col min-h-screen">{children}</main>;
}
