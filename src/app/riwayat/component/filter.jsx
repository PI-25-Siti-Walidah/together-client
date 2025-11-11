"use client";

export default function Filter({ filterStatus, setFilterStatus }) {
  const statusList = ["Semua", "Diproses", "Diterima", "Ditolak", "Selesai"];

  return (
    <section className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
      {statusList.map((status) => (
        <button
          key={status}
          onClick={() => setFilterStatus(status)}
          className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border cursor-pointer transition-all duration-300 ${
            filterStatus === status
              ? "bg-[#6D123F] text-white border-[#6D123F]"
              : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
          }`}
        >
          {status}
        </button>
      ))}
    </section>
  );
}
