import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth | CRUD YT URL",
  description: "Register or login to CRUD YT URL.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex flex-col min-h-screen">{children}</main>;
}
