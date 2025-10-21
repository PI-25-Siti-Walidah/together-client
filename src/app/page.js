"use client";
import Hero from './beranda/hero'
import Media from './beranda/media'
import Terkini from './beranda/terkini'
import Dampak from './beranda/dampak'
import Bagaimana from './beranda/bagaimana'
import Cara from './beranda/cara'
import Cerita from './beranda/cerita'
import Tentang from './beranda/tentang'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Media />
        <Terkini />
        <Dampak />
        <Bagaimana />
        <Cara />
        <Cerita />
        <Tentang />
      </main>
      <footer>
      </footer>
    </div>
  );
}
