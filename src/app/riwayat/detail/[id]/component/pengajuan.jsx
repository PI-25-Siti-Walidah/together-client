import { Clock, CheckCircle, XCircle, Archive } from "lucide-react";

export default function Pengajuan (){
    const dataPengajuan = {
        id: "BNT-2025-0021",
        tanggal: "25 Oktober 2025",
        status: "Diterima",
        alasan: "Pemohon terverifikasi dan sesuai kriteria keluarga rentan ekonomi."
    };
    const StatusIcon = () => {
        switch (dataPengajuan.status) {
            case "Diproses":
                return <Clock className="text-yellow-500" />;
            case "Diterima":
                return <CheckCircle className="text-green-600" />;
            case "Ditolak":
                return <XCircle className="text-red-500" />;
            case "Selesai":
               return <Archive className="text-blue-600" />;
            default:
                return null;
        }
    };
    return(
        <section className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-bold text-[#6D123F] mb-3">Detail Pengajuan</h2>
            <div className="space-y-2 text-gray-700 text-sm md:text-base">
                <p><strong>ID Pengajuan:</strong> {dataPengajuan.id}</p>
                <p><strong>Tanggal Update:</strong> {dataPengajuan.tanggal}</p>
                <div className="flex items-center gap-2">
                    <strong>Status:</strong>
                    <span>{dataPengajuan.status}</span>
                    <StatusIcon />
                </div>
                <p><strong>Alasan:</strong> {dataPengajuan.alasan}</p>
            </div>
        </section>
    )
}