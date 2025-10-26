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
        <section className=" flex flex-col items-center m-6 lg:my-12">
            <Greeting />
            <Benefit />
            <Rangkuman />
            <Riwayat />
            <Testimoni />  
            <button 
          onClick={handleAkun}
          className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#FCC0C5] hover:border-[#FCC0C5] hover:text-white">
            Akun
          </button>
        </section>
    )
}