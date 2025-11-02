export default function Deskripsi({deskripsi, syarat}) {

  return (
    <section className="mt-3 ">
      <div className="card lg:w-2xl bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-[#6D123F] font-bold">Deskripsi</h2>
          <p className="text-justify opacity-80">
           {deskripsi}
          </p>
          <h2 className="card-title text-[#6D123F] font-bold">Syarat & Ketentuan</h2>
            <ul className="text-justify opacity-80">
                {syarat?.map((s, i) => (
                <li key={i}
                className="">
                    - {s}
                </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
