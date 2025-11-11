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
    if (result.success) {
      router.push("/");
    } else {
      alert(result.message);
    }
  };

  const handleBlur = (field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate());
  };

  const handleRegister = () => router.push("/akun/register");

  return (
    <section>
      <div className="w-full min-h-screen bg-[#6D123F]">
        <div className="lg:flex lg:flex-row min-h-screen">
          <div className="px-10 py-12 bg-pink-50 text-white flex flex-col items-center justify-center rounded-b-[75px] border-x-2 border-b-2 border-dotted border-[#6D123F] lg:w-1/2 lg:rounded-b-none lg:rounded-tr-[150px] lg:rounded-br-[150px] lg:border-t-2 lg:border-r-2 lg:border-b-2 lg:border-l-0">
            <div className="text-center">
              <h2 className="text-lg font-bold text-[#6D123F]">
                Hai, Selamat Datang di ToGetHer
              </h2>
              <p className="text-sm text-gray-700 mt-1">
                Belum punya <span className="underline">akun</span>?
              </p>
              <button
                onClick={handleRegister}
                className="btn btn-ghost w-fit mt-4 text-[16px] text-pink-50 font-bold bg-[#6D123F] rounded-sm hover:bg-pink-600"
              >
                Buat Akun
              </button>
            </div>
          </div>

          <div className="my-8 flex flex-col items-center justify-center lg:w-1/2 lg:my-0">
            <h2 className="text-center font-bold text-pink-50 text-xl">
              Masuk Akun
            </h2>
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <div className="my-4 flex flex-col gap-2">
                <div className="w-sm flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() => handleBlur("username")}
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400"
                  />
                  <User className="text-gray-500" />
                </div>
                {touched.username && errors.username && (
                  <p className="text-sm text-pink-50 mt-1 mb-2">
                    {errors.username}
                  </p>
                )}

                <div className="w-sm flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  <input
                    type="password"
                    placeholder="Kata Sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")}
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400"
                  />
                  <Lock className="text-gray-500" />
                </div>
                {touched.password && errors.password && (
                  <p className="text-sm text-pink-50 mt-1 mb-2">
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-ghost w-full bg-pink-50 text-[#6D123F] font-bold py-2 rounded-md hover:bg-pink-600 border-none hover:text-white transition"
              >
                {loading ? "Memproses..." : "Masuk"}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
