import { useState, useEffect, useCallback } from "react";
import { ServerData, DEFAULT_SERVERS, ServerStatus } from "../data/servers";

const STORAGE_KEY = "playcrows_servers_v1";

function loadServers(): ServerData[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SERVERS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    return DEFAULT_SERVERS;
  } catch {
    return DEFAULT_SERVERS;
  }
}

export function useServers() {
  const [servers, setServers] = useState<ServerData[]>(loadServers);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(servers));
  }, [servers]);

  const addServer = useCallback((server: Omit<ServerData, "id">) => {
    const id = server.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now();
    setServers(prev => [...prev, { ...server, id }]);
  }, []);

  const updateServer = useCallback((id: string, updates: Partial<ServerData>) => {
    setServers(prev => prev.map(s => (s.id === id ? { ...s, ...updates } : s)));
  }, []);

  const deleteServer = useCallback((id: string) => {
    setServers(prev => prev.filter(s => s.id !== id));
  }, []);

  const setStatus = useCallback((id: string, status: ServerStatus) => {
    setServers(prev => prev.map(s => (s.id === id ? { ...s, status } : s)));
  }, []);

  const resetToDefaults = useCallback(() => {
    setServers(DEFAULT_SERVERS);
  }, []);

  return { servers, addServer, updateServer, deleteServer, setStatus, resetToDefaults };
}