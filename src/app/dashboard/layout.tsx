import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard | CRUD YT URL",
  description:
    "Dashboard for CRUD YT URL, create, manage, play, and view stats of your URLs",
};
import { UrlProvider } from "@/features/dashboard/context/UrlsContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UrlProvider>{children}</UrlProvider>;
}
