import { HandCoins, ClipboardClock, CircleCheck, CircleX } from "lucide-react";

export default function Rangkuman() {
  return (
    <section className="w-full">
      <div className="px-2 md:px-6 lg:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "Total Bantuan",
              icon: <HandCoins className="w-6 h-6 text-purple-600" />,
              jumlah: 14,
              desc: "Semua kategori",
            },
            {
              title: "Menunggu Verifikasi",
              icon: <ClipboardClock className="w-6 h-6 text-yellow-600" />,
              jumlah: 4,
              desc: "Proses validasi",
            },
            {
              title: "Sudah Diverifikasi",
              icon: <CircleCheck className="w-6 h-6 text-green-600" />,
              jumlah: 8,
              desc: "Siap dan sudah disalurkan",
            },
            {
              title: "Ditolak",
              icon: <CircleX className="w-6 h-6 text-red-600" />,
              jumlah: 2,
              desc: "Tidak disetujui",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between"
            >
              <div className="flex flex-col items-center justify-center flex-grow text-center">
                <h3 className="text-lg font-semibold text-[#6D123F] mb-3 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-1 md:gap-2 text-center md:text-left">
                  {item.icon}
                  <span>{item.title}</span>
                </h3>

                <p className="text-4xl font-bold text-gray-800">
                  {item.jumlah}
                </p>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
