export default function Header(){
    return(
        <section>
            <div className="flex flex-col items-center gap-3 lg:gap-6">
                <h1 className="text-center text-3xl text-[#6D123F] font-bold">Bantuan Ekonomi</h1>
                <img 
                src="/beranda/bantuan.jpg" alt="Gambar bantuan" 
                className="w-96 sm:w-4xl lg:w-6xl object-cover rounded-md"/>
            </div>
        </section>
    )
}