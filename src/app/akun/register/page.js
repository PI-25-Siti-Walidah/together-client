"use client";
import { useRouter } from "next/navigation";
import { User, CircleUser, Phone, House, Lock } from "lucide-react";

export default function Register() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/akun/login");
  };

  return (
    <section className="w-full min-h-screen bg-pink-50">
      <div className="lg:flex lg:flex-row min-h-screen">
        <div
          className="
            px-10 py-12 bg-[#6D123F] text-white 
            flex flex-col items-center justify-center 
            rounded-b-[75px] border-x-2 border-b-2 border-dotted border-pink-50 
            lg:w-1/2 lg:rounded-b-none lg:rounded-tr-[150px] lg:rounded-br-[150px] lg:border-none
          "
        >
          <div className="text-center">
            <h3 className="font-bold text-lg">
              Selamat datang kembali di ToGetHer
            </h3>
            <p className="text-base">
              Sudah punya <span className="underline">akun</span>?
            </p>
            <button
              onClick={handleLogin}
              className="btn btn-ghost w-fit mt-4 text-[16px] font-bold bg-white text-[#6D123F] rounded-sm hover:bg-pink-600 hover:border-pink-600 hover:text-white"
            >
              Masuk
            </button>
          </div>
        </div>
        <div className="my-8 flex flex-col items-center justify-center lg:w-1/2 lg:my-0">
          <h2 className="text-center font-bold text-[#6D123F] text-xl">
            Daftar Akun
          </h2>
          <form className="flex flex-col items-center">
            <div className="my-4 flex flex-col gap-2">
              <div>
                <div className="w-sm flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:ring-blue-500 focus-within:border-blue-500 p-2.5 pe-3.5">
                  <input
                    type="text"
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400"
                    placeholder="Nama Lengkap"
                    required
                  />
                  <User className="text-gray-500" />
                </div>
              </div>
              <div>
                <div className="w-sm flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:ring-blue-500 focus-within:border-blue-500 p-2.5 pe-3.5">
                  <input
                    type="text"
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400"
                    placeholder="Username"
                    required
                  />
                  <CircleUser className="text-gray-500" />
                </div>
              </div>
              <div>
                <div className="w-sm flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:ring-blue-500 focus-within:border-blue-500 p-2.5 pe-3.5">
                  <input
                    type="text"
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400"
                    placeholder="Nomer Handphone"
                    required
                  />
                  <Phone className="text-gray-500" />
                </div>
              </div>
              <div>
                <div className="w-sm flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:ring-blue-500 focus-within:border-blue-500 p-2.5 pe-3.5">
                  <input
                    type="text"
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400"
                    placeholder="Alamat"
                    required
                  />
                  <House className="text-gray-500" />
                </div>
              </div>
              <div>
                <div className="w-sm flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:ring-blue-500 focus-within:border-blue-500 p-2.5 pe-3.5">
                  <input
                    type="password" /* Ganti type ke password */
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400"
                    placeholder="Kata Sandi"
                    required
                  />
                  <Lock className="text-gray-500" />
                </div>
              </div>
            </div>
            <button className="btn btn-ghost w-fit mt-4 text-[16px] font-medium bg-[#6D123F] text-white rounded-sm hover:bg-pink-600 hover:border-pink-600 hover:text-white">
              Buat Akun
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
