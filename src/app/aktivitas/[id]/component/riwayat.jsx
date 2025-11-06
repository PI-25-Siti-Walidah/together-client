'use client'
import { useRouter } from "next/navigation";

export default function Riyawat() {
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
    {
      judul: "Bantuan Modal Usaha Mikro",
      donatur: "Kementerian Koperasi",
      status: "Diproses",
    },
  ];

  const badgeStatus ={
    Selesai: "badge-info",
    Diterima: "badge-success",
    Diproses: "badge-warning",
    Ditolak: "badge-error",
  }

  const router = useRouter();

  const handleRiwayat = () => {
    router.push("/riwayat");
  };

  return (
    <section className="mt-8 p-10 card w-full bg-base-100 card-xs shadow-sm flex items-center">
      <h1 className="mb-8 font-bold text-[#6D123F] text-xl ">Riwayat Bantuan</h1>
      {riwayat.map((r, i) => (
        <div key={i} className="w-full flex justify-between mb-3 pb-1.5 border-b border-gray-200 mx-4">
          <div>
            <h2 className="font-semibold text-[#6D123F] text-lg">{r.judul}</h2>
            <p>{r.donatur}</p>
          </div>
          <div
            className={`badge badge-soft ${
              badgeStatus[r.status] || "badge-warning"
            } p-4 text-sm font-medium `}
          >
            {r.status}
          </div>
        </div>
      ))}
      <button onClick={handleRiwayat} className="btn btn-ghost w-fit my-8 text-[16px] font-medium bg-[#6D123F] text-white rounded-sm hover:bg-pink-600 hover:border-pink-600 hover:text-white">
              Lihat Selengkapnya
            </button>
    </section>
  );
}
