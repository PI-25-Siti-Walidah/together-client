import { UsersRound, CalendarClock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Card({ item }) {
  if (!item) return null;

  const tanggalAkhir = new Date(item.periode_berakhir).toLocaleDateString(
    "id-ID",
    { day: "numeric", month: "short", year: "numeric" }
  );
  const router = useRouter();

  const handleDetail = () => {
    router.push(`/info/${item._id}`);
  };

  return (
    <div className="bg-white text-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col h-full">
      <figure className="h-48 sm:h-52 lg:h-56 overflow-hidden">
        <img
          src={item.foto || "/beranda/bantuan.jpg"}
          alt={item.judul}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>

      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h2 className="font-semibold text-base sm:text-lg truncate mb-2">
            {item.judul}
          </h2>

          <div className="flex items-center gap-2 mb-3">
            {item.mitra_id?.logo ? (
              <img
                src={item.mitra_id.logo}
                alt={item.mitra_id?.nama}
                className="w-6 h-6 rounded-full border border-gray-200 object-contain"
              />
            ) : (
              <div className="w-6 h-6 bg-gray-200 rounded-full" />
            )}
            <span className="text-sm text-gray-500">
              {item.mitra_id?.nama || "Tanpa Mitra"}
            </span>
          </div>

          <div className="flex justify-between text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <CalendarClock className="w-4 h-4" />
              <p>{tanggalAkhir}</p>
            </div>
            <div className="flex items-center gap-1">
              <UsersRound className="w-4 h-4" />
              <p>{item.jumlah_penerima} penerima</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="bg-pink-100 text-pink-700 text-xs font-medium px-3 py-1 rounded-full">
            {item.kategori_id?.nama_kategori || "Bantuan"}
          </span>
          <button
            onClick={handleDetail}
            className="btn btn-sm bg-[#6D123F] text-white border-none hover:bg-pink-600 px-4 rounded-md"
          >
            Detail Bantuan
          </button>
        </div>
      </div>
    </div>
  );
}
