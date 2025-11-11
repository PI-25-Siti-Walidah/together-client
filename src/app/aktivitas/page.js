"use client";

import Greeting from "./component/greeting";
import Benefit from "./component/benefit";
import Rangkuman from "./component/rangkuman";
import Riwayat from "./component/riwayat";
import Testimoni from "./component/testimoni";
import { useRouter } from "next/navigation";
import Navbar from "@/app/navbar/navbar";
import Footer from "@/app/footer/footer";

export default function Aktivitas() {
  const router = useRouter();

  const handleAkun = () => {
    router.push("/akun");
  };

  return (
    <section className="min-h-screen flex flex-col bg-[#FFF9F7]">
      <div className="flex flex-col items-center pt-30 mb-16 px-4 md:px-8 lg:px-16 flex-grow">
        <Greeting />
        <button
          onClick={handleAkun}
          className="btn btn-ghost mb-8 text-[16px] text-white rounded-lg bg-[#6D123F] hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 hover:scale-105"
        >
          Lihat profil
        </button>

        <div className="w-full max-w-6xl space-y-8">
          <Benefit />
          <Rangkuman />
          <Riwayat />
          <Testimoni />
        </div>
      </div>
      <Navbar />
      <Footer />
    </section>
  );
}
