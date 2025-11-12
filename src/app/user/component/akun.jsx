"use client";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../../lib/store/useAuthStore";

const API_URL = "https://together-server-production.up.railway.app/user";

export default function Akun() {
  const { user, token, checkAuth } = useAuthStore();
  const [akunSaya, setAkunSaya] = useState({
    username: "",
    nama: "",
    no_telp: "",
    alamat: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (user) {
      setAkunSaya({
        username: user.username || "",
        nama: user.nama || "",
        no_telp: user.no_telp || "",
        alamat: user.alamat || "",
      });
    }
  }, [user]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?._id || !token) return;
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await res.json();
        if (res.ok && result.user) {
          setAkunSaya({
            username: result.user.username || "",
            nama: result.user.nama || "",
            no_telp: result.user.no_telp || "",
            alamat: result.user.alamat || "",
          });
        }
      } catch (err) {
        console.error("Gagal mengambil data user:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [user?._id, token]);

  const handleChange = (e) =>
    setAkunSaya((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSave = async () => {
    if (!user?._id) return;
    try {
      const res = await fetch(`${API_URL}/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(akunSaya),
      });
      const result = await res.json();
      alert(res.ok ? "Profil berhasil diperbarui" : result.message);
    } catch {
      alert("Terjadi kesalahan saat menyimpan data");
    }
  };

  return (
    <section className="w-full">
      <div className="card bg-[#F4F4FF] rounded-2xl shadow-md">
        <div className="card-body p-8 sm:p-10">
          <h2 className="card-title item-center text-xl sm:text-2xl font-bold text-[#6D123F] mb-6">
            Akun Saya
          </h2>

          {loading ? (
            <p className="text-center py-6 text-gray-500">Memuat data...</p>
          ) : (
            <div className="flex flex-col gap-5">
              {["username", "nama", "no_telp", "alamat"].map((field, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <label className="font-medium capitalize text-sm text-gray-700">
                    {field.replace("_", " ")}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={akunSaya[field]}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-[#6D123F] focus:outline-none transition-all"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-end mt-8">
            <button
              onClick={handleSave}
              className="btn bg-[#6D123F] text-white font-semibold px-8 py-3 rounded-lg border-none hover:bg-pink-600 transition-all duration-300 hover:scale-105"
            >
              Simpan Akun
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
