import { useEffect, useState } from "react";
import { User } from 'lucide-react'

export default function Greeting() {
    const [nama, setNama] = useState("Siti"); // dummy dulu

        useEffect(() => {

            setNama("Siti");
        }, []);

    return (
        <section>
            <div className="flex flex-col items-center justify-center text-center p-4">
            {/* Avatar bulat */}
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mb-2">
                <User className='w-10 h-10 text-[#6D123F]' />
            </div>

            {/* Teks sambutan */}
            <div className="text-md font-semibold text-[#6D123F] ">Hai, {nama}!</div>
            {/* <p className="text-sm font-semibold text-[#6D123F]">Lihat profil</p> */}

            </div>
            
        </section>
    );
}