import { useState } from "react";
import Submit from "./submit";

export default function Diterima({ onClose }) {
  const [showModal, setShowModal] = useState(false);
  const [keterangan, setKeterangan] = useState("");
  const [bukti, setBukti] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};

    if (!keterangan.trim()) {
      newErrors.keterangan = "Anda harus mengisi keterangan.";
    }

    if (!bukti) {
      newErrors.bukti = "Anda harus mengupload bukti penerimaan.";
    }

    setErrors(newErrors);

    // Jika tidak ada error baru, tampilkan modal Submit
    if (Object.keys(newErrors).length === 0) {
      setShowModal(true);
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2">
        <div className="bg-white rounded-xl p-6 w-100 md:w-200">
          <h3 className="text-lg font-bold text-center text-[#6D123F] mb-4">
            From Bukti Penerimaan
          </h3>
          <form>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Keterangan:
            </label>
            <textarea
              className={`w-full p-2 mb-1 border text-sm rounded-lg ${
                errors.keterangan ? "border-red-500" : "border-gray-300"
              }`}
              rows="4"
              placeholder="Masukkan keterangan (tanggal diterima, bentuk benefit bantuan)"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
            ></textarea>
            {errors.keterangan && (
              <p className="text-red-500 text-xs mb-3">{errors.keterangan}</p>
            )}
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Upload Bukti Penerimaan:
            </label>
            <input
              type="file"
              className={`mb-1 border p-2 w-full rounded-lg ${
                errors.bukti ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => setBukti(e.target.files[0])}
            />
            {errors.bukti && (
              <p className="text-red-500 text-xs mb-3">{errors.bukti}</p>
            )}
          </form>

          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-200 rounded-lg text-sm cursor-pointer"
            >
              Batal
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-[#6D123F] hover:bg-pink-600 text-white rounded-lg text-sm cursor-pointer"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
      {showModal && <Submit onClose={() => setShowModal(false)} />}
    </>
  );
}
