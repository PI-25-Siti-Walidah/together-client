// import { Star } from "lucide-react";
// import { CalendarClock } from "lucide-react";

// export default function Card() {
//   return (
//     <section>
//       <div className="card bg-base-100 w-80 shadow-sm">
//         <figure className="rounded-t-lg overflow-hidden">
//           <img
//             src="/beranda/bantuan.jpg"
//             alt="Gambar bantuan"
//             className="w-full h-40 object-cover"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title font-bold text-lg text-gray-800">
//             Voucher Sembako
//           </h2>
//           <div className="flex items-center gap-1">
//             <img
//               src="/beranda/p-logo-1.png"
//               alt="Logo mitra"
//               className="w-6 h-6 items-center"
//             />
//             <h3 className="text-sm text-gray-500">
//               Yayasan Perempuan Indoseia Sejahtera
//             </h3>
//           </div>
//           <div className="flex justify-between text-sm text-gray-600 mt-2">
//             <div className="flex items-center gap-1">
//               <CalendarClock className="w-4 h-4" />
//               <p>7-11-2025</p>
//             </div>
//             <div className="flex items-center gap-1">
//               <Star className="w-4 h-4 text-amber-300" />
//               <p>(100 Tetimoni)</p>
//             </div>
//           </div>
//           <div className="card-actions items-center justify-end flex gap-2 mt-7">
//             <div className="badge badge-soft badge-secondary p-2 text-xs">
//               Bantuan Ekonomi
//             </div>
//             <button className="btn btn-sm rounded-sm bg-[#6D123F] text-white border-none">
//               Detail Bantuan
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client'
import { UsersRound, Building2, CalendarClock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Card({ item }) {
  if (!item) return null;

  const tanggalAkhir = new Date(item.periode_berakhir).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const router = useRouter();

  const handleDetail = () => {
    router.push(`/info/${item._id}`);
  };


  return (
    <section>
      <div className="card bg-base-100 w-80 shadow-sm hover:shadow-md rounded-lg transition-all duration-200">
        <figure className="rounded-t-lg overflow-hidden">
          <img
            src={item.foto || "/beranda/bantuan.jpg"}
            alt={item.judul}
            className="w-full h-40 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-lg h-14 text-gray-800 line-clamp-2">
            {item.judul}
          </h2>
          <div className="flex items-center gap-1">
            {item.mitra_id?.logo ? (
              <img
                src={item.mitra_id.logo}
                alt={item.mitra_id?.nama}
                className="w-6 h-6 rounded-full object-contain border border-gray-200"
              />
            ) : (
              <div className="w-6 h-6 bg-gray-200 rounded-full" />
            )}
            <h3 className="text-sm text-gray-500">
              {item.mitra_id?.nama || "Tanpa Mitra"}
            </h3>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <div className="flex items-center gap-1">
              <CalendarClock className="w-4 h-4" />
              <p>
                {tanggalAkhir}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <UsersRound className="w-4 h-4 text-gray-600" />
              <p>{item.jumlah_penerima} penerima</p>
            </div>
          </div>
          <div className="card-actions items-center justify-end flex gap-2 mt-7">
            <div className="badge bg-pink-200 text-pink-700 badge-secondary p-2 text-xs">
              {item.kategori_id?.nama_kategori || "Bantuan"}
            </div>
            <button 
            onClick={handleDetail}
            className="btn btn-sm rounded-sm bg-[#6D123F] text-white border-none">
              Detail Bantuan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
