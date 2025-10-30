'use client'
import { HandHeart, CheckCircle, Hourglass,  Archive, CircleX } from "lucide-react";

export default function ListRiwayat({filterStatus}) {
  const riwayatBantuan = [
    {
      id: 1,
      judul: "Bantuan Modal Usaha Mikro",
      instansi: "Kementerian Koperasi",
      tanggalStatus: "1 Nov 2025",
      kategori: "Modal Usaha",
      status: "Selesai",
    },
    {
      id: 2,
      judul: "Beasiswa Anak Sekolah",
      instansi: "Yayasan Pendidikan Kita",
      tanggalStatus: "15 Nov 2025",
      kategori: "Pendidikan Anak",
      status: "Ditinjau",
    },
    {
      id: 3,
      judul: "Pelatihan keterampilan digital",
      instansi: "Ayo Digital",
      tanggalStatus: "9 Nov 2025",
      kategori: "Pelatihan",
      status: "Diterima",
    },
    {
      id: 4,
      judul: "Santunan Ekonomi Perempuan Hebat",
      instansi: "Yayasan Perempuan Maju",
      tanggalStatus: "31 Okt 2025",
      kategori: "Ekonomi",
      status: "Ditolak",
    },
  ];

  const badgeStatus ={
    Selesai: "badge-info",
    Diterima: "badge-success",
    Ditinjau: "badge-warning",
    Ditolak: "badge-error",
}
const badgeStatusIcon ={
    Selesai: Archive,
    Diterima: CheckCircle,
    Ditinjau: Hourglass,
    Ditolak: CircleX,
}
  const filterRiwayat = riwayatBantuan.filter((list) => {
      if (filterStatus === "Semua") {
        return true;
      }
      return list.status === filterStatus;
});

  return (
    <section className="w-full px-6 lg:px-16">
      {filterRiwayat.map((list) => {
        const IconComponent = badgeStatusIcon[list.status];
        return(
        <div
          key={list.id}
          className="card bg-base-100 card-sm shadow-sm mb-2.5 border"
        >
          <div className="card-body lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div className="flex flex-row gap-3 items-center">
              <HandHeart className="text-[#6D123F]" />
              <div>
                <h2 className="card-title text-[#6D123F]">
                  {list.judul} | {list.instansi}
                </h2>
                <p className="text-gray-500">
                  {list.tanggalStatus} | {list.kategori}
                </p>
              </div>
            </div>
            <div className="justify-end items-center flex flex-row gap-2 mt-4 lg:mt-0">
              <div
                className={`badge badge-soft ${
                  badgeStatus[list.status] || "badge-neutral"
                } p-4 text-sm font-medium`}
              >
                {IconComponent && <IconComponent size={16} />}
                {list.status}
              </div>
              <button className="btn w-fit text-[16px] font-medium bg-[#6D123F] text-white rounded-sm border-none hover:bg-pink-600">
                Lihat
              </button>
            </div>
          </div>
        </div>
      )})}
    </section>
  );
}
