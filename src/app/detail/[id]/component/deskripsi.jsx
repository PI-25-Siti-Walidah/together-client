export default function Deskripsi() {
const isi = [
    {
        syarat: [
            "Berstatus keluarga kurang mampu dengan penghasilan di bawah Rp2.000.000 per bulan.",
            "Memiliki KTP dan KK yang masih berlaku.",
            "Belum menerima bantuan serupa dari program pemerintah/lembaga lain dalam periode yang sama.",
            "Voucher hanya berlaku pada periode program yang telah ditentukan dan tidak dapat diuangkan.",
        ],
        
    },
]
const syaratIsi = isi[0]?.syarat

  return (
    <section className="mt-3 ">
      <div className="card lg:w-2xl bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-[#6D123F] font-bold">Deskripsi</h2>
          <p className="text-justify opacity-80">
            Program Voucher Sembako merupakan salah satu bentuk bantuan ekonomi
            yang diberikan kepada keluarga kurang mampu, khususnya perempuan
            kepala rumah tangga. Program ini bertujuan untuk meringankan beban
            kebutuhan pokok sehari-hari dan meningkatkan ketahanan pangan
            keluarga. Setiap penerima bantuan berhak mendapatkan voucher senilai
            Rp 500.000 yang dapat ditukarkan dengan kebutuhan pokok (beras,
            minyak goreng, telur, gula, dll.) di minimarket maupun pasar
            tradisional yang telah bekerja sama dengan ToGetHer. Dengan adanya
            program ini, diharapkan keluarga penerima tidak hanya dapat memenuhi
            kebutuhan dasar, tetapi juga memiliki kesempatan untuk lebih fokus
            pada pengembangan keluarga, pendidikan anak, serta peningkatan
            kualitas hidup.
          </p>
          <h2 className="card-title text-[#6D123F] font-bold">Syarat & Ketentuan</h2>
            <ul className="text-justify opacity-80">
                {syaratIsi?.map((s, i) => (
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
