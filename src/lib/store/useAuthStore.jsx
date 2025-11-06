import { create } from "zustand";

const API_URL = "https://together-server-production.up.railway.app/auth";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  register: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: data.namaLengkap,
          username: data.username,
          password: data.password,
          no_telp: data.noHp,
          alamat: data.alamat,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Registrasi gagal");

      set({ user: result.user, loading: false });
      return { success: true, message: result.message };
    } catch (err) {
      set({ error: err.message, loading: false });
      return { success: false, message: err.message };
    }
  },

  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Login gagal");

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      set({
        user: result.user,
        token: result.token,
        loading: false,
      });

      return { success: true, message: result.message };
    } catch (err) {
      set({ error: err.message, loading: false });
      return { success: false, message: err.message };
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },

  checkAuth: () => {
    try {
      const token = localStorage.getItem("token");
      const userData = localStorage.getItem("user");

      if (!token || !userData) {
        set({ user: null, token: null });
        return;
      }

      const user = JSON.parse(userData);
      set({ token, user });
    } catch (err) {
      console.error("Auth check failed:", err);
      set({ user: null, token: null });
    }
  },
}));
