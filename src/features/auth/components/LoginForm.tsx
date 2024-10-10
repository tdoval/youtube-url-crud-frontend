"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loginUser } from "@/features/auth/api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import Link from "next/link";

const LoginPage = () => {
  const { login, token } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, [token, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const tokenData = await loginUser({ username, password });
      const { access, refresh } = tokenData;
      login(access, refresh, username);
      router.push("/dashboard");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-4"
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
              required
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <Button type="submit" className="w-full">
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/register" className="text-blue-500 hover:underline">
              Clique aqui para criar uma conta
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
