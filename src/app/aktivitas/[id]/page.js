"use client";

import Greeting from "./component/greeting"
import Benefit from "./component/benefit"
import Rangkuman from "./component/rangkuman"
import Riwayat from "./component/riwayat"
import Testimoni from "./component/testimoni"

export default function Aktivitas(){
    return(
        <section className=" flex flex-col items-center m-6 lg:my-12">
            <Greeting />
            <Benefit />
            <Rangkuman />
            <Riwayat />
            <Testimoni />  
        </section>
    )
}