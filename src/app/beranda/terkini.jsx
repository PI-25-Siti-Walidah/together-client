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
    <section className="w-full h-fit bg-[#6D123F] p-9 flex flex-col items-center">
      <div className="mb-3 flex items-center flex-col gap-1">
        <h1 className="font-bold text-2xl text-white">Bantuan Terkini</h1>
        <p className="text-white text-lg opacity-80">
          Lihat bantuan yang sedang berjalan
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="flex flex-row gap-5 md:gap-0 ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-5/6 md:basis-1/2 lg:basis-1/3"
            >
              <Card />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-12 hidden md:flex" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-12 hidden md:flex" />
      </Carousel>
    </section>
  );
}