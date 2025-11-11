import { useState } from "react";
import { Upload, MessageSquare } from "lucide-react";
import Diterima from "./diterima";
import Selesai from "./selesai";

export default function Button() {
  const [showModal, setShowModal] = useState(false);
  const status = "Diterima";

  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const renderButton = () => {
    if (status === "Diterima") {
      return (
        <button
          onClick={handleClick}
          className="btn w-full md:w-150 bg-[#6D123F] rounded-xl text-white border-none hover:bg-pink-600 transition-all duration-300 hover:scale-105"
        >
          <Upload size={18} />
          <span>Kirim Bukti Penerimaan</span>
        </button>
      );
    }
    if (status === "Selesai") {
      return (
        <button
          onClick={handleClick}
          className="btn w-full md:w-150 bg-[#6D123F] rounded-xl text-white border-none hover:bg-pink-600 transition-all duration-300 hover:scale-105"
        >
          <MessageSquare size={18} />
          <span>Kirim Bukti Pemanfaatan Bantuan</span>
        </button>
      );
    }
    return null;
  };
  return (
    <section className="mt-4 flex justify-center">
      {renderButton()}
      {status === "Diterima" && showModal && <Diterima onClose={handleClose} />}
      {status === "Selesai" && showModal && <Selesai onClose={handleClose} />}
    </section>
  );
}
