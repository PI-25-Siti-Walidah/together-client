
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Cerita() {
  const testimonials = [
    {
      quote: "Pelatihan menjahit dan modal usaha kecil membuat saya bisa membuka konveksi rumahan. Sekarang penghasilan stabil dan anak-anak bisa sekolah kembali.",
      name: "Siti Nurhayati",
      role: "Kepala Keluarga — Banyuwangi",
    },
    {
      quote: "Lewat pelatihan pertanian, saya belajar teknik bercocok tanam yang tepat. Hasil panen meningkat dan bisa dijual ke pasar lokal.",
      name: "Ratna Dewi",
      role: "Petani — Garut",
    },
    {
      quote: "Bantuan modal dan pendampingan pemasaran membantu saya memulai usaha katering kecil. Pesanan kini datang rutin setiap minggu.",
      name: "Ayu Pramesti",
      role: "Pengusaha Katering — Yogyakarta",
    },
  ]

  const [current, setCurrent] = useState(0)

  // Fungsi untuk navigasi manual
  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-12 mt-11">
      <div className="max-w-3xl lg:max-w-5xl mx-auto text-center">
        <div className="text-3xl font-bold lg:max-w-5xl text-[#6D123F] mb-4 text-balance">Cerita dari Perempuan Tangguh</div>
        <p className="text-gray-600 min-w-lg lg:max-w-5xl mb-8 text-balance">
          Dengarkan bagaimana dukungan kami membantu mereka meningkatkan kesejahteraan keluarga.
        </p>
      </div>

      {/* Mobile: slide pakai translateX */}
      <div className="md:hidden overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 flex justify-center px-4">
              <div className="card w-11/12 bg-base-100 shadow-md rounded-lg">
                <div className="p-6">
                  <p className="text-sm text-gray-700 mb-4">“{t.quote}”</p>
                  <div className="text-sm font-medium text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* tombol navigasi kiri kanan */}
        <div className="absolute inset-0 flex items-center justify-between gap-4 px-4">
            <button
                onClick={prevSlide}
                className="bg-white/70 hover:bg-white rounded-full p-2 shadow transition"
            >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
                onClick={nextSlide}
                className="bg-white/70 hover:bg-white rounded-full p-2 shadow transition"
            >
                <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
            </div>

        {/* dots sinkron */}
        <div className="flex justify-center gap-3 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === i ? "bg-[#6D123F] w-5" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop / tablet: grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="card bg-base-100 shadow rounded-lg p-6">
            <p className="text-sm text-gray-700 mb-4">“{t.quote}”</p>
            <div className="text-sm font-medium text-gray-900">{t.name}</div>
            <div className="text-xs text-gray-500">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
