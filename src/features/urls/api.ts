import {
  API_BASE_URL,
  defaultFetchOptions,
  handleResponse,
} from "@/lib/apiConfig";

export const fetchUrls = async () => {
  const response = await fetch(`${API_BASE_URL}/videos/`, defaultFetchOptions);
  return handleResponse(response);
};

export const addUrl = async (url: string, token: string) => {
  const response = await fetch(`${API_BASE_URL}/videos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error(`Erro ao adicionar o vídeo: ${response.statusText}`);
  }

  return await response.json();
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
