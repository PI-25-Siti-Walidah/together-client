export default function Sandi() {
  return (
    <section>
      <div className="card mt-4 bg-[#FFF9F7] card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title pl-5">Ubah Sandi</h2>
          <fieldset className="fieldset w-full p-6">

            <label className="label">Kata Sandi Lama</label>
            <input
              type="text"
              className="input w-full"
            />

            <label className="label">Kata Sandi Baru</label>
            <input
              type="text"
              className="input w-full"
            />

            <label className="label">Konfirmasi Kata Sandi Baru</label>
            <input type="text" 
            className="input w-full" 
            />

          </fieldset>
          <div className="justify-end card-actions ">
            <button className="mr-5 text-sm text-right text-[#6D123F] hover:text-gray-400 cursor-pointer">
              Lupa Kata Sandi?
            </button>
          </div>  
          <div className="justify-end card-actions ">
            <button className="btn w-fit mr-5 text-[16px] font-medium bg-[#6D123F] text-white rounded-sm border-none hover:bg-pink-600">
              Ubah Sandi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
