"use client";

import Link from "next/link";
import { useAuthRedirect } from "@/features/auth/hooks/useAuthRedirect";
import Logo from "@/features/global/components/Logo";

export default function HomePage() {
  useAuthRedirect();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-8">
        <Logo />
      </div>
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao URL CRUD</h1>
      <p className="text-lg text-gray-600 mb-8">
        Gerencie suas URLs do YouTube de forma simples e eficiente.
      </p>
      <Link
        className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition duration-300"
        href="/register"
      >
        Vamos começar!
      </Link>
    </div>
  );
}
