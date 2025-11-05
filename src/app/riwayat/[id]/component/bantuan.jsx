import { ChartBarStacked, Gift, User, Handshake, Calendar, MapPin } from "lucide-react";
export default function Bantuan (){
    const dataBantuan ={
        judul: "Program Sembako Sehat",
        kategori: "Bantuan Ekonomi",
        jumlah_penerima: "100",
        foto: "https://res.cloudinary.com/doigcqjgf/image/upload/v1762161986/bantuan/1762161741757-bantuan1.jpg",
        bentuk_bantuan: "Voucher Alfamart",
        mitra: "GreenLab Rumah",
        jangkauan: "Kota Bandung",
        periode_selesai: "Desember 2025"
    }
    return(
        <section className="bg-white rounded-2xl shadow-md p-4 md:p-6">
            <div className="text-xl md:text-2xl text-center font-bold text-[#6D123F]">Detail Riwayat Pengajuan</div>
            <div className="text-lg md:text-xl gap-3 mb-3 text-center font-bold text-black">{dataBantuan.judul}</div>
            <div className="bg-gray-200 rounded-lg h-40 sm:h-80 mb-3 flex items-center justify-center">
                <img
            src={dataBantuan.foto || "/beranda/bantuan.jpg"}
            className="w-full h-45 object-cover"
          />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 mb-2 gap-2 pt-4 text-sm md:text-base space-y-1 text-gray-700 items-center ">
                    <div className="flex items-center gap-2">
                    <ChartBarStacked size={16} /><strong>Kategori:</strong> {dataBantuan.kategori}
                    </div>
                    <div className="flex items-center gap-2">
                    <User size={16} /><strong>Jumlah Penerima:</strong> {dataBantuan.jumlah_penerima}
                    </div>
                    <div className="flex items-center gap-2">
                    <Gift size={16} /><strong>Bentuk Bantuan:</strong> {dataBantuan.mitra}
                    </div>
                    <div className="flex items-center gap-2">
                    <Handshake size={16} /><strong>Penyelenggara:</strong> {dataBantuan.mitra}
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} /> <strong>Jangkauan:</strong> {dataBantuan.jangkauan}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} /> <strong>Berakhir pada:</strong> {dataBantuan.periode_selesai}
                    </div>
            </div>
        </section>
    )
}