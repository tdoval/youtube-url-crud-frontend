const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Erro desconhecido");
  }
  return response.json();
};

const defaultFetchOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchUrls = async () => {
  const response = await fetch(
    `${API_BASE_URL}/api/videos/`,
    defaultFetchOptions,
  );
  return handleResponse(response);
};

export const addUrl = async (url: string) => {
  const response = await fetch(`${API_BASE_URL}/api/videos/`, {
    ...defaultFetchOptions,
    method: "POST",
    body: JSON.stringify({ url }),
  });
  return handleResponse(response);
};

export const deleteUrl = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/api/videos/${id}/`, {
    ...defaultFetchOptions,
    method: "DELETE",
  });
  return handleResponse(response);
};
