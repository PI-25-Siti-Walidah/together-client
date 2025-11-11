"use client";
import { useRouter } from "next/navigation";

export default function Riwayat() {
  const riwayat = [
    {
      judul: "Bantuan Modal Usaha Mikro",
      donatur: "Kementerian Koperasi",
      status: "Diproses",
    },
    {
      judul: "Beasiswa Anak Sekolah",
      donatur: "Yayasan Pendidikan Kita",
      status: "Ditolak",
    },
    {
      judul: "Pelatihan keterampilan digital",
      donatur: "Ayo Digital",
      status: "Diterima",
    },
    {
      judul: "Santunan Ekonomi Perempuan Hebat",
      donatur: "Yayasan Perempuan Maju",
      status: "Selesai",
    },
  ];

  const badgeStatus = {
    Selesai: "badge-info",
    Diterima: "badge-success",
    Diproses: "badge-warning",
    Ditolak: "badge-error",
  };

  const router = useRouter();
  const handleRiwayat = () => router.push("/riwayat");

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm w-full">
      <h1 className="mb-6 font-bold text-[#6D123F] text-lg md:text-xl text-center">
        Riwayat Bantuan
      </h1>

      <div className="divide-y divide-gray-200">
        {riwayat.map((r, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3"
          >
            <div>
              <h2 className="font-semibold text-[#6D123F] text-base md:text-lg">
                {r.judul}
              </h2>
              <p className="text-sm text-gray-600">{r.donatur}</p>
            </div>
            <div
              className={`badge badge-soft ${
                badgeStatus[r.status] || "badge-warning"
              } px-4 py-2 mt-2 sm:mt-0 text-sm font-medium 
   
     dark:bg-pink-50
     transition-colors duration-300`}
            >
              {r.status}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleRiwayat}
          className="btn btn-ghost text-[16px] font-medium bg-[#6D123F] text-white rounded-lg hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 hover:scale-105 px-6 py-2"
        >
          Lihat Selengkapnya
        </button>
      </div>
    </section>
  );
}
