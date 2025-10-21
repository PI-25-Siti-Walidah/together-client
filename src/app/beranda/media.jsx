import Image from "next/image"


export default function Media(){
    const mediaPartners = [
        '/partner-1.png',
        '/partner-2.png',
        '/partner-3.png',
        '/partner-4.png',
        '/partner-5.png',
        '/partner-6.png',
        '/partner-7.png'
    ]
    
    return(
        <section className="bg-white px-6 py-14">
      <div className="text-center mb-6">
        <h2 className="text-2xl text-[#6A5ACD] font-bold mb-10">Media Partners</h2>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{
            animation: "scroll 30s linear infinite",
          }}
        >
          {[...mediaPartners, ...mediaPartners].map((img, i) => (
            <div key={i} className="relative h-20 w-40 flex-shrink-0">
            <Image
              src={img}
              alt={`Partner ${i + 1}`}
              className="object-contain"
              fill
            />
            </div>
          ))}
        </div>

        {/* Inline keyframes */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
        </section>
    );
}
