import { MessageSquare, Laugh } from "lucide-react"

export default function Overview (){
  const satisfactionData = [
    { kategori: "Ekonomi", puas: 92 },
    { kategori: "Pendidikan Anak", puas: 95 },
    { kategori: "Modal Usaha", puas: 90 },
    { kategori: "Pelatihan", puas: 97 },
  ];

    return(
        <section>
            {/* title Cerita */}
            <div className="max-w-3xl lg:max-w-5xl mx-auto mb-8">
                <div className="text-3xl font-bold lg:max-w-5xl text-[#6D123F] mb-4 text-balance">Cerita Perempuan Tangguh</div>
                <p className="text-gray-600 min-w-lg lg:max-w-5xl mb-8 text-balance">Kami membantu perempuan kepala keluarga untuk kembali berdaya, menghidupi keluarga, dan menciptakan perubahan di lingkungannya.</p>
            </div>
            
            {/* //stats component */}
            <div className="stat shadow grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {/* component 1 */}
                <div className="stat bg-[#F4F4FF] rounded-2xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition">
                    <div className="stat-figure text-primary items-start">
                    <MessageSquare className="inline-block h-8 w-8 stroke-current text-[#6D123F]" />
                    </div>
                    <div className="stat-value text-2xl font-bold mb-2">100K+</div>
                    <div className="stat-title text-lg font-bold text-[#6D123F] text-balance">Total Tesitimoni</div>
                    <div className="stat-desc text-xs mt-2 text-balance">Jumlah cerita mereka setelah mendapatkan bantuan</div>
                    {/* </div> */}
                    <MessageSquare className="w-10 h-10 mb-4 text-[#6D123F]" />
                </div>
                {/* component 2 */}
                <div className="stat bg-[#F4F4FF] rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                    <Laugh className="stat-figure w-10 h-10 mb-4 text-[#6D123F]" />
                    <div className="stat-value text-2xl font-bold mb-2">96%</div>
                    <div className="stat-title text-lg font-bold text-[#6D123F] text-balance">Kepuasan Penerima</div>
                    <div className="stat-desc text-xs mt-2 text-balance">Penerima merasa proses bantuan mudah dan bermanfaat langsung</div>
                </div>
                {/* component 3 */}
                <div className="stat bg-[#F4F4FF] rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">

          <div className="space-y-3">
            {satisfactionData.map((item) => (
              <div key={item.kategori}>
                <div className="flex justify-between text-sm text-gray-700 mb-1">
                  <span>{item.kategori}</span>
                  <span className="font-semibold text-[#6D123F]">
                    {item.puas}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#6D123F] h-2.5 rounded-full transition-all duration-500"
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