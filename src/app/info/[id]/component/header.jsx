export default function Header({ judul, foto }) {
  return (
    <section className="w-full mb-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#6D123F] font-bold">
          {judul}
        </h1>
        <img
          src={foto}
          alt={`Gambar bantuan ${judul}`}
          className="w-full max-w-5xl object-cover rounded-md shadow-md aspect-video"
        />
      </div>
    </section>
  );
}
