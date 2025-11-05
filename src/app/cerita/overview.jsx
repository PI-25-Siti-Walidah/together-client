import { MessageSquare, Laugh } from "lucide-react"

export default function Overview (){
  const satisfactionData = [
    { kategori: "Ekonomi", puas: 92 },
    { kategori: "Pendidikan", puas: 95 },
    { kategori: "Modal Usaha", puas: 90 },
    { kategori: "Pelatihan", puas: 97 },
  ];

    return(
        <section className='bg-[#FFF9F7] pt-5 lg:pt-30'>
            {/* title Cerita */}
            <div className="max-w-4xl mx-auto text-center mb-6 px-4">
                <div className="pt-6 text-3xl font-bold text-[#6D123F] mb-4">Cerita Perempuan Tangguh</div>
                <p className="text-gray-600 mb-6">Kami membantu perempuan kepala keluarga untuk kembali berdaya, menghidupi keluarga, dan menciptakan perubahan di lingkungannya.</p>
            </div>
            
            {/* //stats component */}
            <div className="stat grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">
                {/* component 1 */}
                <div className="stat bg-[#F4F4FF] rounded-2xl flex items-center justify-between shadow-md p-5 hover:shadow-xl transition">
                    <div>
                      <div className="stat-title text-sm sm:text-base font-semibold text-gray-700">Total Cerita</div>
                      <div className="stat-value text-3xl font-bold text-[#6D123F] mt-1">100K+</div>
                      <div className="stat-desc text-xs sm:text-xs text-balance">Jumlah testimoni penerima</div>
                    </div>
                    <div className="stat-figure text-primary items-start">
                      <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 mb-2 stroke-current text-[#6D123F]" />
                    </div>
                </div>
                {/* component 2 */}
                <div className="stat bg-[#F4F4FF] rounded-2xl flex items-center justify-between shadow-md p-5 hover:shadow-xl transition">
                    <div>
                    <div className="stat-title text-sm sm:text-base font-semibold text-gray-700">Kepuasan User</div>
                    <div className="stat-value text-3xl font-bold text-[#6D123F] mt-1">96%</div>
                    <div className="stat-desc text-xs sm:text-xs text-balance">Tingkat kepuasan 2025</div>
                    </div>
                    <div className="stat-figure text-primary items-start">
                    <Laugh className="h-6 w-6 sm:h-7 sm:w-7 mb-2 stroke-current text-[#6D123F]" />
                    </div>
                </div>
                {/* component 3 */}
                <div className="stat bg-[#F4F4FF] rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">

          <div className="w-full mx-4">
            {satisfactionData.map((item) => (
              <div key={item.kategori}>
                <div className="flex justify-between gap-2 text-xs font-semibold stat-title mb-1">
                  <span>{item.kategori}</span>
                  <span className="font-semibold text-[#6D123F]">
                    {item.puas}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-[#6D123F] h-1 rounded-full transition-all duration-500"
                    style={{ width: `${item.puas}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
                </div>
            </div>
        </section>
    )
}