"use client";
import {
  House,
  HandCoins,
  BotMessageSquare,
  Star,
  Activity, User
} from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Mobile() {
  const router = useRouter();
  const currentPath = usePathname();

  const handleBeranda = () => {
    router.push("/");
  };

  const handleInfo = () => {
    router.push("/info");
  };
  const handleAktivitas = () => {
    router.push("/aktivitas/[id]");
  };

  const handleCerita = () => {
    router.push("/cerita");
  };

  const handleHerAi = () => {
    router.push("/her-ai");
  };
    const handleUserAkun = () => {
    router.push("/user/[id]");
  };

  return (
    <section>
    <div className="navbar shadow-sm px-6 py-5 bg-[#FFF9F7] fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start gap-3 mx-auto max-w-[420px]">
          <img
            src="/beranda/logo.png"
            alt="Logo-together"
            className="w-6 h-6"
          />
          <a className="text-xl font-semibold">
            <span className="text-[#313131]">To</span>
            <span className="text-[#6D123F]">Get</span>
            <span className="text-[#313131]">Her</span>
          </a>
        </div>
        <div className="navbar-end gap-3">
          <button
            onClick={handleUserAkun}
            // className="btn btn-circle border-pink-200 bg-pink-200 hover:bg-pink-500"
            className={`btn btn-circle border-pink-200 bg-pink-200 hover:bg-pink-500
              ${
                currentPath.startsWith("/user")
                  ? "bg-pink-500"
                  : "text-black" 
              }
            `}
          >
            <User className="w-5 h-5" />
          </button>
        </div>
    </div>
    <div className="fixed bottom-0 left-0 right-0 z-50">
    <div className="dock flex justify-around bg-[#6D123F] items-center py-2">
      <button
        onClick={handleBeranda}
        // className="flex flex-col items-center text-white hover:bg-pink-500"
        className={`flex flex-col items-center text-white hover:bg-pink-500
              ${
                currentPath === "/"
                  ? "bg-pink-500"
                  : "text-white" 
              }
            `}
      >
        <House className="w-5 h-5" />
        <span className="dock-label text-xs mt-1">Beranda</span>
      </button>

      <button
        onClick={handleInfo}
        // className="flex flex-col items-center text-white hover:bg-pink-500"
        className={`flex flex-col items-center text-white hover:bg-pink-500
              ${
                currentPath.startsWith("/info")
                  ? "bg-pink-500"
                  : "text-white" 
              }
            `}
      >
        <HandCoins className="w-5 h-5" />
        <span className="dock-label text-xs mt-1">Bantuan</span>
      </button>

      <button
        onClick={handleHerAi}
        // className="flex flex-col items-center text-[#6D123F] bg-pink-50 hover:bg-pink-500 hover:text-white"
        className={`flex flex-col items-center  hover:bg-pink-500
              ${
                currentPath.startsWith("/her-ai")
                  ? "bg-pink-500 text-white"
                  : "text-[#6D123F] bg-pink-50" 
              }
            `}
      >
        <BotMessageSquare className="w-5 h-5" />
        <span className="dock-label text-xs mt-1">Her AI</span>
      </button>

      <button
        onClick={handleCerita}
        // className="flex flex-col items-center text-white hover:bg-pink-500"
        className={`flex flex-col items-center text-white hover:bg-pink-500
              ${
                currentPath.startsWith("/cerita")
                  ? "bg-pink-500"
                  : "text-white" 
              }
            `}
      >
        <Star className="w-5 h-5" />
        <span className="dock-label text-xs mt-1">Cerita</span>
      </button>

      <button
        onClick={handleAktivitas}
        // className="flex flex-col items-center text-white hover:bg-pink-500"
        className={`flex flex-col items-center text-white hover:bg-pink-500
              ${
                currentPath.startsWith("/aktivitas")
                  ? "bg-pink-500"
                  : "text-white" 
              }
            `}
      >
        <Activity className="w-5 h-5" />
        <span className="dock-label text-xs mt-1">Aktivitas</span>
      </button>
    </div>
    </div>
    </section>
  );
}
