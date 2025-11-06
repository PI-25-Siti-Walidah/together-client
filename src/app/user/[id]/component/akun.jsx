"use client";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../../../lib/store/useAuthStore";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAkunSaya((prev) => ({ ...prev, [name]: value }));
  };

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
      if (res.ok) {
        alert("Profil berhasil diperbarui");
      } else {
        alert(result.message || "Gagal memperbarui profil");
      }
    } catch (err) {
      alert("Terjadi kesalahan saat menyimpan data");
      console.error(err);
    }
  };

  return (
    <section>
      <div className="card bg-[#FFF9F7] card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title pl-5">Akun Saya</h2>
          {loading ? (
            <p className="text-center py-4">Memuat data...</p>
          ) : (
            <fieldset className="fieldset w-full p-6">
              <label className="label">Username</label>
              <input
                type="text"
                name="username"
                className="input w-full"
                value={akunSaya.username}
                onChange={handleChange}
              />

              <label className="label">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                className="input w-full"
                value={akunSaya.nama}
                onChange={handleChange}
              />

              <label className="label">Nomor WhatsApp</label>
              <input
                type="text"
                name="no_telp"
                className="input w-full"
                value={akunSaya.no_telp}
                onChange={handleChange}
              />

              <label className="label">Alamat</label>
              <input
                type="text"
                name="alamat"
                className="input w-full"
                value={akunSaya.alamat}
                onChange={handleChange}
              />
            </fieldset>
          )}
          <div className="justify-end card-actions">
            <button
              onClick={handleSave}
              className="btn w-fit mr-5 text-[16px] font-medium bg-[#6D123F] text-white rounded-sm border-none hover:bg-pink-600"
            >
              Simpan Akun
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
