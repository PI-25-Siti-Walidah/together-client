export default function Jawaban() {
  const dataJawaban = {
    general: {
      namaLengkap: "Siti Rahma",
      usia: 37,
      pekerjaan: "Penjahit Rumahan",
      penghasilanBulanan: "Rp 1.500.000",
      kondisiTempatTinggal: "Kontrak",
      tanggungan: 2,
    },
    kategori: "Ekonomi",
    kategoriSpesifik: {
      pengeluaranBulanan: "Rp 2.500.000",
      alasanMendaftar: "Kesulitan memenuhi kebutuhan pokok harian",
    },
    bantuanSpesifik: {
      kebutuhanPangan: "Sembako",
      dekatAlfamart: "Iya",
    },
  };

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold text-[#6D123F] mb-3">
        Data Pendaftaran
      </h2>

      <div className="text-sm sm:text-base text-gray-700 space-y-2">
        <p>
          <strong>Nama Lengkap:</strong> {dataJawaban.general.namaLengkap}
        </p>
        <p>
          <strong>Usia:</strong> {dataJawaban.general.usia} tahun
        </p>
        <p>
          <strong>Pekerjaan:</strong> {dataJawaban.general.pekerjaan}
        </p>
        <p>
          <strong>Penghasilan Bulanan:</strong>{" "}
          {dataJawaban.general.penghasilanBulanan}
        </p>
        <p>
          <strong>Status Tempat Tinggal:</strong>{" "}
          {dataJawaban.general.kondisiTempatTinggal}
        </p>
        <p>
          <strong>Jumlah Tanggungan:</strong> {dataJawaban.general.tanggungan}{" "}
          orang
        </p>
        <hr className="my-3 border-gray-200" />

        <p>
          <strong>Kategori Bantuan:</strong> {dataJawaban.kategori}
        </p>
        <p>
          <strong>Pengeluaran Bulanan:</strong>{" "}
          {dataJawaban.kategoriSpesifik.pengeluaranBulanan}
        </p>
        <p>
          <strong>Alasan Mendaftar:</strong>{" "}
          {dataJawaban.kategoriSpesifik.alasanMendaftar}
        </p>
        <hr className="my-3 border-gray-200" />

        <p>
          <strong>Kebutuhan Pangan Mendesak:</strong>{" "}
          {dataJawaban.bantuanSpesifik.kebutuhanPangan}
        </p>
        <p>
          <strong>Akses ke Alfamart:</strong>{" "}
          {dataJawaban.bantuanSpesifik.dekatAlfamart}
        </p>
      </div>
    </section>
  );
}
