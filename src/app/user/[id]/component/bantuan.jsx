export default function PusatBantuan() {
  return (
    <section>
      <div className="card mt-4 bg-[#FFF9F7] card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title pl-6">Pusat Bantuan</h2>
          <div className="px-6">
            <div className="collapse bg-base-100 border border-base-300 mt-2">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title font-semibold">
                1️⃣ Bagaimana cara mengajukan bantuan?
              </div>
              <div className="collapse-content text-sm">
                Ibu bisa tekan tombol “Daftar Sekarang” di halaman bantuan.
                Setelah itu, isi data yang diminta seperti nama, alamat, dan
                dokumen yang dibutuhkan. Kalau sudah lengkap, kirim dan tunggu
                kabar dari tim ToGetHer.
              </div>
            </div>
            <div className="collapse bg-base-100 border border-base-300 mt-2">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">
                2️⃣ Apa arti status pengajuan saya?
              </div>
              <div className="collapse-content text-sm ">
                ⏳ Sedang Diproses: Data Ibu sedang kami periksa. <br />
                ✅ Diterima: Selamat! Bantuan Ibu disetujui. <br />❌ Ditolak:
                Mohon maaf, ada data yang belum sesuai.
              </div>
            </div>
            <div className="collapse bg-base-100 border border-base-300 mt-2">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">
                3️⃣ Kenapa pengajuan saya ditolak?
              </div>
              <div className="collapse-content text-sm">
                Kadang pengajuan belum bisa diterima karena:
                <br />
                - Dokumen belum lengkap <br />
                - Data rekening tidak sesuai nama <br />- Kuota bantuan bulan
                ini sudah penuh
              </div>
            </div>
            <div className="collapse bg-base-100 border border-base-300 mt-2">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">
                4️⃣ Berapa lama prosesnya?
              </div>
              <div className="collapse-content text-sm">
                Biasanya tim kami butuh waktu 3–5 hari kerja untuk memeriksa
                berkas Ibu. Ibu bisa lihat perkembangannya di menu Riwayat
                Bantuan ya
              </div>
            </div>
            <div className="collapse bg-base-100 border border-base-300 mt-2">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">
                5️⃣ Apakah pengajuan bantuan ini gratis?
              </div>
              <div className="collapse-content text-sm">
                Iya, Bu Semua proses di platform Together gratis. Ibu tidak
                perlu bayar apa pun untuk mendaftar atau mengajukan bantuan.
              </div>
            </div>
            <div className="collapse bg-base-100 border border-base-300 mt-2">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">
                6️⃣ Saya lupa kata sandi, bagaimana cara masuk lagi?
              </div>
              <div className="collapse-content text-sm">
                Tenang, Bu. Di halaman akun ini, tekan tombol “Lupa Kata
                Sandi”, lalu ikuti langkah untuk mengganti sandi baru.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
