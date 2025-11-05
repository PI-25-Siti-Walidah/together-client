"use client";
import Hero from './beranda/hero'
import Media from './beranda/media'
import Terkini from './beranda/terkini'
import Dampak from './beranda/dampak'
import Bagaimana from './beranda/bagaimana'
import Cara from './beranda/cara'
import Cerita from './beranda/cerita'
import Tentang from './beranda/tentang'
import Footer from './footer/footer';
import Navbar from './navbar/navbar'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className='bg-[#FFF9F7]'>
        <Hero />
        <Media />
        <Terkini />
        <Dampak />
        <Bagaimana />
        <Cara />
        <Cerita />
        <Tentang />
        <Footer />
        <Navbar />
      </main>
      <footer>
      </footer>
    </div>
  );
}
