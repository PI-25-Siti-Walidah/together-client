import { FolderOpen, HandCoins, Users, Laugh } from "lucide-react"

export default function Dampak() {
    return (
        <section className="py-12 mt-11">
            {/* title Dampak */}
            <div className="max-w-3xl lg:max-w-5xl mx-auto text-center mb-8">
                <div className="text-3xl font-bold lg:max-w-5xl text-[#6D123F] mb-4 text-balance">Dampak Nyata untuk Keluarga Perempuan Hebat</div>
                <p className="text-gray-600 min-w-lg lg:max-w-5xl mb-8 text-balance">Bersama, kami membantu perempuan kepala keluarga untuk kembali berdaya, menghidupi keluarga, dan menciptakan perubahan di lingkungannya.</p>
            </div>
            
            {/* //stats component */}
            <div className="stat shadow grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* component 1 */}
                <div className="stat bg-[#F4F4FF] rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                    <FolderOpen className="stat-figure w-10 h-10 mb-4 text-[#6D123F]" />
                    <div className="stat-value text-2xl font-bold mb-2">4</div>
                    <div className="stat-title text-lg font-bold text-balance">Kategori Bantuan</div>
                    <div className="stat-desc text-xs mt-2 text-balance">Pendidikan, modal usaha, pelatihan, dan kebutuhan dasar</div>
                </div>
                {/* component 2 */}
                <div className="stat bg-[#F4F4FF] rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                    <Users className="stat-figure w-10 h-10 mb-4 text-[#6D123F]" />
                    <div className="stat-value text-2xl font-bold mb-2">15.250+</div>
                    <div className="stat-title text-lg font-bold text-balance">Keluarga Terbantu</div>
                    <div className="stat-desc text-xs mt-2 text-balance">Perempuan kepala keluarga yang telah menerima dukungan</div>
                </div>
                {/* component 3 */}
                <div className="stat bg-[#F4F4FF] rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                    <HandCoins className="stat-figure w-10 h-10 mb-4 text-[#6D123F]" />
                    <div className="stat-value text-2xl font-bold mb-2">Rp 1,2 M</div>
                    <div className="stat-title text-lg font-bold text-balance">Nilai Bantuan</div>
                    <div className="stat-desc text-xs mt-2 text-balance">Total bantuan yang telah tersalurkan kepada penerima di berbagai wilayah</div>
                </div>
                {/* component 4 */}
                <div className="stat bg-[#F4F4FF] rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                    <Laugh className="stat-figure w-10 h-10 mb-4 text-[#6D123F]" />
                    <div className="stat-value text-2xl font-bold mb-2">96%</div>
                    <div className="stat-title text-lg font-bold text-balance">Kepuasan Penerima</div>
                    <div className="stat-desc text-xs mt-2 text-balance">Penerima merasa proses bantuan mudah dan bermanfaat langsung</div>
                </div>
            </div>
        </section>
    );
}
