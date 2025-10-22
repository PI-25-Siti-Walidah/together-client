export default function Cara(){
    return(
        <section className="py-16 bg-[#6D123F]">
            <div className="flex flex-col items-center mb-6">
                <h2 className="font-bold text-2xl text-white">
                    Cara Menggunakan ToGetHer
                </h2>
                <p className="text-white text-lg opacity-80">
                    Langkah mudah untuk mulai mendapatkan bantuan melalui ToGetHer
                </p>
            </div>
            <div className="stat shadow grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-8 ">
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/1.png" alt="" 
                    className="stat-figure w-48 h-48"/>
                    <p className="text-white text-sm opacity-80">Masuk ke bantuan</p>
                </div>
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/2.png" alt="" 
                    className="stat-figure w-48 h-48"/>
                    <p className="text-white text-sm opacity-80">Filter & pilih bantuan</p>
                </div>
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/3.png" alt="" 
                    className="stat-figure w-48 h-48"/>
                    <p className="text-white text-sm opacity-80">Baca deskripsi bantuan</p>
                </div>
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/4.png" alt="" 
                    className="stat-figure w-48 h-48"/>
                    <p className="text-white text-sm opacity-80">Daftar dan isi form bantuan</p>
                </div>
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/5.png" alt="" 
                    className="stat-figure w-48 h-48"/>
                    <p className="text-white text-sm opacity-80">Tunggu bantuan disetujui</p>
                </div>
                <div className="stat flex flex-col items-center">
                    <img src="/beranda/tutorial/5.png" alt="" 
                    className="stat-figure w-48 h-48"/>
                    <p className="text-white text-sm opacity-80">Upload bukti terima & testimoni</p>
                </div>
            </div>
        </section>
    )
}
