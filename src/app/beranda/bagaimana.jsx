import { UserLock, ClipboardList, View, Boxes } from "lucide-react";

export default function Bagaimana() {
  const steps = [
    {
      icon: <UserLock className="w-10 h-10 text-[#6D123F]" />,
      title: "Registrasi atau Login",
      desc: "Buat atau masuk akun agar sistem dapat mengenalimu.",
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-[#6D123F]" />,
      title: "Ajukan Bantuan",
      desc: "Pilih program bantuan yang tersedia dan ajukan sesuai kebutuhan.",
    },
    {
      icon: <View className="w-10 h-10 text-[#6D123F]" />,
      title: "Pantau Status",
      desc: "Lihat proses verifikasi & perkembangan pengajuan secara real-time.",
    },
    {
      icon: <Boxes className="w-10 h-10 text-[#6D123F]" />,
      title: "Terima Bantuanmu",
      desc: "Setelah disetujui, bantuan akan dikirim atau bisa diambil sesuai instruksi.",
    },
  ];

  return (
    <section className="py-16 bg-[#F4F4FF]">
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-[#6D123F] mb-4">
          Bagaimana Cara Menerima Bantuan
        </h2>
        <p className="text-gray-600 text-balance">
          ToGetHer membantu penerima mendapatkan bantuan dengan proses yang
          mudah, cepat, dan transparan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-8">
        {steps.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center transform transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-md hover:bg-[#EFEAFF] hover:opacity-95"
          >
            <div className="bg-[#F4F4FF] rounded-full p-3 mb-4">
              {item.icon}
            </div>
            <div className="font-semibold text-[#313131]">{item.title}</div>
            <p className="text-xs text-gray-600 mt-2 text-balance">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
