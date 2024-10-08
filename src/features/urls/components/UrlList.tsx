"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import YoutubePlayer from "@/features/urls/components/YoutubePlayer";
import { fetchUrls, deleteUrl } from "@/features/urls/api";
import { useRequireAuth } from "@/features/auth/hooks/useRequireAuth";

const UrlList = () => {
  useRequireAuth();

  const [urls, setUrls] = useState<{ id: string; url: string }[]>([]);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadUrls = async () => {
    setLoading(true);
    try {
      const data = await fetchUrls();
      setUrls(data);
    } catch (error) {
      console.error("Erro ao carregar URLs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUrls();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteUrl(id);
      setUrls((prevUrls) => prevUrls.filter((url) => url.id !== id));
      if (selectedUrl === urls.find((url) => url.id === id)?.url) {
        setSelectedUrl(null);
      }
    } catch (error) {
      console.error("Erro ao deletar URL:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Lista de URLs</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center min-h-screen -mt-36">
              <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
            </div>
          ) : urls.length > 0 ? (
            <ul className="space-y-4">
              {urls.map((url) => (
                <li key={url.id} className="flex justify-between items-center">
                  <Button
                    onClick={() => setSelectedUrl(url.url)}
                    className="text-blue-600 underline"
                  >
                    {url.url}
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex items-center"
                    onClick={() => handleDelete(url.id)}
                  >
                    <Trash2 className="h-5 w-5 mr-2" />
                    Deletar
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Nenhuma URL salva.</p>
          )}

          {selectedUrl && (
            <div className="mt-6">
              <YoutubePlayer url={selectedUrl} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UrlList;
