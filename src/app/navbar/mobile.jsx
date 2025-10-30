'use client'
import { House, HandCoins, BotMessageSquare, Star, Activity } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Mobile() {
    const router = useRouter();
    
    const handleBeranda = () => {
    router.push("/");
};

    const handleInfo = () => {
    router.push('/info')
}
    const handleAktivitas = () => {
    router.push('/aktivitas/[id]')
}

  return (
    <div className="dock flex justify-around bg-[#6D123F] items-center py-2">
        <button onClick={handleBeranda} className="flex flex-col items-center text-white hover:bg-pink-500">
            <House className="w-5 h-5" />
            <span className="dock-label text-xs mt-1">Beranda</span>
        </button>

        <button onClick={handleInfo} className="flex flex-col items-center text-white hover:bg-pink-500">
            <HandCoins className="w-5 h-5" />
            <span className="dock-label text-xs mt-1">Bantuan</span>
        </button>

        <button className="flex flex-col items-center text-[#6D123F] bg-pink-50 hover:bg-pink-500 hover:text-white">
            <BotMessageSquare className="w-5 h-5" />
            <span className="dock-label text-xs mt-1">Her AI</span>
        </button>

        <button onClick={handleCerita} className="flex flex-col items-center text-white hover:bg-pink-500">
            <Star className="w-5 h-5" />
            <span className="dock-label text-xs mt-1">Cerita</span>
        </button>

        <button onClick={handleAktivitas} className="flex flex-col items-center text-white hover:bg-pink-500">
            <Activity className="w-5 h-5" />
            <span className="dock-label text-xs mt-1">Aktivitas</span>
        </button>

    </div>
  );
}
