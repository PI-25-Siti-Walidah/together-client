"use client";

import Header from "./component/header"
import Spesifikasi from "./component/spesifikasi"
import Deskripsi from "./component/deskripsi"
import Daftar from "./component/daftar"
import Testi from "./component/testi"

export default function Info(){
    return(
        <section className=" flex flex-col items-center m-6 lg:my-12">
            <Header />
            <Spesifikasi />
            <div className="lg:flex lg:gap-3">
                <Deskripsi />
                <div>
                    <Daftar />
                    <Testi />  
                </div>
            </div>
        </section>
    )
}