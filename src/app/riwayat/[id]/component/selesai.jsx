export default function Selesai({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-100 md:w-200">
        <h3 className="text-lg font-bold text-[#6D123F] mb-4">Form Pemanfaatan & Testimoni Bantuan</h3>
        <form >
            <label className="block mb-2 text-sm font-bold text-gray-700">Keterangan:</label>
            <textarea className="w-full p-2 mb-4 border border-gray-300 rounded-lg" rows="4" placeholder="Masukkan keterangan dengan menuliskan (tanggal pemanfaatan bantuan, jelaskan cara Anda memanfaatkan bantuan seperti apa)"></textarea>
            <label className="block mb-2 text-sm font-bold text-gray-700">Upload Bukti Pemanfaatan Bantuan:</label>
            <input type="file" className="mb-4 border p-2 w-full rounded-lg" rows="4" />  
            <label className="block mb-2 text-sm font-bold text-gray-700">Apakah Anda Puas dengan Program Bantuan Ini?</label>
            <select className="w-full p-2 mb-4 border border-gray-300 rounded-lg">
                <option value="">Pilih opsi</option>
                <option value="Iya, sangat puas">Iya, sangat puas</option>
                <option value="Tidak puas">Tidak puas</option>
            </select>
            <label className="block mb-2 text-sm font-bold text-gray-700">Testimoni:</label>
            <textarea className="w-full p-2 mb-4 border border-gray-300 rounded-lg" rows="4" placeholder="Masukkan testimoni Anda di sini..."></textarea>
        </form>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg text-sm"
          >
            Batal
          </button>
          <button className="px-4 py-2 bg-[#6D123F] text-white rounded-lg text-sm">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
