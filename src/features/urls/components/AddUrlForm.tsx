"use client";

import { useState } from "react";
import { addUrl } from "@/features/urls/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useRequireAuth } from "@/features/auth/hooks/useRequireAuth";
import { useUrlValidation } from "@/features/urls/hooks/useUrlValidation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddUrlForm = () => {
  useRequireAuth();
  const { token } = useAuth();

  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const isValidYoutubeUrl = useUrlValidation(url);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isValidYoutubeUrl) {
      setError("Por favor, insira uma URL válida do YouTube.");
      return;
    }
    try {
      if (!token) {
        throw new Error("Usuário não autenticado");
      }

      await addUrl(url, token);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Adicionar URL do YouTube</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="https://www.youtube.com/..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mb-4"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Button type="submit" className="w-full">
            Adicionar URL
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddUrlForm;
