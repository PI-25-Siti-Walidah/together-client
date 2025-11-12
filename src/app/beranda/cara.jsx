export default function Cara() {
  const steps = [
    { img: "/beranda/tutorial/1.png", text: "Masuk ke bantuan" },
    { img: "/beranda/tutorial/2.png", text: "Filter & pilih bantuan" },
    { img: "/beranda/tutorial/3.png", text: "Baca deskripsi bantuan" },
    { img: "/beranda/tutorial/4.png", text: "Daftar dan isi form bantuan" },
    { img: "/beranda/tutorial/5.png", text: "Tunggu bantuan disetujui" },
    { img: "/beranda/tutorial/6.png", text: "Upload bukti terima & testimoni" },
  ];

  return (
    <section className="py-16 bg-[#6D123F]">
      <div className="text-center mb-12 px-6">
        <h2 className="font-bold text-3xl text-white mb-2">
          Cara Menggunakan ToGetHer
        </h2>
        <p className="text-white opacity-80 text-sm">
          Langkah mudah untuk mulai mendapatkan bantuan melalui ToGetHer
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 ">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-[#FFF9F7] rounded-xl shadow-sm hover:shadow-md transition transform hover:scale-105 hover:bg-[#EFEAFF] duration-300 flex flex-col items-center justify-center p-4"
            >
              <div className="relative">
                <img
                  src={step.img}
                  alt={step.text}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-3 transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute -top-2 -left-2 bg-[#6D123F] text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                  {i + 1}
                </span>
              </div>
              <p className="text-xs text-center opacity-80">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
