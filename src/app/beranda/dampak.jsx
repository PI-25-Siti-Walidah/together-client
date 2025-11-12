import { FolderOpen, HandCoins, Users, Laugh } from "lucide-react";

export default function Dampak() {
  const stats = [
    {
      icon: <FolderOpen className="w-10 h-10 text-[#6D123F]" />,
      value: "4",
      title: "Kategori Bantuan",
      desc: "Pendidikan, modal usaha, pelatihan, dan kebutuhan dasar",
    },
    {
      icon: <Users className="w-10 h-10 text-[#6D123F]" />,
      value: "15.250+",
      title: "Keluarga Terbantu",
      desc: "Perempuan kepala keluarga yang telah menerima dukungan",
    },
    {
      icon: <HandCoins className="w-10 h-10 text-[#6D123F]" />,
      value: "Rp 1,2 M",
      title: "Nilai Bantuan",
      desc: "Total bantuan yang telah tersalurkan di berbagai wilayah",
    },
    {
      icon: <Laugh className="w-10 h-10 text-[#6D123F]" />,
      value: "96%",
      title: "Kepuasan Penerima",
      desc: "Penerima merasa proses bantuan mudah dan bermanfaat langsung",
    },
  ];

  return (
    <section className="py-16">
      {/* Judul */}
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-[#6D123F] mb-4">
          Dampak Nyata untuk Keluarga Perempuan Hebat
        </h2>
        <p className="text-gray-600 text-balance">
          Bersama, kami membantu perempuan kepala keluarga untuk kembali
          berdaya, menghidupi keluarga, dan menciptakan perubahan di
          lingkungannya.
        </p>
      </div>

      {/* Grid Dampak */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-8 items-stretch">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#F4F4FF] rounded-2xl shadow-sm p-6 flex flex-col items-center justify-between text-center 
                       transform transition-all duration-300 ease-in-out h-full
                       hover:scale-105 hover:shadow-md hover:bg-[#EFEAFF] hover:opacity-95"
          >
            <div className="transition-opacity duration-300">{item.icon}</div>
            <div>
              <div className="text-2xl font-bold mt-4 text-[#2C2C2C]">
                {item.value}
              </div>
              <div className="font-semibold text-[#313131]">{item.title}</div>
              <p className="text-xs text-gray-600 mt-2 text-balance">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
