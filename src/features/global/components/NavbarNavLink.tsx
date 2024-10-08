import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavbarNavLinkProps = {
  href: string;
  label: string;
};

const NavbarNavLink = ({ href, label }: NavbarNavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "block py-2 px-4 rounded hover:bg-gray-700",
        isActive ? "bg-gray-700 font-semibold" : "text-white",
      )}
    >
      {label}
    </Link>
  );
};

export default NavbarNavLink;
