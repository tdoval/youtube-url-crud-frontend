import { useState, useCallback } from "react";

export const usePlayer = () => {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  const changeUrl = useCallback((url: string) => {
    setCurrentUrl(url);
  }, []);

  return {
    currentUrl,
    changeUrl,
  };
};
