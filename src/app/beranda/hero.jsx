"use client";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  
  const handleInfo = () => {
    router.push("/info");
  };

  return (
    <section className="lg:mt-[85px]">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/beranda/hero-home.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content w-full text-neutral-content text-center flex flex-col items-center justify-center gap-8 lg:my-20">
          <div className="backdrop-blur-md rounded-xl bg-white/10 text-white font-semibold">
            2.5 Juta Janda telah Terbantu
          </div>
          <div className="max-w-md flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold text-white">
              We Get Her the <br />
              <span className="text-[#FCC0C5]">Support She Deserves</span>
            </h1>
            <p className="text-balance">
              ToGetHer hadir untuk menyalurkan bantuan sosial, pendidikan, dan
              kesehatan bagi perempuan yang membutuhkan
            </p>
            <button 
            onClick={handleInfo}
            className="btn w-fit btn-md rounded-sm bg-[#6D123F] text-white text-sm border-none hover:bg-white hover:border-white hover:text-[#6D123F]">
              Cari Bantuan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
