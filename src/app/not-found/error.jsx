'use client'
import { useRouter } from "next/navigation"

export default function NotFound(){
    const router = useRouter();

    const handleBeranda = () => {
    router.push("/");
};

    return(
        <section className="mt-4 flex flex-col items-center justify-center">
            <img 
            src="/not-found.png" 
            alt="Tidak ditemukan/tidak ada" 
            className="w-96 h-96"/>
            <p className="mb-5 font-bold text-[#6D123F]">Halaman tidak ditemukan</p>
            <button 
            onClick={handleBeranda}
            className="btn w-fit mr-5 text-[16px] font-medium bg-[#6D123F] text-white rounded-sm border-none hover:bg-pink-600">
              Beranda
            </button>
        </section>
    )
}