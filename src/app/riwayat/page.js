'use client'
import { useState } from "react";
import Filter from "./component/filter";
import ListRiwayat from "./component/riwayat-bantuan";
import Navbar from "../navbar/navbar";


export default function Riwayat() {
  const [filterStatus, setFilterStatus] = useState("Semua");

  return (
    <div className=" bg-[#FFF9F7] flex flex-col items-center mx-6 my-30">
      <h1 className="text-3xl font-bold lg:max-w-5xl mb-4 text-balance text-[#6D123F]">Riwayat Bantuan</h1>
      <p className="text-center text-gray-500 mb-4">Lihat detail proses pengajuan anda disini</p>
      < Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      < ListRiwayat filterStatus={filterStatus} />
      <Navbar />
    </div>
  )
}