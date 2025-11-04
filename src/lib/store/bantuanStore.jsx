import { create } from "zustand";
import axios from "axios";

export const useBantuanStore = create((set) => ({
  bantuan: [],
  loading: false,
  error: null,

  fetchBantuan: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get("https://together-server-production.up.railway.app/bantuan");
      if (res.data && res.data.success) {
        set({ bantuan: res.data.data });
      } else {
        set({ error: "Gagal mengambil data bantuan" });
      }
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));
