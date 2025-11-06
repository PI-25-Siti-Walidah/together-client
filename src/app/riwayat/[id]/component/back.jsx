'use client'
import { useRouter } from "next/navigation"

export default function Back(){
const router = useRouter();

  const handleRiwayat = () => {
    router.push("/riwayat");
  };

  return(
    <section className="py-2.5 lg:pl-0">
        <button
        onClick={handleRiwayat}
        className="btn btn-md rounded-sm bg-[#6D123F] text-white text-sm border-none hover:bg-white hover:border-white hover:text-[#6D123F]">
            Kembali
        </button>
    </section>
)}