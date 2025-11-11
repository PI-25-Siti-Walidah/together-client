import {
  ChartBarStacked,
  Gift,
  User,
  Handshake,
  Calendar,
  MapPin,
  Coins,
} from "lucide-react";

export default function Bantuan() {
  const dataBantuan = {
    judul: "Program Sembako Sehat",
    kategori: "Bantuan Ekonomi",
    jumlah_penerima: "100",
    foto: "https://res.cloudinary.com/doigcqjgf/image/upload/v1762161986/bantuan/1762161741757-bantuan1.jpg",
    bentuk_bantuan: "Voucher Alfamart",
    mitra: "GreenLab Rumah",
    jangkauan: "Kota Bandung",
    periode_selesai: "Desember 2025",
    nominal: "1.000.000",
  };

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-[#6D123F]">
        Detail Riwayat Pengajuan
      </h2>
      <h3 className="text-lg sm:text-xl text-center font-semibold mt-2 mb-4 text-gray-800">
        {dataBantuan.judul}
      </h3>

      <div className="rounded-lg overflow-hidden mb-4">
        <img
          src={dataBantuan.foto || "/beranda/bantuan.jpg"}
          alt="Foto Bantuan"
          className="w-full h-48 sm:h-64 md:h-80 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm sm:text-base text-gray-700">
        <div className="flex items-center gap-2">
          <ChartBarStacked size={18} />
          <strong>Kategori:</strong> {dataBantuan.kategori}
        </div>
        <div className="flex items-center gap-2">
          <User size={18} />
          <strong>Jumlah Penerima:</strong> {dataBantuan.jumlah_penerima}
        </div>
        <div className="flex items-center gap-2">
          <Gift size={18} />
          <strong>Bentuk Bantuan:</strong> {dataBantuan.bentuk_bantuan}
        </div>
        <div className="flex items-center gap-2">
          <Handshake size={18} />
          <strong>Penyelenggara:</strong> {dataBantuan.mitra}
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          <strong>Jangkauan:</strong> {dataBantuan.jangkauan}
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={18} />
          <strong>Berakhir:</strong> {dataBantuan.periode_selesai}
        </div>
        <div className="flex items-center gap-2 sm:col-span-2">
          <Coins size={18} />
          <strong>Nominal Bantuan:</strong> Rp {dataBantuan.nominal}
        </div>
      </div>
    </section>
  );
}
