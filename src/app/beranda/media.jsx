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
        <section className="py-12 mt-11">
            <div className="max-w-3xl lg:max-w-5xl mx-auto text-center mb-8">
                <div className="text-3xl font-bold lg:max-w-5xl text-[#6D123F] mb-4 text-balance">Media Partners</div>
            </div>

            <div className="overflow-hidden w-full">
                <div className="flex gap-12 whitespace-nowrap"
                style={{animation: "scroll 30s linear infinite"}}>
                    {[...mediaPartners, ...mediaPartners].map((img, i) => (
                    <div key={i} className="relative h-20 w-40 flex-shrink-0">
                        <Image
                        src={img}
                        alt={`Partner ${i + 1}`}
                        className="object-contain"
                        fill />
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
