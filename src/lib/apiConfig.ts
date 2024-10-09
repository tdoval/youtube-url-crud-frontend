export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const defaultFetchOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Erro desconhecido");
  }

  if (response.status === 204) {
    return null;
  }
  return await response.json();
};
