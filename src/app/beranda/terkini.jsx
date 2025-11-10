"use client";

import { useEffect } from "react";
import Card from "./card";
import { useBantuanStore } from "@/lib/store/bantuanStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Terkini() {
  const { bantuan, fetchBantuan, loading, error } = useBantuanStore();

  useEffect(() => {
    fetchBantuan();
  }, [fetchBantuan]);

  return (
    <section className="w-full h-fit bg-[#6D123F] py-12 px-4 my-11 md:px-9">
      <div className="mb-4 text-center">
        <h1 className="pb-4 font-bold text-3xl text-white">Bantuan Terkini</h1>
        <p className="text-white text-balance opacity-80">
          Lihat bantuan yang sedang berjalan
        </p>
      </div>

      {loading && <p className="text-center text-white">Memuat data...</p>}
      {error && <p className="text-center text-red-300">{error}</p>}

      <Carousel
        opts={{ align: "start" }}
        className="relative p-4 sm:p-6 md:p-8 w-full max-w-[95%] md:max-w-6xl mx-auto overflow-visible"
      >
        <CarouselContent className="lg:-ml-4">
          {bantuan.map((item) => (
            <CarouselItem
              key={item._id}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-3 sm:p-4">
                <Card item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="
            absolute left-2 top-1/2 -translate-y-1/2
            bg-white/25 hover:bg-white/50
            text-white hover:text-[#6D123F]
            shadow-sm hover:shadow-md
            transition-all duration-300 ease-in-out
            p-2 rounded-full backdrop-blur-sm
            sm:left-4 md:left-[-2.5rem] lg:left-[-3rem]
            cursor-pointer hover:scale-110 active:scale-95
          "
        />
        <CarouselNext
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            bg-white/25 hover:bg-white/50
            text-white hover:text-[#6D123F]
            shadow-sm hover:shadow-md
            transition-all duration-300 ease-in-out
            p-2 rounded-full backdrop-blur-sm
            sm:right-4 md:right-[-2.5rem] lg:right-[-3rem]
            cursor-pointer hover:scale-110 active:scale-95
          "
        />
      </Carousel>
    </section>
  );
}
