"use client";
import { BotMessageSquare, User } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "../../lib/store/useAuthStore";

export default function NavbarDekstop() {
  const router = useRouter();
  const currentPath = usePathname();
  const { user, checkAuth, logout } = useAuthStore();

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    router.push("/aktivitas");
  };
  const handleUserAkun = () => {
    router.push("/user");
  };

  const handleHerAi = () => {
    router.push("/her-ai");
  };

  const handleLogin = () => {
    router.push("/akun/login");
  };

  const handleRegister = () => {
    router.push("/akun/register");
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
            // className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white"
            className={`btn btn-ghost text-[16px] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white
              ${
                currentPath === "/"
                  ? "bg-[#6D123F] text-white border-none rounded-md"
                  : "text-[#6D123F]"
              }
            `}
          >
            Beranda
          </button>
          <button
            onClick={handleInfo}
            // className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white
            className={`btn btn-ghost text-[16px] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white
              ${
                currentPath.startsWith("/info")
                  ? "bg-[#6D123F] text-white border-none rounded-md"
                  : "text-[#6D123F]"
              }
            `}
          >
            Bantuan
          </button>
          <button
            onClick={handleCerita}
            // className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white"
            className={`btn btn-ghost text-[16px] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white
              ${
                currentPath.startsWith("/cerita")
                  ? "bg-[#6D123F] text-white border-none rounded-md"
                  : "text-[#6D123F]"
              }
            `}
          >
            Cerita
          </button>
          <button
            onClick={handleAktivitas}
            // className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white"
            className={`btn btn-ghost text-[16px] hover:bg-[#6D123F] hover:rounded-md hover:border-[#6D123F] hover:text-white
              ${
                currentPath.startsWith("/aktivitas")
                  ? "bg-[#6D123F] text-white border-none rounded-md"
                  : "text-[#6D123F]"
              }
            `}
          >
            Aktivitas
          </button>
          <button
            onClick={handleHerAi}
            // className="btn border-none rounded-sm bg-pink-200 hover:bg-pink-500 hover:text-white"
            className={`btn border-none rounded-sm hover:bg-pink-500 hover:text-white
              ${
                currentPath.startsWith("/her-ai")
                  ? "bg-[#6D123F] text-white border-none"
                  : "border-pink-200 bg-pink-200"
              }
            `}
          >
            <BotMessageSquare />
            Her Ai
          </button>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => {
                if (user) {
                  handleUserAkun();
                } else {
                  setShowMenu(!showMenu);
                }
              }}
              className={`btn btn-circle hover:bg-pink-500 transition ${
                currentPath.startsWith("/user")
                  ? "bg-[#6D123F] text-white"
                  : "border-pink-200 bg-pink-200"
              }`}
            >
              <User />
            </button>

            {!user && showMenu && (
              <div className="absolute right-0 mt-3 bg-white border shadow-md rounded-lg w-40 py-2 z-50">
                <button
                  onClick={handleLogin}
                  className="block w-full text-left px-4 py-2 text-sm text-[#6D123F] hover:bg-pink-50"
                >
                  Login
                </button>
                <button
                  onClick={handleRegister}
                  className="block w-full text-left px-4 py-2 text-sm text-[#6D123F] hover:bg-pink-50"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
