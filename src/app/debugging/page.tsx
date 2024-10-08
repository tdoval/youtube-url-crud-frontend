"use client";
import { useAuth } from "@/features/auth/hooks/useAuth";

const DebugginPage = () => {
  const { user, token, logout } = useAuth();

  return (
    <div>
      <p>User: {user ? user : "No user"}</p>
      <p>Token: {token ? token : "No token"}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DebugginPage;
