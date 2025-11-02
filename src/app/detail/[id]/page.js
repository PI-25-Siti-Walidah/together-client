"use client";

import { useState } from "react";
import Header from "./component/header"
import Spesifikasi from "./component/spesifikasi"
import Deskripsi from "./component/deskripsi"
import Daftar from "./component/daftar"
import Testi from "./component/testi"

export default function dinfo(){
const semuaDataBantuan = 
    {
    id:"1",
    judul: 'Voucher Sembako',
    foto: '/beranda/bantuan.jpg',
    isActive:'Berlangsung',
    periodeMulai: '20 Nov 2025',
    periodeSelesai:'7 Nov 2025',
    mitra: 'Yayasan Indonesia Emas',
    kategori: 'Bantuan Ekonomi',
    kuota: 50,
    benefit:'Diskon 70% untuk semua sembako',
    deskripsi: 'Program Voucher Sembako merupakan salah satu bentuk bantuan ekonomi...',
    syarat:  [
            "Berstatus keluarga kurang mampu dengan penghasilan di bawah Rp2.000.000 per bulan.",
            "Memiliki KTP dan KK yang masih berlaku.",
            "Belum menerima bantuan serupa dari program pemerintah/lembaga lain dalam periode yang sama.",
            "Voucher hanya berlaku pada periode program yang telah ditentukan dan tidak dapat diuangkan.",
    ]}

const testimoni = [
    {
      quote:
        "Pelatihan menjahit dan modal usaha kecil membuat saya bisa membuka konveksi rumahan. Sekarang penghasilan stabil dan anak-anak bisa sekolah kembali.",
      name: "Siti Nurhayati",
      domisili: "Banyuwangi",
    },
    {
      quote:
        "Lewat pelatihan pertanian, saya belajar teknik bercocok tanam yang tepat. Hasil panen meningkat dan bisa dijual ke pasar lokal.",
      name: "Ratna Dewi",
      domisili: "Garut",
    },
    {
      quote:
        "Bantuan modal dan pendampingan pemasaran membantu saya memulai usaha katering kecil. Pesanan kini datang rutin setiap minggu.",
      name: "Ayu Pramesti",
      domisili: "Yogyakarta",
    },
  ];

  const bantuan = semuaDataBantuan

    return(
        <section className=" flex flex-col items-center m-6 lg:my-12">
            <Header judul={bantuan.judul} foto={bantuan.foto}/>
            <Spesifikasi />
            <div className="lg:flex lg:gap-3">
                <Deskripsi />
                <div>
                    <Daftar />
                    <Testi />  
                </div>
            </div>
        </section>
    )
}