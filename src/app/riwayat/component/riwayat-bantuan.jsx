"use client";
import {
  HandHeart,
  CheckCircle,
  Hourglass,
  Archive,
  CircleX,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ListRiwayat({ filterStatus }) {
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
      status: "Diproses",
    },
    {
      id: 3,
      judul: "Pelatihan Keterampilan Digital",
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
    {
      id: 5,
      judul: "Program Sembako Sehat",
      instansi: "GreenLab Rumah",
      tanggalStatus: "25 Okt 2025",
      kategori: "Ekonomi",
      status: "Diterima",
    },
  ];

  const badgeStatus = {
    Selesai: "badge-info",
    Diterima: "badge-success",
    Diproses: "badge-warning",
    Ditolak: "badge-error",
  };

  const badgeStatusIcon = {
    Selesai: Archive,
    Diterima: CheckCircle,
    Diproses: Hourglass,
    Ditolak: CircleX,
  };

  const filterRiwayat = riwayatBantuan.filter((list) =>
    filterStatus === "Semua" ? true : list.status === filterStatus
  );

  const router = useRouter();
  const handleRiwayatDetail = (id) => {
    router.push(`/riwayat/${id}`);
  };

  return (
    <section className="w-full max-w-5xl">
      {filterRiwayat.map((list) => {
        const IconComponent = badgeStatusIcon[list.status];
        return (
          <div
            key={list.id}
            className="card bg-white shadow-sm mb-3 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
          >
            <div className="card-body flex flex-col lg:flex-row justify-between gap-3 sm:gap-4 items-start lg:items-center">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full">
                <HandHeart className="text-[#6D123F] w-6 h-6 flex-shrink-0" />
                <div className="w-full">
                  <h2 className="font-semibold text-[#6D123F] text-sm sm:text-base md:text-lg leading-tight">
                    {list.judul}
                  </h2>
                  <p className="text-xs sm:text-sm font text-gray-900">
                    {list.instansi} • {list.kategori}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {list.tanggalStatus}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap justify-end items-center gap-2 w-full lg:w-auto">
                <div
                  className={`badge badge-soft ${
                    badgeStatus[list.status] || "badge-neutral"
                  } px-3 py-4 flex items-center gap-1.5 text-xs sm:text-sm font-medium dark:bg-pink-50`}
                >
                  {IconComponent && <IconComponent size={14} />}
                  {list.status}
                </div>
                <button
                  onClick={() => handleRiwayatDetail(list.id)}
                  className="btn btn-sm sm:btn-md bg-[#6D123F] text-white border-none rounded-lg hover:bg-pink-600 transition-all duration-300 hover:scale-105"
                >
                  Lihat
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
