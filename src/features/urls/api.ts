import { API_BASE_URL, handleResponse } from "@/lib/apiConfig";

export const fetchUrls = async (token: string) => {
  const response = await fetch(`${API_BASE_URL}/videos/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

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

export const deleteUrl = async (token: string) => {
  const response = await fetch(`${API_BASE_URL}/videos/${token}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return handleResponse(response);
};

export const updateUrl = async (token: string, url: string) => {
  const response = await fetch(`${API_BASE_URL}/videos/${token}/update/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url }),
  });
  return handleResponse(response);
};
