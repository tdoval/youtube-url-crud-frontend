import { API_BASE_URL, handleResponse } from "@/lib/apiConfig";

export const fetchUrls = async (token: string) => {
  console.log("Token usado no Fetch:", token);
  const response = await fetch(`${API_BASE_URL}/videos/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return handleResponse(response);
};

export const addUrl = async (url: string, token: string, name?: string) => {
  console.log("Token usado no addUrl:", token);
  const response = await fetch(`${API_BASE_URL}/videos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url, name }),
  });

  console.log("Resposta do addUrl:", response);

  if (!response.ok) {
    throw new Error(`Erro ao adicionar o vídeo: ${response.statusText}`);
  }

  return await response.json();
};

export const deleteUrl = async (token: string, id: string) => {
  const response = await fetch(`${API_BASE_URL}/videos/${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return handleResponse(response);
};

export const updateUrl = async (token: string, url: string, id: string) => {
  console.log("UrlTOBESEND: ", url);
  const response = await fetch(`${API_BASE_URL}/videos/${id}/update/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url }),
  });
  return handleResponse(response);
};

export const updateUrlName = async (
  token: string,
  name: string,
  id: string,
) => {
  const response = await fetch(`${API_BASE_URL}/videos/${id}/update/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });
  return handleResponse(response);
};
