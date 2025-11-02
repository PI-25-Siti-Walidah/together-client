export default function Deskripsi({deskripsi, syarat}) {
// const isi = [
//     {
//         syarat: [
//             "Berstatus keluarga kurang mampu dengan penghasilan di bawah Rp2.000.000 per bulan.",
//             "Memiliki KTP dan KK yang masih berlaku.",
//             "Belum menerima bantuan serupa dari program pemerintah/lembaga lain dalam periode yang sama.",
//             "Voucher hanya berlaku pada periode program yang telah ditentukan dan tidak dapat diuangkan.",
//         ],
        
//     },
// ]

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
