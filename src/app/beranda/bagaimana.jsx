import { UserLock, ClipboardList, View, Boxes } from "lucide-react"

export default function Bagaimana() {
    return (
    <section className="mt-11 py-12 bg-purple-50">
        {/* title Bagaimana */}
        <div className="max-w-3xl lg:max-w-5xl mx-auto text-center mb-8">
            <div className="text-3xl font-bold lg:max-w-5xl text-[#6D123F] mb-4 text-balance">Bagaimana Cara Menerima Bantuan</div>
            <p className="text-gray-600 min-w-lg lg:max-w-5xl mb-8 text-balance">Together membantu penerima mendapatkan bantuan dengan proses yang mudah, cepat, dan transparan.</p>
        </div>
            
        {/* //stats component */}
        <div className="stat shadow grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-8">
            {/* component 1 */}
            <div className="stat p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                <div className="rounded-full p-2 bg-[#F4F4FF] mb-4">
                    <UserLock className="stat-figure w-10 h-10 text-[#6D123F]" />
                </div>
                <div className="stat-title text-lg font-bold">Registrasi atau Login</div>
                <div className="stat-desc text-xs mt-2 text-balance">Buat atau masuk akun agar sistem dapat mengenalimu</div>
            </div>
            {/* component 2 */}
            <div className="stat p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                <div className="rounded-full p-2 bg-[#F4F4FF] mb-4">
                    <ClipboardList className="stat-figure w-10 h-10 text-[#6D123F]" />
                </div>
                <div className="stat-title text-lg font-bold">Ajukan Bantuan</div>
                <div className="stat-desc text-xs mt-2 text-balance"> Pilih program bantuan yang tersedia dan ajukan sesuai kebutuhan.</div>
            </div>
            {/* component 3 */}
            <div className="stat p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                <div className="rounded-full p-2 bg-[#F4F4FF] mb-4">
                    <View className="stat-figure w-10 h-10 text-[#6D123F]" />
                </div>
                <div className="stat-title text-lg font-bold">Pantau Status</div>
                <div className="stat-desc text-xs mt-2 text-balance">Lihat proses verifikasi & perkembangan pengajuan secara real-time.</div>
            </div>
            {/* component 4 */}
            <div className="stat p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                <div className="rounded-full p-2 bg-[#F4F4FF] mb-4">
                    <Boxes className="stat-figure w-10 h-10 text-[#6D123F]" />
                </div>
                <div className="stat-title text-lg font-bold">Terima Bantuanmu</div>
                <div className="stat-desc text-xs mt-2 text-balance">Setelah disetujui, bantuan akan dikirim atau bisa diambil sesuai instruksi.</div>
            </div>
        </div>
    </section>
    );
}
