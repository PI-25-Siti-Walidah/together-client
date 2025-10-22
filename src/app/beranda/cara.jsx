export default function Cara(){
    return(
        <section className="py-16 bg-[#6D123F]">
            <div className="mb-10 text-center px-4">
                <h2 className="font-bold text-2xl text-white">
                    Cara Menggunakan ToGetHer
                </h2>
                <p className="text-white text-lg opacity-80 text-center mt-1.5">
                    Langkah mudah untuk mulai mendapatkan bantuan melalui ToGetHer
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-4">
            <div className="stat m-2 shadow rounded-xl bg-[#FFF9F7] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 ">
                <div className="stat m-2 flex flex-col items-center">
                    <img src="/beranda/tutorial/1.png" alt="" 
                    className="stat-figure w-28 h-28"/>
                    <p className="text-sm opacity-80 text-center mt-1.5">Masuk ke bantuan</p>
                </div>
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/2.png" alt="" 
                    className="stat-figure w-28 h-28"/>
                    <p className="text-sm opacity-80 text-center mt-1.5">Filter & pilih bantuan</p>
                </div>
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/3.png" alt="" 
                    className="stat-figure w-28 h-28"/>
                    <p className="text-sm opacity-80 text-center mt-1.5">Baca deskripsi bantuan</p>
                </div>
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/4.png" alt="" 
                    className="stat-figure w-28 h-28"/>
                    <p className="text-sm opacity-80 text-center mt-1.5">Daftar dan isi form bantuan</p>
                </div>
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/5.png" alt="" 
                    className="stat-figure w-28 h-28"/>
                    <p className="text-sm opacity-80 text-center mt-1.5">Tunggu bantuan disetujui</p>
                </div>
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/6.png" alt="" 
                    className="stat-figure w-28 h-28"/>
                    <p className="text-sm opacity-80 text-center mt-1.5">Upload bukti terima & testimoni</p>
                </div>
            </div>
            </div>
        </section>
    )
}
