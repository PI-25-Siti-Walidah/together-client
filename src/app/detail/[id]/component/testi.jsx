export default function Testi() {
  const testimonials = [
    {
      quote:
        "Pelatihan menjahit dan modal usaha kecil membuat saya bisa membuka konveksi rumahan. Sekarang penghasilan stabil dan anak-anak bisa sekolah kembali.",
      name: "Siti Nurhayati",
      domisili: "Banyuwangi",
    },
    {
      quote:
        "Lewat pelatihan pertanian, saya belajar teknik bercocok tanam yang tepat. Hasil panen meningkat dan bisa dijual ke pasar lokal.",
      name: "Ratna Dewi",
      domisili: "Garut",
    },
    {
      quote:
        "Bantuan modal dan pendampingan pemasaran membantu saya memulai usaha katering kecil. Pesanan kini datang rutin setiap minggu.",
      name: "Ayu Pramesti",
      domisili: "Yogyakarta",
    },
  ];

  return (
    <section className="mt-3">
      <div className="card bg-base-100 lg:w-md card-md shadow-sm p-5">
        <div className="grid gap-3 max-w-6xl mx-auto ">
          {testimonials.map((t, i) => (
            <div key={i} className="card bg-gray-50 shadow rounded-lg p-6">
              <p className="text-sm text-gray-700 mb-4">“{t.quote}”</p>
              <div className="text-sm font-medium text-gray-900">- {t.name}, {t.domisili}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
