import {
  API_BASE_URL,
  defaultFetchOptions,
  handleResponse,
} from "@/lib/apiConfig";

export const fetchUrls = async () => {
  const response = await fetch(`${API_BASE_URL}/videos/`, defaultFetchOptions);
  return handleResponse(response);
};

export const addUrl = async (url: string) => {
  const response = await fetch(`${API_BASE_URL}/videos/`, {
    ...defaultFetchOptions,
    method: "POST",
    body: JSON.stringify({ url }),
  });
  return handleResponse(response);
};

export const deleteUrl = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/videos/${id}/`, {
    ...defaultFetchOptions,
    method: "DELETE",
  });
  return handleResponse(response);
};

export const updateUrl = async (id: string, url: string) => {
  const response = await fetch(`${API_BASE_URL}/videos/${id}/update/`, {
    ...defaultFetchOptions,
    method: "PATCH",
    body: JSON.stringify({ url }),
  });
  return handleResponse(response);
};
