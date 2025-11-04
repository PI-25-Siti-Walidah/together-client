export default function Header({judul, foto}){
    return(
        <section>
            <div className="flex flex-col items-center gap-3 lg:gap-6">
                <h1 className="text-center text-3xl text-[#6D123F] font-bold">{judul}</h1>
                <img 
                src={foto} 
                alt={`Gambar bantuan ${judul}`}
                className="w-xl sm:w-4xl lg:w-6xl object-cover rounded-md"/>
            </div>
        </section>
    )
}