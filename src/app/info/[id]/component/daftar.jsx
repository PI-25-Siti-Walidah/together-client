export default function Daftar({ onOpen }) {
  return (
    <section className="mt-3">
      <div className="card w-full bg-base-100 lg:w-md card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-[#6D123F] font-bold">
            Dukungan Ini Hadir Untukmu
          </h2>
          <p className="opacity-80">
            Daftarkan dirimu sekarang dan akses bantuan dengan mudah.
          </p>
          <div className="justify-end card-actions">
            <button
              onClick={onOpen}
              className="btn w-full bg-[#6D123F] hover:bg-pink-600 rounded-sm border-none text-white"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
