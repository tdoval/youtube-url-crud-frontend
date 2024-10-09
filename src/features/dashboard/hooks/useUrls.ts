import { useContext } from "react";
import { UrlContext } from "@/features/dashboard/context/UrlsContext";

export const useUrls = () => {
  const context = useContext(UrlContext);
  if (!context) {
    throw new Error("useUrls deve ser usado dentro de um UrlProvider");
  }
  return context;
};
