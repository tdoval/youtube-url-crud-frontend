"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const UrlList = () => {
  const [urls, setUrls] = useState([
    { id: 1, url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { id: 2, url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ" },
    { id: 3, url: "https://www.youtube.com/watch?v=9bZkp7q19f0" },
  ]);

  const handleDelete = (id: number) => {
    setUrls((prevUrls) => prevUrls.filter((url) => url.id !== id));
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Lista de URLs</CardTitle>
        </CardHeader>
        <CardContent>
          {urls.length > 0 ? (
            <ul className="space-y-4">
              {urls.map((url) => (
                <li key={url.id} className="flex justify-between items-center">
                  <a
                    href={url.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {url.url}
                  </a>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default UrlList;
