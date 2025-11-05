"use client";
import { BotMessageSquare, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavbarDekstop() {
  const router = useRouter();

  const handleBeranda = () => {
    router.push("/");
  };

  const handleInfo = () => {
    router.push("/info");
  };

  const handleCerita = () => {
    router.push("/cerita");
  };

  const handleAktivitas = () => {
    router.push("/aktivitas/[id]");
  };
  const handleUserAkun = () => {
    router.push("/user/[id]");
  };

  const handleHerAi = () => {
    router.push("/her-ai");
  };

  return (
    <section className="sticky top-0 z-100">
      <div className="navbar shadow-sm px-12 py-5 bg-[#FFF9F7]">
        <div className="navbar-start gap-3">
          <img
            src="/beranda/logo.png"
            alt="Logo-together"
            className="w-11 h-11"
          />
          <a className="text-2xl font-semibold">
            <span className="text-[#313131]">To</span>
            <span className="text-[#6D123F]">Get</span>
            <span className="text-[#313131]">Her</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex gap-3">
          <button
            onClick={handleBeranda}
            className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white"
          >
            Beranda
          </button>
          <button
            onClick={handleInfo}
            className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white"
          >
            Bantuan
          </button>
          <button
            onClick={handleCerita}
            className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white"
          >
            Cerita
          </button>
          <button
            onClick={handleAktivitas}
            className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white"
          >
            Aktivitas
          </button>
          <button
            onClick={handleHerAi}
            className="btn border-none rounded-sm bg-pink-200 hover:bg-pink-500 hover:text-white"
          >
            <BotMessageSquare />
            Her Ai
          </button>
          <button
            onClick={handleUserAkun}
            className="btn btn-circle border-pink-200 bg-pink-200 hover:bg-pink-500"
          >
            <User />
          </button>
        </div>
      </div>
    </section>
  );
}
