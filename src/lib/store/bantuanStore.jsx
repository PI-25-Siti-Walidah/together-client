import { create } from "zustand";
import axios from "axios";

export const useBantuanStore = create((set) => ({
  bantuan: [],
  loading: false,
  error: null,

  fetchBantuan: async () => {
    set({ loading: true, error: null });
    try {
  // ambil semua data bantuan
      const bantuanRes = await axios.get("https://together-server-production.up.railway.app/bantuan");
      // ambil semua data mitra
      const mitraRes = await axios.get("https://together-server-production.up.railway.app/mitra");

      const bantuanData = bantuanRes.data?.data || [];
      const mitraData = mitraRes.data?.data || [];

      // gabungkan data berdasarkan ID mitra
      const merged = bantuanData.map((b) => {
        const mitra = mitraData.find((m) => m._id === b.mitra_id?._id);
        return {
          ...b,
          mitra_id: {
            ...b.mitra_id,
            logo: mitra?.logo || null,
          },
        };
      });

      set({ bantuan: merged });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));
