"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

export default function Cerita() {
  const testimonials = [
    {
      quote:
        "Pelatihan menjahit dan modal usaha kecil membuat saya bisa membuka konveksi rumahan. Sekarang penghasilan stabil dan anak-anak bisa sekolah kembali.",
      name: "Siti Nurhayati",
      role: "Kepala Keluarga — Banyuwangi",
    },
    {
      quote:
        "Lewat pelatihan pertanian, saya belajar teknik bercocok tanam yang tepat. Hasil panen meningkat dan bisa dijual ke pasar lokal.",
      name: "Ratna Dewi",
      role: "Petani — Garut",
    },
    {
      quote:
        "Bantuan modal dan pendampingan pemasaran membantu saya memulai usaha katering kecil. Pesanan kini datang rutin setiap minggu.",
      name: "Ayu Pramesti",
      role: "Pengusaha Katering — Yogyakarta",
    },
  ];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prevSlide();
    if (delta < -50) nextSlide();
  };

  return (
    <section className="pt-16 pb-8 bg-[#FFF9F7]">
      <div className="max-w-3xl lg:max-w-5xl mx-auto text-center mb-8 px-6">
        <h2 className="text-3xl font-bold text-[#6D123F] mb-2">
          Cerita dari Perempuan Tangguh
        </h2>
        <p className="text-gray-600 text-sm">
          Dengarkan bagaimana dukungan kami membantu mereka meningkatkan
          kesejahteraan keluarga.
        </p>
      </div>

      <div
        className="md:hidden overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 flex justify-center px-4"
            >
              <div className="w-11/12 bg-white rounded-2xl shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="text-sm font-semibold text-gray-900">
                  {t.name}
                </div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prevSlide}
            className="bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

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

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-8 mt-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              “{t.quote}”
            </p>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                {t.name}
              </div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
