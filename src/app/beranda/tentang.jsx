"use client";

import { useRouter } from "next/navigation";

export default function Tentang() {
  const router = useRouter();

  const handleTentangKami = () => {
    router.push("/about");
  };

  return (
    <section className="w-full bg-[#FFF9F7] py-16 flex justify-center items-center px-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-md flex flex-col items-center text-center gap-8 p-8 transition-all duration-300 hover:shadow-xl">
        <img
          src="/beranda/logo.png"
          alt="ToGetHer Logo"
          className="w-20 h-20 lg:w-28 lg:h-28 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
        />

        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-[#6D123F] mb-4">
            Tentang Kami
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base max-w-2xl">
            Kami hadir untuk membantu perempuan kepala rumah tangga yang ingin
            bangkit dan mandiri. Bersama mitra dan para donatur, kami
            menyalurkan bantuan agar setiap perempuan punya kesempatan memulai
            lagi.
          </p>
          <button
            onClick={handleTentangKami}
            className="mt-6 px-6 py-2 rounded-lg bg-[#6D123F] hover:bg-pink-600 text-white text-sm sm:text-base font-medium cur shadow transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </section>
  );
}
