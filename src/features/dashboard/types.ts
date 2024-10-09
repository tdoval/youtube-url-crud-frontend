export interface VideoUrl {
  id: string;
  url: string;
  name: string;
  added_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface UrlContextType {
  urls: VideoUrl[];
  currentUrl: VideoUrl | null;
  setCurrentUrl: (url: VideoUrl) => void;
  reloadUrls: () => void;
  addUrl: (url: string, name: string) => Promise<void>;
  deleteUrl: (urlId: string) => Promise<void>;
  updateUrl: (id: string, updatedUrl: string) => Promise<void>;
  updateUrlName: (id: string, updatedName: string) => Promise<void>;
}
