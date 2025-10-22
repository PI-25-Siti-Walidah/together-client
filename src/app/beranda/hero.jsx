export default function Hero() {
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/beranda/hero-home.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center flex flex-col">
          <div className="px-5 py-2 mb-4 backdrop-blur-md rounded-2xl bg-white/10 text-white font-semibold">
            2.5 Juta Janda telah Terbantu
          </div>
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              We Get Her the <br />
              <span className="text-[#FCC0C5]">Support She Deserves</span>
            </h1>
            <p className="mb-5">
              ToGetHer hadir untuk menyalurkan bantuan sosial, pendidikan, dan
              kesehatan bagi perempuan yang membutuhkan
            </p>
            <button className="btn md:btn-lg xl:btn rounded-sm bg-[#6D123F] text-white text-lg border-none">
              Cari Bantuan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
