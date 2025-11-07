import ChromaGrid from "@/components/ChromaGrid";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { CircleCheckBig } from 'lucide-react';

export default function About() {
const items = [
  {
    image: "/tim/nadin.png",
    title: "Nadia Dini",
    subtitle: "Front-End Developer",
    handle: "@Nadin",
    borderColor: '#EF4444',
    gradient: 'linear-gradient(195deg,#EF4444,#000)',
    url: "https://www.linkedin.com/in/nadia-dini-nur-azizah-5384851b8/"
  },
  {
    image: "/tim/osyi.png",
    title: "Fahma Rosyidah",
    subtitle: "Full Stack Developer",
    handle: "@Osyi",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://www.linkedin.com/in/fahma-rosyidah/"
  },
  {
    image: "/tim/abil.png",
    title: "Abil Zuhrotin",
    subtitle: "Front-End Developer",
    handle: "@Abil",
    borderColor: '#06B6D4',
    gradient: 'linear-gradient(135deg,#06B6D4,#000)',
    url: "https://www.linkedin.com/in/abil-zuhrotin-sobabah/"
  }
];


  return (
    <div className="h-full pt-32 lg:pt-32 px-4 bg-[#FFF9F7]">
      <div>
      <div className="text-center">
        <h1 className="text-4xl lg:text-4xl font-extrabold text-[#6D123F]">
          Tentang Kami
        </h1>
        <p className="mt-4 text-balence text-gray-600">
          Mengenal lebih dekat visi dan tim di balik ToGetHer.
        </p>
      </div>
      <div className="my-4 mx-5 lg:mx-28 grid grid-cols-1 lg:grid-cols-2 gap items-center">
        <div >
          <img 
          className="h-lg w-md" 
          src="/beranda/about.png" />
         </div> 
          <div className="py-2">
            <p className="text-4xl font-bold mb-2">
              <span className="text-[#313131]">To</span>
              <span className="text-[#6D123F]">Get</span>
              <span className="text-[#313131]">Her</span>
            </p>
            <p className="text-balance text-justify">
              ToGetHer adalah tempat bagi para perempuan untuk saling mendukung
              dan tumbuh bersama. Kami percaya bahwa setiap bantuan, sekecil apa
              pun, bisa memberi perubahan besar bagi kehidupan seseorang. <br/>
              Melalui ToGetHer, ibu-ibu bisa:
            </p>
            <ul className="mt-6 space-y-4 text-balance">
              <li className="flex items-start">
                <CircleCheckBig size={20} className="text-green-500 mr-3 mt-1" />
                <span>Mengajukan bantuan dengan mudah dan cepat.</span>
                </li>
              <li className="flex items-start">
                <CircleCheckBig size={20} className="text-green-500 mr-3 mt-1" />
                <span>Melihat status pengajuan secara transparan.</span>
              </li>
              <li className="flex items-start">
                <CircleCheckBig size={20} className="text-green-500 mr-3 mt-1" />
                <span>Menemukan informasi yang jelas tentang berbagai jenis bantuan.</span>
              </li>
            </ul>
          </div>
      </div>
      <div className="flex flex-col py-12 my-6 ">
        <div className="text-center font-bold text-xl mb-3"> 
              <span className="text-white">_</span>
              <span className="text-[#313131]">To</span>
              <span className="text-[#6D123F]">Get</span>
              <span className="text-[#313131]">Her </span>
              <span>Team</span>
        </div>
        <div>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}
