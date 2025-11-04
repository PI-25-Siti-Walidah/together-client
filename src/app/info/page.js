"use client"
import Filter from "./filter"
import ListBantuan from "./list-bantuan"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Navbar from "../navbar/navbar"
import { useBantuanStore } from "@/lib/store/bantuanStore";

export default function Info(){
     const router = useRouter();

      const [filterKategori, setFilterKategori] = useState("Semua");

       // ambil data dari store
       const { fetchBantuan } = useBantuanStore();
       
       useEffect(() => {
        fetchBantuan();
    }, [fetchBantuan]);

        const handleDetail = () => {
        router.push('/detail/$[id]')}

    return(
        <div>
            <Navbar />
            <main className="px-4 pt-30 pb-16 max-w-2xl mx-auto">
                <div>
                    <div className="text-3xl font-bold lg:max-w-5xl mb-4 text-balance text-[#6D123F] text-center">Informasi Bantuan</div>
                    <p className="text-center text-gray-500 mb-4">
                        Temukan informasi bantuan yang sesuai dengan kebutuhan dan situasi Anda.
                    </p>
                </div>

                {/* Filter Kategori */}
                <Filter filterKategori={filterKategori} setFilterKategori={setFilterKategori} />

                {/* List Bantuan */}
                <ListBantuan filterKategori={filterKategori} onDetail={handleDetail} />
            </main>
        </div>
    )
}
