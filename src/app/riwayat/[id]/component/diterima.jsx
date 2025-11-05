export default function Diterima({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-100 md:w-200">
        <h3 className="text-lg font-bold text-[#6D123F] mb-4">From Bukti Penerimaan</h3>
        <form >
            <label className="block mb-2 text-sm font-bold text-gray-700">Keterangan:</label>
            <textarea className="w-full p-2 mb-4 border text-sm border-gray-300 rounded-lg" rows="4" placeholder="Masukkan keterangan dengan menuliskan (tanggal diterima, bentuk benefit bantuan)"></textarea>
            <label className="block mb-2 text-sm font-bold text-gray-700">Upload Bukti Penerimaan:</label>
            <input type="file" className="mb-4 border p-2 w-full rounded-lg" rows="4" />  
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
