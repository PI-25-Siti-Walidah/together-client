"use client";
import { useState } from "react";
import Filter from "./component/filter";
import ListRiwayat from "./component/riwayat-bantuan";
import Navbar from "../navbar/navbar";

export default function Riwayat() {
  const [filterStatus, setFilterStatus] = useState("Semua");

  return (
    <div className="min-h-screen bg-[#FFF9F7] flex flex-col items-center px-8 sm:px-6 lg:px-12 pt-30 pb-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-[#6D123F]">
        Riwayat Bantuan
      </h1>
      <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
        Lihat detail proses pengajuan Anda di sini
      </p>

      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <ListRiwayat filterStatus={filterStatus} />

      <div className="mt-10 w-full">
        <Navbar />
      </div>
    </div>
  );
}
