import { HandHeart } from "lucide-react";

export default function ListRiwayat() {
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

  return (
    <section className="w-full px-6 lg:px-16">
      {riwayatBantuan.map((list) => (
        <div
          key={list.id}
          className="card bg-base-100 card-sm shadow-sm mb-2.5 border-1"
        >
          <div className="card-body lg:flex lg:flex-row lg:justify-between">
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
            <div className="justify-end card-actions items-center flex flex-row gap-2.5">
              <div className="badge badge-soft badge-primary text-[16px] p-4">{list.status}</div>
              <button className="btn btn-primary w-fit text-[16px] font-medium bg-[#6D123F] text-white rounded-sm border-none hover:bg-pink-600 hover:border-pink-600 hover:text-white">
                Lihat
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
