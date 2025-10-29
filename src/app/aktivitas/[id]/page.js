"use client";

import Greeting from "./component/greeting"
import Benefit from "./component/benefit"
import Rangkuman from "./component/rangkuman"
import Riwayat from "./component/riwayat"
import Testimoni from "./component/testimoni"
import { useRouter } from "next/navigation";


export default function Aktivitas(){
      const router = useRouter();
      
            const handleAkun = () => {
                router.push('/akun')
            }
    return(
        <section className=" flex flex-col items-center pt-16 mx-6 my-12">
            <Greeting/>
            <button 
          onClick={handleAkun}
          className="btn btn-ghost mb-8 text-[16px] text-white rounded-sm bg-[#6D123F] hover:bg-[#FCC0C5] hover:border-[#FCC0C5] hover:text-white">
            Lihat profil
          </button>
            <Benefit />
            <Rangkuman />
            <Riwayat />
            <Testimoni />  
        </section>
    )
}