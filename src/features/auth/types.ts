export type RegisterData = {
  username: string;
  email: string;
  password: string;
};

export type LoginData = {
  username: string;
  password: string;
};

export type AuthContextType = {
  user: string | null;
  token: string | null;
  login: (token: string, user: string) => void;
  logout: () => void;
};
