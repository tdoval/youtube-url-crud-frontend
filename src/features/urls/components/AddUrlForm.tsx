"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addUrl } from "@/features/urls/api";
import { useUrlValidation } from "@/features/urls/hooks/useUrlValidation";
import { useRequireAuth } from "@/features/auth/hooks/useRequireAuth";

const AddUrlForm = () => {
  useRequireAuth();

  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const isValidYoutubeUrl = useUrlValidation(url);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidYoutubeUrl) {
      setError("Por favor, insira uma URL válida do YouTube.");
      return;
    }
    try {
      await addUrl(url);
      setUrl("");
      setError("");
    } catch {
      setError("Erro ao adicionar a URL.");
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
