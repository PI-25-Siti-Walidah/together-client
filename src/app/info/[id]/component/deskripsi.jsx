export default function Deskripsi({ deskripsi, syarat }) {
  return (
    <section className="w-full">
      <div className="card bg-base-100 shadow-sm rounded-lg">
        <div className="card-body">
          <h2 className="card-title text-[#6D123F] font-bold">Deskripsi</h2>
          <p className="text-justify opacity-80 text-sm sm:text-base">
            {deskripsi}
          </p>

          <h2 className="card-title text-[#6D123F] font-bold mt-4">
            Syarat & Ketentuan
          </h2>
          <ul className="list-disc list-inside text-justify opacity-80 text-sm sm:text-base">
            {syarat?.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
