"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  User,
  CircleUser,
  Phone,
  House,
  Lock,
  CheckCircle,
} from "lucide-react";
import { useAuthStore } from "../../../lib/store/useAuthStore";

export default function Register() {
  const router = useRouter();
  const { register, loading, error } = useAuthStore();
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    namaLengkap: "",
    username: "",
    noHp: "",
    alamat: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!formData.namaLengkap) e.namaLengkap = "Nama Lengkap harus diisi";
    if (!formData.username) e.username = "Username harus diisi";
    if (!formData.noHp) e.noHp = "Nomor Handphone harus diisi";
    if (!formData.alamat) e.alamat = "Alamat harus diisi";
    if (!formData.password) e.password = "Kata sandi harus diisi";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const result = await register(formData);
    if (result.success) setShowModal(true);
    else alert(result.message);
  };

  const handleCloseModal = () => {
    useAuthStore.getState().logout();
    setShowModal(false);
    router.push("/akun/login");
  };

  const handleLogin = () => router.push("/akun/login");

  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-pink-50 overflow-hidden">
      <div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="px-10 py-12 bg-[#6D123F] text-white flex flex-col items-center justify-center rounded-b-[75px] border-x-2 border-b-2 border-dotted border-pink-50 lg:w-1/2 lg:rounded-b-none lg:rounded-tr-[150px] lg:rounded-br-[150px]"
      >
        <div className="text-center">
          <h3 className="font-bold text-lg">
            Selamat datang kembali di ToGetHer
          </h3>
          <p className="text-base mt-1">
            Sudah punya <span className="underline">akun</span>?
          </p>
          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLogin}
            className="btn mt-4 text-[16px] font-bold bg-white text-[#6D123F] rounded-md border-none hover:bg-pink-600 hover:text-white transition-all"
          >
            Masuk
          </button>
        </div>
      </div>

      <div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col justify-center items-center flex-1 px-8 py-12"
      >
        <div className="w-full max-w-md bg-white shadow-xl p-8 rounded-2xl border border-pink-100">
          <h2 className="text-center font-bold text-[#6D123F] text-2xl mb-6">
            Daftar Akun
          </h2>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            {[
              {
                name: "namaLengkap",
                placeholder: "Nama Lengkap",
                icon: <User />,
              },
              {
                name: "username",
                placeholder: "Username",
                icon: <CircleUser />,
              },
              { name: "noHp", placeholder: "Nomor Handphone", icon: <Phone /> },
              { name: "alamat", placeholder: "Alamat", icon: <House /> },
              {
                name: "password",
                placeholder: "Kata Sandi",
                icon: <Lock />,
                type: "password",
              },
            ].map(({ name, placeholder, icon, type = "text" }) => (
              <div key={name}>
                <div
                  className={`flex items-center bg-white border rounded-lg p-2.5 transition-all duration-300 ${
                    errors[name]
                      ? "border-red-400"
                      : "border-gray-300 focus-within:border-pink-400"
                  }`}
                >
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400 text-gray-700"
                  />
                  <div className="text-gray-500">{icon}</div>
                </div>
                {errors[name] && (
                  <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="btn w-full mt-4 bg-[#6D123F] text-white font-semibold rounded-md border-none hover:bg-pink-700 transition-all duration-300 py-2"
            >
              {loading ? "Memproses..." : "Buat Akun"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>

      {/* Modal sukses */}
      {showModal && (
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center"
          >
            <CheckCircle className="mx-auto text-green-600 w-14 h-14 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Registrasi Berhasil!
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Akun Anda berhasil dibuat. Silakan login untuk melanjutkan.
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-[#6D123F] text-white rounded-md hover:bg-pink-700 border-none transition"
            >
              Lanjut ke Login
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
