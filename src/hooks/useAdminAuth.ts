import { useState, useEffect } from "react";

const AUTH_KEY = "playcrows_admin_auth";
const ADMIN_PASSWORD = "nxboss"; // ← change this to your own password

export function useAdminAuth() {
  const [isAuthed, setIsAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === "true");

  useEffect(() => {
    if (isAuthed) sessionStorage.setItem(AUTH_KEY, "true");
  }, [isAuthed]);

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthed(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthed(false);
  };

  return { isAuthed, login, logout };
}