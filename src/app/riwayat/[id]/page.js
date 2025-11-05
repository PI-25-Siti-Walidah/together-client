'use client'
import Back from "./component/back";
import Bantuan from "./component/bantuan";
import Pengajuan from "./component/pengajuan";
import Button from "./component/button";
import Jawaban from "./component/jawaban";


export default function Driwayat() {
  return (
   <main className="min-h-screen bg-pink-50 flex flex-col gap-4 p-4 md:p-8 text-black">
    <Back />
    <Bantuan />
    <Pengajuan />
    <Jawaban />
    <Button />
   </main>
  )
}