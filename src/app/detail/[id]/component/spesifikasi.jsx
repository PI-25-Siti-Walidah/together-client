import { CalendarClock, CalendarDays, HandHeart, Folder, Users,Package2 } from "lucide-react";


export default function Spesifikasi({bantuan}) {
  return (
    <section className="mt-3.5 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 ">
        <div className="w-52 h-20 bg-[#FCC0C5] text-[#6D123F] rounded-md font-semibold text-xl flex items-center justify-center sm:w-44 lg:w-44 gap-4 shadow-md">
          <CalendarClock/>
          <p className="text-lg font-medium">{bantuan.isActive}</p>
        </div>
        <div className="flex items-center justify-start gap-3 w-52 h-20 p-2.5 bg-[#FCC0C5] text-[#6D123F] rounded-md sm:w-44 lg:w-44 shadow-md">
          <CalendarDays className="font-bold" />
          <div>
            <h6 className="font-bold">Periode</h6>
            <p className="text-sm">{bantuan.periodeMulai} sampai {bantuan.periodeSelesai}</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-3 w-52 h-20 p-2.5 bg-[#FCC0C5] text-[#6D123F] rounded-md sm:w-44 lg:w-44 shadow-md">
          <HandHeart className="font-bold"/>
          <div>
            <h6 className="font-bold">Donatur</h6>
            <p className="text-sm">{bantuan.mitra}</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-3 w-52 h-20 p-2.5 bg-[#FCC0C5] text-[#6D123F] rounded-md sm:w-44 lg:w-44 shadow-md">
          <Folder className="font-bold"/>
          <div>
          <h6 className="font-bold">Kategori</h6>
          <p className="text-sm">{bantuan.kategori}</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-3 w-52 h-20 p-2.5 bg-[#FCC0C5] text-[#6D123F] rounded-md sm:w-44 lg:w-44 shadow-md">
          <Users className="font-bold"/>
          <div>
          <h6 className="font-bold">Kuota</h6>
          <p className="text-sm">{bantuan.kuota} penerima</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-3 w-52 h-20 p-2.5 bg-[#FCC0C5] text-[#6D123F] rounded-md sm:w-44 lg:w-44 shadow-md">
          <Package2 className="font-bold"/>
          <div>
          <h6 className="font-bold">Benefit</h6>
          <p className="text-sm">{bantuan.benefit}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
