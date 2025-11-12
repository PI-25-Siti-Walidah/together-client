"use client";
import { useState } from "react";
import { useAuthStore } from "../../../lib/store/useAuthStore";

const API_URL = "https://together-server-production.up.railway.app/user";

export default function Sandi() {
  const { user, token } = useAuthStore();
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!user?._id) return;
    if (!form.oldPassword || !form.newPassword || !form.confirmPassword) {
      setMessage("Semua kolom wajib diisi");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/${user._id}/password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("Kata sandi berhasil diperbarui");
        setForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
      } else {
        setMessage(result.message || "Gagal memperbarui kata sandi");
      }
    } catch (err) {
      setMessage("Terjadi kesalahan server");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full">
      <div className="card bg-[#F4F4FF] rounded-2xl shadow-md">
        <div className="card-body p-8 sm:p-10">
          <h2 className="card-title text-center text-xl sm:text-2xl font-bold text-[#6D123F] mb-6">
            Ubah Sandi
          </h2>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-gray-700">
                Kata Sandi Lama
              </label>
              <input
                type="password"
                name="oldPassword"
                value={form.oldPassword}
                onChange={handleChange}
                className="input input-bordered w-full bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-[#6D123F] focus:outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-gray-700">
                Kata Sandi Baru
              </label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                className="input input-bordered w-full bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-[#6D123F] focus:outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-gray-700">
                Konfirmasi Kata Sandi Baru
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="input input-bordered w-full bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-[#6D123F] focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col items-end mt-8">
            {message && (
              <p className="text-sm text-[#6D123F] mb-2">{message}</p>
            )}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn bg-[#6D123F] text-white font-semibold px-8 py-3 rounded-lg border-none hover:bg-pink-600 transition-all duration-300 hover:scale-105"
            >
              {loading ? "Memproses..." : "Ubah Sandi"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
