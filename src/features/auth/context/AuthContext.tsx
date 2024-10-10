"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { AuthContextType } from "../types";
import { useRouter } from "next/navigation";

interface TokenData {
  accessToken: string;
  refreshToken: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const router = useRouter();

  // Função para atualizar o token
  const refreshToken = useCallback(async () => {
    try {
      const storedRefreshToken = localStorage.getItem("refresh_token");
      if (storedRefreshToken) {
        const response = await fetch("/api/token/refresh/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: storedRefreshToken }),
        });

        if (!response.ok) {
          throw new Error("Erro ao renovar o token");
        }

        const data = await response.json();
        const { access } = data;

        // Atualiza o token no estado e no localStorage
        setTokenData((prev) => {
          if (!prev) {
            return null;
          }
          return { accessToken: access, refreshToken: prev.refreshToken };
        });
        localStorage.setItem("access_token", access);
      }
    } catch (error) {
      console.error("Erro ao atualizar o token:", error);
      logout(); // Faz logout em caso de erro ao atualizar o token
    }
  }, []);

  // Carrega o token e o usuário do localStorage na montagem
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("access_token");
    const storedRefreshToken = localStorage.getItem("refresh_token");
    const storedUser = localStorage.getItem("user");

    // Verifica se todos os dados estão disponíveis e atualiza o estado
    if (storedAccessToken && storedRefreshToken && storedUser) {
      setTokenData({
        accessToken: storedAccessToken,
        refreshToken: storedRefreshToken,
      });
      setUser(storedUser);
    }
  }, []);

  // Inicia o processo de renovação do token periodicamente
  useEffect(() => {
    if (tokenData?.refreshToken) {
      const interval = setInterval(refreshToken, 15 * 60 * 1000); // Renova a cada 15 minutos
      return () => clearInterval(interval);
    }
  }, [tokenData?.refreshToken, refreshToken]);

  // Função para realizar o login, definindo token e usuário
  const login = (accessToken: string, refreshToken: string, user: string) => {
    setTokenData({ accessToken, refreshToken });
    setUser(user);
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("user", user);
  };

  // Função para realizar o logout e limpar o estado e localStorage
  const logout = () => {
    setTokenData(null);
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    router.push("/"); // Redireciona para a main page ("/") no logout
  };

  return (
    <AuthContext.Provider
      value={{ user, token: tokenData?.accessToken ?? null, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
