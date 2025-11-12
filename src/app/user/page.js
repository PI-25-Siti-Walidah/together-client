"use client";
import Avatar from "./component/avatar";
import Akun from "./component/akun";
import Sandi from "./component/sandi";
import Navbar from "@/app/navbar/navbar";
import PusatBantuan from "./component/bantuan";
import TentangTogether from "./component/tentang";
import Footer from "@/app/footer/footer";

export default function UserAkun() {
  return (
    <div className="min-h-screen flex flex-col bg-white transition-colors duration-300">
      <Navbar />

      <main className="flex-1 container mx-auto pt-30 px-4 sm:px-6 lg:px-24 pb-16">
        <div className="flex flex-col items-center gap-8">
          <Avatar />
          <Akun />
          <Sandi />

          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-full lg:w-1/2">
              <PusatBantuan />
            </div>
            <div className="w-full lg:w-1/2">
              <TentangTogether />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
