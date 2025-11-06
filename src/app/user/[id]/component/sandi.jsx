"use client";
import { useState } from "react";
import { useAuthStore } from "../../../../lib/store/useAuthStore";

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
    <section>
      <div className="card mt-4 bg-[#FFF9F7] card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title pl-5">Ubah Sandi</h2>
          <fieldset className="fieldset w-full p-6">
            <label className="label">Kata Sandi Lama</label>
            <input
              type="password"
              name="oldPassword"
              className="input w-full"
              value={form.oldPassword}
              onChange={handleChange}
            />

            <label className="label">Kata Sandi Baru</label>
            <input
              type="password"
              name="newPassword"
              className="input w-full"
              value={form.newPassword}
              onChange={handleChange}
            />

            <label className="label">Konfirmasi Kata Sandi Baru</label>
            <input
              type="password"
              name="confirmPassword"
              className="input w-full"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </fieldset>

          <div className="justify-end card-actions">
            {message && (
              <p className="text-sm text-[#6D123F] mb-2">{message}</p>
            )}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn w-fit mr-5 text-[16px] font-medium bg-[#6D123F] text-white rounded-sm border-none hover:bg-pink-600"
            >
              {loading ? "Memproses..." : "Ubah Sandi"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
