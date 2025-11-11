import {
  CalendarClock,
  CalendarDays,
  HandHeart,
  Folder,
  Users,
  Package2,
} from "lucide-react";

export default function Spesifikasi({ bantuan }) {
  return (
    <section className="mt-5">
      <div
        className="
          grid
          grid-cols-2      /* 2 kolom di mobile */
          md:grid-cols-6   /* mulai dari tablet ke atas = 6 kolom */
          gap-4
          justify-items-center
        "
      >
        {/* Status */}
        <div className="flex w-full max-w-[180px] h-24 p-3 bg-[#FCC0C5] text-[#6D123F] rounded-xl shadow-md gap-3 items-center">
          <CalendarClock className="flex-shrink-0" />
          <div>
            <h6 className="font-bold leading-tight">Status</h6>
            <p className="text-sm">{bantuan.isActive}</p>
          </div>
        </div>

        {/* Periode */}
        <div className="flex w-full max-w-[180px] h-24 p-3 bg-[#FCC0C5] text-[#6D123F] rounded-xl shadow-md gap-3 items-center">
          <CalendarDays className="flex-shrink-0" />
          <div>
            <h6 className="font-bold leading-tight">Periode</h6>
            <p className="text-sm">
              {bantuan.periodeMulai} - {bantuan.periodeSelesai}
            </p>
          </div>
        </div>

        {/* Donatur */}
        <div className="flex w-full max-w-[180px] h-24 p-3 bg-[#FCC0C5] text-[#6D123F] rounded-xl shadow-md gap-3 items-center">
          <HandHeart className="flex-shrink-0" />
          <div>
            <h6 className="font-bold leading-tight">Donatur</h6>
            <p className="text-sm">{bantuan.mitra}</p>
          </div>
        </div>

        {/* Kategori */}
        <div className="flex w-full max-w-[180px] h-24 p-3 bg-[#FCC0C5] text-[#6D123F] rounded-xl shadow-md gap-3 items-center">
          <Folder className="flex-shrink-0" />
          <div>
            <h6 className="font-bold leading-tight">Kategori</h6>
            <p className="text-sm">{bantuan.kategori}</p>
          </div>
        </div>

        {/* Kuota */}
        <div className="flex w-full max-w-[180px] h-24 p-3 bg-[#FCC0C5] text-[#6D123F] rounded-xl shadow-md gap-3 items-center">
          <Users className="flex-shrink-0" />
          <div>
            <h6 className="font-bold leading-tight">Kuota</h6>
            <p className="text-sm">{bantuan.kuota} penerima</p>
          </div>
        </div>

        {/* Benefit */}
        <div className="flex w-full max-w-[180px] h-24 p-3 bg-[#FCC0C5] text-[#6D123F] rounded-xl shadow-md gap-3 items-center">
          <Package2 className="flex-shrink-0" />
          <div>
            <h6 className="font-bold leading-tight">Benefit</h6>
            <p className="text-sm">{bantuan.benefit}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
