"use client";

import React from "react";
import SidebarNavLink from "./SidebarNavLink";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard Menu</h2>

      <div className="mb-4">
        <p className="text-sm">Bem-vindo,</p>
        <p className="text-lg font-semibold">{user}</p>
      </div>

      <nav>
        <ul className="space-y-2">
          <li>
            <SidebarNavLink href="/dashboard/urls/add" label="Adicionar URL" />
          </li>
          <li>
            <SidebarNavLink
              href="/dashboard/urls/list"
              label="Visualizar URLs"
            />
          </li>
          <li>
            <SidebarNavLink
              href="/dashboard/urls/update"
              label="Atualizar URL"
            />
          </li>
          <li>
            <SidebarNavLink href="/dashboard/urls/delete" label="Deletar URL" />
          </li>
        </ul>
      </nav>

      <div className="mt-6">
        <Button
          type="button"
          onClick={handleLogout}
          className="w-full bg-gray-500 py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
