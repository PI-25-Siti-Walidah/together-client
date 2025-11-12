"use client";
import { useBantuanStore } from "@/lib/store/bantuanStore";
import { CalendarClock, UsersRoundIcon } from "lucide-react";

export default function ListBantuan({
  filterKategori,
  onDetail,
  selectedBantuan = {},
}) {
  const { bantuan, loading, error } = useBantuanStore();

  if (loading)
    return <p className="text-center text-gray-500">Memuat data...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Gagal memuat data: {error}</p>
    );

  const bantuanData = {
    isActive: selectedBantuan.is_active ? "Berlangsung" : "Berakhir",
    periodeMulai: selectedBantuan.periode_mulai
      ? new Date(selectedBantuan.periode_mulai).toLocaleDateString("id-ID")
      : "-",
    periodeSelesai: selectedBantuan.periode_berakhir
      ? new Date(selectedBantuan.periode_berakhir).toLocaleDateString("id-ID")
      : "-",
    mitra: selectedBantuan.mitra_id?.nama || "Tidak diketahui",
    kategori: selectedBantuan.kategori_id?.nama_kategori || "Umum",
    kuota: selectedBantuan.jumlah_penerima || "Tidak ditentukan",
    benefit: selectedBantuan.bentuk_bantuan || "-",
  };

  // const bantuanData = [
  //   {
  //     id: 1,
  //     judul: "Bantuan Modal Usaha Mikro",
  //     instansi: "Kementerian Koperasi",
  //     periode_selesai: "30 Nov 2025",
  //     rating: "4.5",
  //     kategori: "Modal Usaha",
  //     is_active: true,
  //   },
  //   {
  //     id: 2,
  //     judul: "Beasiswa Anak Sekolah",
  //     instansi: "Yayasan Pendidikan Kita",
  //     periode_selesai: "15 Des 2025",
  //     rating: "5.0",
  //     kategori: "Pendidikan Anak",
  //     is_active: true,
  //   },
  //   {
  //       id: 3,
  //     judul: "Pelatihan keterampilan digital",
  //     instansi: "Ayo Digital",
  //     periode_selesai: "15 Des 2025",
  //     rating: "4.8",
  //     kategori: "Pelatihan",
  //     is_active: true,
  //   },
  //   {
  //       id: 4,
  //       judul: "Santunan Ekonomi Perempuan Hebat",
  //       instansi: "Yayasan Perempuan Maju",
  //       periode_selesai: "31 Des 2025",
  //       rating: "4.7",
  //       kategori: "Ekonomi",
  //       is_active: false,

  //   }

  // ];

  const filteredData =
    filterKategori === "Semua"
      ? bantuan
      : bantuan.filter(
          (item) =>
            item.kategori_id?.nama_kategori?.toLowerCase() ===
            filterKategori.toLowerCase()
        );

  return (
    <div className="flex flex-col gap-4">
      {filteredData.length === 0 && (
        <p className="text-center text-gray-400">Tidak ada data bantuan.</p>
      )}

      {filteredData.map((item) => {
        const tanggalSelesai = new Date(
          item.periode_berakhir
        ).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
        return (
          <div
            key={item._id}
            className="w-full bg-white rounded-2xl shadow-md overflow-hidden mb-4 flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="w-full h-50 bg-gray-100">
              <img
                src={item.foto || "/beranda/bantuan.jpg"}
                alt={item.judul}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h3 className="font-bold text-lg text-[#6D123F] leading-snug line-clamp-2">
                {item.judul}
              </h3>

              <div className="flex items-center gap-2">
                {item.mitra_id?.logo ? (
                  <img
                    src={item.mitra_id.logo}
                    alt={item.mitra_id?.nama}
                    className="w-6 h-6 rounded-full border object-contain"
                  />
                ) : (
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                )}
                <p className="text-sm text-gray-600">{item.mitra_id?.nama}</p>
              </div>

              <div className="flex justify-between items-center text-xs text-[#6D123F]">
                <div className="flex items-center gap-2">
                  <CalendarClock className="w-4 h-4" />
                  <span className="font-medium">{tanggalSelesai}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersRoundIcon className="w-4 h-4" />
                  <span className="font-medium">
                    {item.jumlah_penerima} penerima
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full
                    ${
                      item.is_active
                        ? "text-green-700 bg-green-100"
                        : "text-red-700 bg-red-100"
                    }`}
                >
                  {item.is_active ? "Berlangsung" : "Berakhir"}
                </span>
                <span className="text-xs font-semibold bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                  {item.kategori_id?.nama_kategori}
                </span>
              </div>

              <button
                onClick={() => onDetail(item._id)}
                className="mt-4 bg-[#6D123F] hover:bg-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Baca Selengkapnya
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
