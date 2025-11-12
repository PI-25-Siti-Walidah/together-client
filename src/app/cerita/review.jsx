import { Smile, User } from "lucide-react";

export default function Review() {
  const reviews = [
    {
      id: 1,
      nama: "Siti Rahma",
      pekerjaan: "Penjahit Rumahan",
      status: "Merasa Puas",
      emoji: <Smile className="inline h-5 w-5 text-[#6D123F]" />,
      testimoni:
        "Setelah ikut program modal usaha dari GreenLab Rumah, saya bisa membeli mesin jahit baru. Sekarang saya menerima pesanan dari tetangga dan bisa membantu biaya sekolah anak saya.",
      kategori: "Ekonomi",
      bantuan: "Modal Usaha Mikro",
    },
    {
      id: 2,
      nama: "Yuni Astuti",
      pekerjaan: "Guru PAUD",
      status: "Merasa Puas",
      emoji: <Smile className="inline h-5 w-5 text-[#6D123F]" />,
      testimoni:
        "Pelatihan literasi digital membantu saya membuat materi belajar yang lebih menarik. Anak-anak jadi lebih semangat belajar, dan saya juga lebih percaya diri menggunakan teknologi.",
      kategori: "Pendidikan",
      bantuan: "Pelatihan Literasi Digital",
    },
    {
      id: 3,
      nama: "Dewi Lestari",
      pekerjaan: "Pedagang Makanan",
      status: "Merasa Puas",
      emoji: <Smile className="inline h-5 w-5 text-[#6D123F]" />,
      testimoni:
        "Dulu saya takut mengelola keuangan usaha sendiri. Setelah ikut pelatihan keuangan perempuan, saya bisa mencatat pengeluaran dan menabung untuk modal bulan depan.",
      kategori: "Pelatihan",
      bantuan: "Manajemen Keuangan Perempuan",
    },
    {
      id: 4,
      nama: "Kartika Wulandari",
      pekerjaan: "Ibu Rumah Tangga",
      status: "Merasa Puas",
      emoji: <Smile className="inline h-5 w-5 text-[#6D123F]" />,
      testimoni:
        "Program edukasi lingkungan dari GreenLab Rumah membuka mata saya tentang pengelolaan limbah rumah tangga. Sekarang saya dan anak-anak membuat kompos dari sisa dapur, lingkungan jadi lebih bersih.",
      kategori: "Lingkungan",
      bantuan: "Edukasi Pengelolaan Sampah",
    },
    {
      id: 5,
      nama: "Nur Aini",
      pekerjaan: "Perajin Anyaman Bambu",
      status: "Merasa Puas",
      emoji: <Smile className="inline h-5 w-5 text-[#6D123F]" />,
      testimoni:
        "Lewat pelatihan pemasaran online, saya belajar memotret produk dan menjualnya lewat media sosial. Sekarang pesanan datang tidak hanya dari desa saya, tapi juga dari luar kota.",
      kategori: "Ekonomi Kreatif",
      bantuan: "Pelatihan Pemasaran Digital",
    },
  ];

  return (
    <section className="bg-[#FFF9F7]">
      <div className="max-w-6xl mx-auto py-10 px-3 sm:px-4 lg:px-0 mb-12 lg:mb-16">
        <div className="flex flex-col gap-4">
          {reviews.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start bg-[#FFF9F7] p-3 sm:p-4 rounded-2xl transition"
            >
              {/* Profil User */}
              <div className="flex-shrink-0 bg-[#F4F4FF] rounded-2xl flex flex-col items-center justify-center w-24 h-24 self-center sm:self-auto">
                <User className="text-[#6D123F] w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              {/* Testimoni */}
              <div className="flex-1 bg-[#F4F4FF] rounded-2xl p-4 sm:p-5 text-gray-700">
                <div className="font-bold text-[#6D123F] mb-1">
                  {item.status} {item.emoji}
                </div>
                <p className="text-sm mb-3">{`"${item.testimoni}"`}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-[#E3D4E5] text-[#6D123F] text-xs font-semibold px-3 py-1 rounded-full">
                    {item.kategori}
                  </span>
                  <span className="bg-[#E3D4E5] text-pink-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.bantuan}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
