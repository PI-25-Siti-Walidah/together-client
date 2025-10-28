import { HandCoins, ClipboardClock, CircleCheck, CircleX } from 'lucide-react'

export default function Rangkuman() {
    return (
        <section>
             <div className='px-2 md:px-12 lg:px-24'>
                {/* Ringkasan Bantuan */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-4 items-stretch">
                    {/* Total Bantuan */}
                    <div className="border lg:w-75 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-[#6D123F] mb-3 flex items-center gap-2">
                        <HandCoins className="w-5 h-5 text-purple-600" /> Total Bantuan
                    </h3>
                    <p className="text-3xl font-bold text-gray-800">14</p>
                    <p className="text-sm text-gray-500 mt-1">Semua kategori</p>
                    </div>
                    
                    {/* Menunggu Verifikasi */}
                    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-[#6D123F] mb-3 flex items-center gap-2">
                        <ClipboardClock className="w-5 h-5 text-yellow-600" /> Menunggu Verifikasi
                    </h3>
                    <p className="text-3xl font-bold text-gray-800">4</p>
                    <p className="text-sm text-gray-500 mt-1">Proses validasi</p>
                    </div>

                    {/* Sudah Diverifikasi */}
                    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-[#6D123F] mb-3 flex items-center gap-2">
                        <CircleCheck className="w-5 h-5 text-green-600" /> Sudah Diverifikasi
                    </h3>
                    <p className="text-3xl font-bold text-gray-800">8</p>
                    <p className="text-sm text-gray-500 mt-1">Siap dan sudah disalurkan</p>
                    </div>

                    {/* Ditolak */}
                    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-[#6D123F] mb-3 flex items-center gap-2">
                        <CircleX className="w-5 h-5 text-red-600" /> Ditolak
                    </h3>
                    <p className="text-3xl font-bold text-gray-800">2</p>
                    <p className="text-sm text-gray-500 mt-1">Tidak disetujui</p>
                    </div>
                </div>
            </div>
        </section>
    );
}