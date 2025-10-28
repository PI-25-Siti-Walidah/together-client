import Card from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Terkini() {
  return (
    <section className="w-full h-fit bg-[#6D123F] py-12 px-4 md:px-9">
      <div className="mb-4 text-center">
        <h1 className="font-bold text-2xl text-white">Bantuan Terkini</h1>
        <p className="text-white text-lg opacity-80">
          Lihat bantuan yang sedang berjalan
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="p-5 w-full max-w-sm lg:max-w-5xl mx-auto"
      >
        <CarouselContent className="lg:-ml-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}