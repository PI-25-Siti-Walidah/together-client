"use client";

import { useState } from "react";
import Header from "./component/header"
import Spesifikasi from "./component/spesifikasi"
import Deskripsi from "./component/deskripsi"
import Daftar from "./component/daftar"
import Testi from "./component/testi"
import Modal from "./component/modal/modal.js";

export default function dinfo(){
const [isModalOpen, setIsModalOpen] = useState(false);

const semuaDataBantuan = 
    {
    id:1,
    judul: 'Voucher Sembako',
    foto: '/beranda/bantuan.jpg',
    isActive:'Berlangsung',
    periodeMulai: '20 Nov 2025',
    periodeSelesai:'7 Nov 2025',
    mitra: "Yayasan Peduli Bangsa",
    kategori: 'Bantuan Ekonomi',
    kuota: 50,
    benefit:'Diskon 70% untuk semua sembako',
    deskripsi: ' Program Voucher Sembako merupakan salah satu bentuk bantuan ekonomi yang diberikan kepada keluarga kurang mampu, khususnya perempuan kepala rumah tangga. Program ini bertujuan untuk meringankan beban kebutuhan pokok sehari-hari dan meningkatkan ketahanan pangan keluarga. Setiap penerima bantuan berhak mendapatkan voucher senilai Rp 500.000 yang dapat ditukarkan dengan kebutuhan pokok (beras, minyak goreng, telur, gula, dll.) di minimarket maupun pasar tradisional yang telah bekerja sama dengan ToGetHer. Dengan adanya program ini, diharapkan keluarga penerima tidak hanya dapat memenuhi kebutuhan dasar, tetapi juga memiliki kesempatan untuk lebih fokus pada pengembangan keluarga, pendidikan anak, serta peningkatan kualitas hidup.',
    syarat:  [
            "Berstatus keluarga kurang mampu dengan penghasilan di bawah Rp2.000.000 per bulan.",
            "Memiliki KTP dan KK yang masih berlaku.",
            "Belum menerima bantuan serupa dari program pemerintah/lembaga lain dalam periode yang sama.",
            "Voucher hanya berlaku pada periode program yang telah ditentukan dan tidak dapat diuangkan.",
    ]
}

const formUmum =[
    { id: '1', label: 'NIK / Nomor KTP', type: 'number', required: true },
    { id: '2', label: 'Status tempat tinggal', type: 'select', required: true, options: ['Pilih status...', 'Milik Sendiri', 'Sewa/Kontrak', 'Menumpang'] },
    { id: '3', label: 'Usia', type: 'number', required: true },
    { id: '4', label: 'Jumlah tanggungan', type: 'text', required: true },
    { id: '5', label: 'Pekerjaan utama saat ini', type: 'text', required: true },
    { id: '6', label: 'Pendapatan rata-rata per bulan', type: 'number', required: true },
    { id: '7', label: 'Foto Kartu Keluarga (KK)', type: 'file', required: true },
    { id: '8', label: 'Foto SKTM', type: 'file', required: true },
    { id: '9', label: 'Foto Surat Pendapatan', type: 'file', required: true },
]

const formKategori = [
    { id: '1', label: 'Jumlah anggota keluarga bekerja', type: 'number', required: true },
    { id: '2', label: 'Total penghasilan keluarga per bulan', type: 'number', required: true },
    { id: '3', label: 'Pengeluaran rutin (sewa, listrik, sekolah, makan)', type: 'number', required: true },
    { id: '4', label: 'Kendala ekonomi paling mendesak', type: 'text', required: true },
    { id: '5', label: 'Apakah ada anggota keluarga yang sakit menahun / disabilitas?', type: 'bolean', required: true },
]

const formBantuan = [
    { id: '1', label: 'Apa kebutuhan pangan utama (beras, lauk, sayur)?', type: 'text', required: true },
    { id: '2', label: 'Akses tempat pengambilan bantuan?', type: 'text', required: true },
    { id: '3', label: 'Dalam sebulan terakhir, adakah hari di mana keluarga makan kurang dari 2 kali sehari?', type: 'text', required: true },
    { id: '4', label: 'Apakah lokasi tempat tinggal sulit dijangkau untuk pembelian bahan pokok (pasar jauh, transportasi sulit)?', type: 'text', required: true },
]

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
            <Spesifikasi bantuan={bantuan} />
            <div className="lg:flex lg:gap-3">
                <Deskripsi deskripsi={bantuan.deskripsi} syarat={bantuan.syarat}/>
                <div>
                    <Daftar 
                    onOpen={() => setIsModalOpen(true)}/>
                    <Testi testimoni={testimoni}/>  
                </div>
            </div>
            <Modal
            onOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            formUmum={formUmum}
            formKategori={formKategori}
            formBantuan={formBantuan}
            bantuan={bantuan}
            />
        </section>
    )
}