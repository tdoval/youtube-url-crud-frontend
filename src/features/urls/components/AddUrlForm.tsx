"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUrlValidation } from "@/features/urls/hooks/useUrlValidation";

const AddUrlForm = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const isValidYoutubeUrl = useUrlValidation(url);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidYoutubeUrl) {
      setError("");
      console.log("URL válida:", url);
      // TODO: Adicionar integração com o backend
    } else {
      setError("Por favor, insira uma URL válida do YouTube.");
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
