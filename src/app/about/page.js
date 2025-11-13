import ChromaGrid from "@/components/ChromaGrid";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { CircleCheckBig } from "lucide-react";

export default function About() {
  const items = [
    {
      image: "/tim/nadin.png",
      title: "Nadia Dini",
      subtitle: "Front-End Developer",
      handle: "@Nadin",
      borderColor: "#fadbdd",
      gradient: "linear-gradient(195deg, #fadbdd, #df5b6b)",
      url: "https://www.linkedin.com/in/nadia-dini-nur-azizah-5384851b8/",
    },
    {
      image: "/tim/osyi.png",
      title: "Fahma Rosyidah",
      subtitle: "Full Stack Developer",
      handle: "@Osyi",
      borderColor: "#deecd4",
      gradient: "linear-gradient(180deg, #deecd4, #8fc56d)",
      url: "https://www.linkedin.com/in/fahma-rosyidah/",
    },
    {
      image: "/tim/abil.png",
      title: "Abil Zuhrotin",
      subtitle: "Front-End Developer",
      handle: "@Abil",
      borderColor: "#d6e8f6",
      gradient: "linear-gradient(135deg, #d6e8f6, #7ec4e4)",
      url: "https://www.linkedin.com/in/abil-zuhrotin-sobabah/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F7] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-30 px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#6D123F]">
            Tentang Kami
          </h1>
          <p className="mt-4 text-gray-600">
            Mengenal lebih dekat visi dan tim di balik ToGetHer.
          </p>
        </div>

        <div className="my-8 mx-5 md:mx-12 lg:mx-28 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/beranda/about.png"
              alt="Tentang ToGetHer"
              className="w-full max-w-sm lg:max-w-md"
            />
          </div>

          <div className="py-2 max-w-2xl mx-auto lg:mx-0">
            <p className="text-4xl font-bold mb-2 text-center lg:text-left">
              <span className="text-[#313131]">To</span>
              <span className="text-[#6D123F]">Get</span>
              <span className="text-[#313131]">Her</span>
            </p>
            <p className="text-gray-700 text-justify">
              ToGetHer adalah tempat bagi para perempuan untuk saling mendukung
              dan tumbuh bersama. Kami percaya bahwa setiap bantuan, sekecil apa
              pun, bisa memberi perubahan besar bagi kehidupan seseorang. <br />
              Melalui ToGetHer, ibu-ibu bisa:
            </p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-start">
                <CircleCheckBig
                  size={20}
                  className="text-green-500 mr-3 mt-1"
                />
                <span>Mengajukan bantuan dengan mudah dan cepat.</span>
              </li>
              <li className="flex items-start">
                <CircleCheckBig
                  size={20}
                  className="text-green-500 mr-3 mt-1"
                />
                <span>Melihat status pengajuan secara transparan.</span>
              </li>
              <li className="flex items-start">
                <CircleCheckBig
                  size={20}
                  className="text-green-500 mr-3 mt-1"
                />
                <span>Menemukan informasi tentang berbagai jenis bantuan.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col py-12 my-6">
          <div className="text-center font-bold text-xl mb-3">
            <span className="text-[#313131]">To</span>
            <span className="text-[#6D123F]">Get</span>
            <span className="text-[#313131]">Her </span>
            <span className="text-[#6D123F]">Team</span>
          </div>

          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
