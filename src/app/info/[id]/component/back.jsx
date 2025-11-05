'use client'
import { useRouter } from "next/navigation"

export default function Back(){
const router = useRouter();

  const handleInfo = () => {
    router.push("/info");
  };

  return(
    <section className="lg:pl-[73px] py-2.5 lg:py-0">
        <button
        onClick={handleInfo}
        className="btn w-fit btn-md rounded-sm bg-[#6D123F] text-white text-sm border-none hover:bg-white hover:border-white hover:text-[#6D123F]">
            Kembali
        </button>
    </section>
)}