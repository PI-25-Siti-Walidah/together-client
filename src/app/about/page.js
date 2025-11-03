import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function About() {
  return (
    <div className="h-full pt-4 lg:pt-32 bg-[#FFF9F7]">
      <h1 className="text-center font-bold text-2xl">Tentang Kami</h1>
      <div className="flex flex-col py-12 px-16 mx-16 my-6 card w-fit bg-base-100 shadow-sm">
        <div className="flex flex-col items-center lg:flex-row gap-12">
          <img 
          className="h-52 w-52" 
          src="/beranda/logo.png" />
          <div>
            <p className="text-xl font-bold mb-2">
              <span className="text-[#313131]">To</span>
              <span className="text-[#6D123F]">Get</span>
              <span className="text-[#313131]">Her</span>
            </p>
            <p>
              ToGetHer adalah tempat bagi para perempuan untuk saling mendukung
              dan tumbuh bersama. Kami percaya bahwa setiap bantuan, sekecil apa
              pun, bisa memberi perubahan besar bagi kehidupan seseorang. <br/>
              Melalui ToGetHer, ibu-ibu bisa:
            </p>
            <ul className="list-disc pl-6">
              <li>Mengajukan bantuan dengan mudah dan cepat.</li>
              <li>Melihat status pengajuan secara transparan.</li>
              <li>Menemukan informasi yang jelas tentang berbagai jenis bantuan.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-12 px-16 mx-16 my-6 card  bg-base-100 shadow-sm">
        <h2 className="text-center font-bold text-xl">Tim 
              <span className="text-white">_</span>
              <span className="text-[#313131]">To</span>
              <span className="text-[#6D123F]">Get</span>
              <span className="text-[#313131]">Her</span>
        </h2>
        <div>

        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}
