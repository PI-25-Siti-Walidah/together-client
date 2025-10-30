'use client'
export default function Filter({ filterStatus, setFilterStatus }) {
  const statusList = ["Semua", "Ditinjau", "Diterima", "Ditolak", "Selesai"];

  return (
    <section className="flex justify-center gap-2 flex-wrap mb-6 lg:gap-3">
      {statusList.map((status) => (
        <button
          key={status}
          onClick={() => setFilterStatus(status)}
          className={`px-3 py-2 lg:px-4 rounded-full text-sm font-base transition ${
            filterStatus === status
              ? "bg-[#6D123F] text-white"
              : "bg-white text-gray-600 border hover:bg-gray-100"
          }`}
        >
          {status}
        </button>
      ))}
    </section>
  );
}
