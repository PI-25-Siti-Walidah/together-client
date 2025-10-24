"use client";
import { BotMessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavbarDekstop() {
const router = useRouter();

const handleInfo = () => {
  router.push('/info')
}

  return (
    <section className="sticky top-0 z-100">
      <div className="navbar shadow-sm px-12 py-5 bg-[#FFF9F7]">
        <div className="navbar-start gap-6">
          <img
            src="/beranda/logo.png"
            alt="Logo-together"
            className="w-14 h-14"
          />
          <a className="text-2xl font-semibold">
            <span className="text-[#313131]">To</span>
            <span className="text-[#6D123F]">Get</span>
            <span className="text-[#313131]">Her</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex gap-3">
          <button className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#FCC0C5] hover:border-[#FCC0C5] hover:text-white">
            Beranda
          </button>
          <button 
          onClick={handleInfo}
          className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#FCC0C5] hover:border-[#FCC0C5] hover:text-white">
            Bantuan
          </button>
          <button className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#FCC0C5] hover:border-[#FCC0C5] hover:text-white">
            Testimoni
          </button>
          <button className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#FCC0C5] hover:border-[#FCC0C5] hover:text-white">
            Aktivitas
          </button>
          {/* <div className=''>
            <button className="btn btn-circle flex flex-col items-center gap-0.5">
              <BotMessageSquare className="size-[1.1em] text-[#6D123F]" />
            <span className='text-[#6D123F] font-medium text-[8px]'>Her Ai</span>
            </button>
          </div> */}
          <button className="btn border-none rounded-sm bg-pink-200 hover:bg-pink-500 hover:text-white">
            <BotMessageSquare />
            Her Ai
          </button>
        </div>
      </div>
    </section>
  );
}
