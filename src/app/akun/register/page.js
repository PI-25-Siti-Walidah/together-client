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

  const handleLogin = () => router.push("/akun/login");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.namaLengkap)
      tempErrors.namaLengkap = "Nama Lengkap harus diisi.";
    if (!formData.username) tempErrors.username = "Username harus diisi.";
    if (!formData.noHp) tempErrors.noHp = "Nomor Handphone harus diisi.";
    if (!formData.alamat) tempErrors.alamat = "Alamat harus diisi.";
    if (!formData.password) tempErrors.password = "Kata Sandi harus diisi.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const result = await register(formData);
    if (result.success) {
      setShowModal(true);
    } else {
      alert(result.message);
    }
  };

  const handleCloseModal = () => {
    useAuthStore.getState().logout();
    setShowModal(false);
    router.push("/akun/login");
  };

  return (
    <section className="w-full min-h-screen bg-pink-50">
      <div className="lg:flex lg:flex-row min-h-screen">
        <div className="px-10 py-12 bg-[#6D123F] text-white flex flex-col items-center justify-center rounded-b-[75px] border-x-2 border-b-2 border-dotted border-pink-50 lg:w-1/2 lg:rounded-b-none lg:rounded-tr-[150px] lg:rounded-br-[150px] lg:border-t-2 lg:border-r-2 lg:border-b-2 lg:border-l-0">
          <div className="text-center">
            <h3 className="font-bold text-lg">
              Selamat datang kembali di ToGetHer
            </h3>
            <p className="text-base">
              Sudah punya <span className="underline">akun</span>?
            </p>
            <button
              onClick={handleLogin}
              className="btn btn-ghost w-fit mt-4 text-[16px] font-bold bg-white text-[#6D123F] rounded-sm hover:bg-pink-600 hover:text-white"
            >
              Masuk
            </button>
          </div>
        </div>

        <div className="my-8 flex flex-col items-center justify-center lg:w-1/2 lg:my-0">
          <h2 className="text-center font-bold text-[#6D123F] text-xl">
            Daftar Akun
          </h2>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col items-center"
          >
            <div className="my-4 flex flex-col gap-2">
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
                {
                  name: "noHp",
                  placeholder: "Nomor Handphone",
                  icon: <Phone />,
                },
                { name: "alamat", placeholder: "Alamat", icon: <House /> },
                {
                  name: "password",
                  placeholder: "Kata Sandi",
                  icon: <Lock />,
                  type: "password",
                },
              ].map(({ name, placeholder, icon, type = "text" }) => (
                <div key={name}>
                  <div className="w-sm flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400"
                    />
                    <div className="text-gray-500">{icon}</div>
                  </div>
                  {errors[name] && (
                    <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-ghost w-fit mt-4 text-[16px] font-medium bg-[#6D123F] text-white rounded-sm border-none hover:bg-pink-600"
            >
              {loading ? "Memproses..." : "Buat Akun"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center">
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
