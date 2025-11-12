export default function TentangTogether() {
  return (
    <section>
      <div className="card mt-6 bg-[#F4F4FF] rounded-2xl shadow-md">
        <div className="card-body p-6 sm:p-8 text-gray-800 ">
          <h2 className="card-title pl-6">ToGetHer</h2>
          <div className="px-2">
            <div className="collapse bg-white border border-none mt-2">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title font-semibold">
                Tentang Aplikasi
              </div>
              <div className="collapse-content text-sm">
                ToGether adalah platform digital yang memudahkan proses
                pengajuan dan penyaluran bantuan secara transparan dan
                terorganisir.
                <br />
                Aplikasi ini dirancang untuk membantu masyarakat agar dapat
                memantau status bantuan secara real-time dan meminimalkan
                kesalahan administrasi.
              </div>
            </div>
            <div className="collapse bg-white border border-none mt-2">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">
                Informasi Teknis
              </div>
              <div className="collapse-content text-sm ">
                Versi Aplikasi: 1.0.1 <br />
                Tanggal Rilis Terbaru: 7 November 2025 <br />
                Dikembangkan oleh: Tim ToGether
              </div>
            </div>
            <div className="collapse bg-white border border-none mt-2">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">
                Kontak & Dukungan
              </div>
              <div className="collapse-content text-sm">
                Jika kamu mengalami kendala atau ingin memberikan masukan,
                silakan hubungi tim kami melalui: <br />
                📧 support@together.id <br />
                Tim kami akan merespons setiap laporan dalam waktu maksimal 3×24
                jam kerja
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
