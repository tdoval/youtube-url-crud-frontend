"use client";

import { createContext, ReactNode, useState, useEffect } from "react";
import {
  fetchUrls,
  addUrl as apiAddUrl,
  deleteUrl as apiDeleteUrl,
  updateUrl as apiUpdateUrl,
  updateUrlName as apiUpdateUrlName,
} from "@/features/dashboard/api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { UrlContextType, VideoUrl } from "@/features/dashboard/types";

const ensureAuthenticated = (token: string | null) => {
  if (!token) {
    throw new Error("Usuário não autenticado");
  }
};

export const UrlContext = createContext<UrlContextType | undefined>(undefined);

export const UrlProvider = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();
  const [urls, setUrls] = useState<VideoUrl[]>([]);
  const [currentUrl, setCurrentUrl] = useState<VideoUrl | null>(null);

  const loadUrls = async () => {
    ensureAuthenticated(token);
    try {
      const fetchedUrls = await fetchUrls(token!);
      setUrls(fetchedUrls);
      if (fetchedUrls.length > 0) {
        setCurrentUrl(fetchedUrls[0]);
      }
    } catch (err) {
      console.error("Erro ao carregar as URLs:", err);
    }
  };

  useEffect(() => {
    if (token) {
      loadUrls();
    }
  }, [token]);

  const handleUrlOperation = async (
    operation: () => Promise<void>,
    successCallback?: () => void,
  ) => {
    ensureAuthenticated(token);
    try {
      await operation();
      await loadUrls();
      if (successCallback) successCallback();
    } catch (error) {
      console.error("Erro ao processar a URL:", error);
      throw error;
    }
  };

  const addUrl = (url: string, name: string) => {
    return handleUrlOperation(() => apiAddUrl(url, token!, name));
  };

  const deleteUrl = (urlId: string) => {
    return handleUrlOperation(() => apiDeleteUrl(token!, urlId));
  };

  const updateUrl = (id: string, updatedUrl: string) => {
    return handleUrlOperation(() => apiUpdateUrl(token!, updatedUrl, id));
  };

  const updateUrlName = (id: string, updatedUrlName: string) => {
    return handleUrlOperation(() =>
      apiUpdateUrlName(token!, updatedUrlName, id),
    );
  };

  return (
    <UrlContext.Provider
      value={{
        urls,
        currentUrl,
        setCurrentUrl,
        reloadUrls: loadUrls,
        addUrl,
        deleteUrl,
        updateUrl,
        updateUrlName,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};
