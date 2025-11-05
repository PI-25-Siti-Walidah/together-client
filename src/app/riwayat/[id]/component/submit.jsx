import { useRouter } from "next/navigation";
export default function Submit() {
    const router = useRouter();

      const handleBeranda = () => {
    router.push("/");
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-100 md:w-200">
        <h2 className="text-lg text-center font-bold text-[#6D123F] mb-4">Terima Kasih!</h2>
        <p className="text-lg  text-gray-600 mb-12">Telah Mengisi Form Penerimaan Bantuan. Manfaatkanlah bantuan ini dengan bijak.</p>
        <div className="flex justify-end gap-2">
          <button 
          onClick={handleBeranda}
          className="px-4 py-2 bg-[#6D123F] text-white rounded-lg text-sm">
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}
