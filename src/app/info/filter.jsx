export default function Filter({ filterKategori, setFilterKategori }) {
  const kategoriList = [
    "Semua",
    "Ekonomi",
    "Pendidikan Anak",
    "Modal Usaha",
    "Pelatihan",
  ];

  return (
    <section className="flex justify-center gap-3 flex-wrap mb-6">
      {kategoriList.map((kategori) => (
        <button
          key={kategori}
          onClick={() => setFilterKategori(kategori)}
          className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition ${
            filterKategori === kategori
              ? "bg-[#6D123F] text-white"
              : "bg-white text-gray-600 border hover:bg-gray-100"
          }`}
        >
          {kategori}
        </button>
      ))}
    </section>
  );
}
