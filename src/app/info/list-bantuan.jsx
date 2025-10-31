import { CalendarClock, Star } from "lucide-react";

export default function ListBantuan({ filterKategori, onDetail }) {
  const bantuanData = [
    {
      id: 1,
      judul: "Bantuan Modal Usaha Mikro",
      instansi: "Kementerian Koperasi",
      periode_selesai: "30 Nov 2025",
      rating: "4.5",
      kategori: "Modal Usaha",
      is_active: true,
    },
    {
      id: 2,
      judul: "Beasiswa Anak Sekolah",
      instansi: "Yayasan Pendidikan Kita",
      periode_selesai: "15 Des 2025",
      rating: "5.0",
      kategori: "Pendidikan Anak",
      is_active: true,
    },
    {
        id: 3,
      judul: "Pelatihan keterampilan digital",
      instansi: "Ayo Digital",
      periode_selesai: "15 Des 2025",
      rating: "4.8",
      kategori: "Pelatihan",
      is_active: true,
    },
    {
        id: 4,
        judul: "Santunan Ekonomi Perempuan Hebat",
        instansi: "Yayasan Perempuan Maju",
        periode_selesai: "31 Des 2025",
        rating: "4.7",
        kategori: "Ekonomi",
        is_active: false,

    }

  ];

  const filteredData =
    filterKategori === "Semua"
      ? bantuanData
      : bantuanData.filter(
          (item) => item.kategori.toLowerCase() === filterKategori.toLowerCase()
        );

  return (
    <div className="flex flex-col gap-4">
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2"
        >
          <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
            <span className="text-gray-400">📷</span>
          </div>
          <h3 className="font-bold text-xl text-[#6D123F]">{item.judul}</h3>
          <p className="text-sm text-gray-600">{item.instansi}</p>

          
            <div className="flex justify-between items-center text-xs text-[#6D123F]">

            {/* Kiri: ikon kalender + tanggal */}
            <div className="flex items-center gap-1">
                <CalendarClock className="w-4 h-4" />
                <span className="text-[13px] font-medium">{item.periode_selesai}</span>
            </div>

            {/* Kanan: ikon bintang + rating */}
            <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span className="text-[13px] font-medium">{item.rating}</span>
            </div>
            </div>

            <div className="flex items-center mt-2 gap-2">
              <div className={`text-md font-semibold px-3 py-1 rounded-full w-max
              ${item.is_active ? "text-green-600 bg-green-200" : "text-red-600 bg-red-200"}`}>
                {item.is_active ? "Berlangsung" : "Berakhir"}
                </div>
                <span className="bg-pink-100 text-pink-600 font-semibold text-md px-3 py-1 rounded-full">
              {item.kategori}
            </span>
            </div>

          <div className="flex justify-end mt-2 items-center">
            <button
              onClick={() => onDetail(item.id)}
              className="bg-[#6D123F] text-white text-center text-lg px-4 py-2 rounded-full hover:bg-pink-500"
>
              Baca Selengkapnya
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
