'use client';

import { useRouter } from "next/navigation"; 

export default function Tentang() {
const router = useRouter();

const handleTentangKami = () => {
    router.push('/about')
}

  return (
    <section className="w-full h-fit flex justify-center items-center py-12">
      <div className="card bg-base-100 w-96 lg:w-6xl shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="/beranda/logo.png"
            alt="Together-logo"
            className="rounded-xl w-16 h-16 object-contain"
          />
        </figure>
        <div className="card-body items-center text-center flex gap-6">
          <h2 className="card-title text-3xl">Tentang Kami</h2>
          <p className="text-balance">
            Kami hadir untuk membantu perempuan kepala rumah tangga yang ingin
            bangkit dan mandiri. Bersama mitra dan para donatur, kami
            menyalurkan bantuan agar setiap perempuan punya kesempatan memulai
            lagi.
          </p>
          <div className="card-actions">
            <button 
            onClick={handleTentangKami}
            className="btn rounded-sm bg-[#6D123F] text-white text-md border-none">
              Lihat Detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
