"use client";
import { useRouter } from "next/navigation";
import { User, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuthStore } from "../../../lib/store/useAuthStore";

export default function Login() {
  const router = useRouter();
  const { login, user, loading, error, checkAuth } = useAuthStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ username: false, password: false });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!username.trim()) e.username = "Username harus diisi";
    if (!password.trim()) e.password = "Kata sandi harus diisi";
    return e;
  };

  useEffect(() => {
    checkAuth();
    if (user) router.push("/");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ username: true, password: true });
    if (Object.keys(newErrors).length > 0) return;

    const result = await login(username, password);
    if (result.success) router.push("/");
  };

  const handleRegister = () => router.push("/akun/register");

  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-[#6D123F] overflow-hidden">
      {/* Kiri */}
      <div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="px-10 py-12 bg-pink-50 flex flex-col items-center justify-center rounded-b-[75px] border-x-2 border-b-2 border-dotted border-[#6D123F] lg:w-1/2 lg:rounded-b-none lg:rounded-tr-[150px] lg:rounded-br-[150px]"
      >
        <div className="text-center">
          <h2 className="text-lg font-bold text-[#6D123F]">
            Hai, Selamat Datang di ToGetHer
          </h2>
          <p className="text-sm text-gray-700 mt-1">
            Belum punya <span className="underline">akun</span>?
          </p>
          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRegister}
            className="btn mt-4 text-[16px] text-pink-50 font-bold bg-[#6D123F] rounded-md border-none hover:bg-pink-600 shadow-md transition-all"
          >
            Buat Akun
          </button>
        </div>
      </div>

      {/* Kanan */}
      <div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center flex-1 bg-[#6D123F] px-8 py-12"
      >
        <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <h2 className="text-center font-bold text-pink-50 text-2xl mb-6">
            Masuk Akun
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Username */}
            <div>
              <div
                className={`flex items-center bg-gray-50 border rounded-lg p-2.5 transition-all duration-300 ${
                  touched.username && errors.username
                    ? "border-red-400"
                    : "border-gray-300 focus-within:border-pink-400"
                }`}
              >
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, username: true }))}
                  className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400 text-gray-700"
                />
                <User className="text-gray-500" />
              </div>
              {touched.username && errors.username && (
                <p className="text-sm text-pink-50 mt-1">{errors.username}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <div
                className={`flex items-center bg-gray-50 border rounded-lg p-2.5 transition-all duration-300 ${
                  touched.password && errors.password
                    ? "border-red-400"
                    : "border-gray-300 focus-within:border-pink-400"
                }`}
              >
                <input
                  type="password"
                  placeholder="Kata Sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                  className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400 text-gray-700"
                />
                <Lock className="text-gray-500" />
              </div>
              {touched.password && errors.password && (
                <p className="text-sm text-pink-50 mt-1">{errors.password}</p>
              )}
            </div>

            <button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="btn w-full mt-4 bg-pink-50 text-[#6D123F] font-bold py-2 rounded-md hover:bg-pink-600 hover:text-white border-none transition-all duration-300"
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>

            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
