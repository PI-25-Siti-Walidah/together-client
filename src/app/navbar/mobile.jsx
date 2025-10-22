import { House, HandCoins, BotMessageSquare, Star, Activity } from "lucide-react"

export default function Mobile() {
  return (
    <div className="dock flex justify-around bg-[#6D123F] items-center py-2">
        <button className="flex flex-col items-center text-white hover:bg-pink-500">
            <House className="w-5 h-5" />
            <span className="dock-label text-xs mt-1">Beranda</span>
        </button>

        <button className="flex flex-col items-center text-white hover:bg-pink-500">
            <HandCoins className="w-5 h-5" />
            <span className="dock-label text-xs mt-1">Bantuan</span>
        </button>

        <button className="flex flex-col items-center text-[#6D123F] bg-pink-50 hover:bg-pink-500 hover:text-white">
            <BotMessageSquare className="w-5 h-5" />
            <span className="dock-label text-xs mt-1">Her AI</span>
        </button>

        <button className="flex flex-col items-center text-white hover:bg-pink-500">
            <Star className="w-5 h-5" />
            <span className="dock-label text-xs mt-1">Testimoni</span>
        </button>

        <button className="flex flex-col items-center text-white hover:bg-pink-500">
            <Activity className="w-5 h-5" />
            <span className="dock-label text-xs mt-1">Aktivitas</span>
        </button>

    </div>
  );
}
