import { MessageSquare, Laugh } from "lucide-react";

export default function Overview() {
  const satisfactionData = [
    { kategori: "Ekonomi", puas: 92 },
    { kategori: "Pendidikan", puas: 95 },
    { kategori: "Modal Usaha", puas: 90 },
    { kategori: "Pelatihan", puas: 97 },
  ];

  return (
    <section className="bg-[#FFF9F7] pt-30 lg:pt-30 px-4">
      {/* title Cerita */}
      <div className="max-w-4xl mx-auto text-center mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#6D123F] mb-4">
          Cerita Perempuan Tangguh
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Kami membantu perempuan kepala keluarga untuk kembali berdaya,
          menghidupi keluarga, dan menciptakan perubahan di lingkungannya.
        </p>
      </div>

      {/* statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4 max-w-6xl mx-auto">
        {/* Total Cerita */}
        <div className="bg-[#F4F4FF] rounded-2xl flex items-center justify-between shadow-md p-5 hover:shadow-xl transition">
          <div>
            <div className="text-sm font-semibold text-gray-700">
              Total Cerita
            </div>
            <div className="text-3xl font-bold text-[#6D123F] mt-1">100K+</div>
            <div className="text-xs text-gray-500">
              Jumlah testimoni penerima
            </div>
          </div>
          <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 text-[#6D123F]" />
        </div>

        {/* Kepuasan User */}
        <div className="bg-[#F4F4FF] rounded-2xl flex items-center justify-between shadow-md p-5 hover:shadow-xl transition">
          <div>
            <div className="text-sm font-semibold text-gray-700">
              Kepuasan User
            </div>
            <div className="text-3xl font-bold text-[#6D123F] mt-1">96%</div>
            <div className="text-xs text-gray-500">Tingkat kepuasan 2025</div>
          </div>
          <Laugh className="h-6 w-6 sm:h-7 sm:w-7 text-[#6D123F]" />
        </div>

        {/* Persentase kategori */}
        <div className="bg-[#F4F4FF] rounded-2xl shadow-md p-5 hover:shadow-xl transition">
          {satisfactionData.map((item) => (
            <div key={item.kategori} className="mb-3">
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>{item.kategori}</span>
                <span className="text-[#6D123F]">{item.puas}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-[#6D123F] h-1 rounded-full"
                  style={{ width: `${item.puas}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
