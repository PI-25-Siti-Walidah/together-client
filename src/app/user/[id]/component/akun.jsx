import { useEffect, useState } from "react";

export default function Akun() {
const [AkunSaya, setAkunSaya] = useState({
  username:'',
  nama:'',
  no_telp:'',
  alamat:'',
})

useEffect(()=>{
  const dataUser = {
  username:'sitindaah11',
  nama:'Siti Indah',
  no_telp:'081234567890',
  alamat:'Sulawesi Selatan',
}

  setAkunSaya(dataUser)
},[])

const handleChange = (e) => {
    const { name, value } = e.target; 
    setAkunSaya(prevState => ({
      ...prevState,
      [name]: value, 
    }));
  };

  return (
    <section>
      <div className="card bg-[#FFF9F7] card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title pl-5">Akun Saya</h2>
          <fieldset className="fieldset w-full p-6">

            <label className="label">Username</label>
            <input
              type="text"
              className="input w-full"
              value={AkunSaya.username}
              onChange={handleChange}
            />

            <label className="label">Nama Lengkap</label>
            <input
              type="text"
              className="input w-full"
              value={AkunSaya.nama}
              onChange={handleChange}
            />

            <label className="label">Nomer WhatApp</label>
            <input type="text" 
            className="input w-full" 
            value={AkunSaya.no_telp}
              onChange={handleChange}
            />

            <label className="label">Alamat</label>
            <input type="text" 
            className="input w-full" 
            value={AkunSaya.alamat}
            onChange={handleChange}
           />

          </fieldset>
          <div className="justify-end card-actions">
            <button className="btn w-fit mr-5 text-[16px] font-medium bg-[#6D123F] text-white rounded-sm border-none hover:bg-pink-600">
              Simpan Akun
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
