"use client";
import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Steper from "./steper";
import Swal from "sweetalert2";

export default function Modal({
  onOpen,
  onClose,
  formUmum,
  formKategori,
  formBantuan,
  bantuan
}) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const totalSteps = 4 
  const [errors, setErrors] = useState ({})

  const handleNext = () => {
    if(validate()){
    setErrors({});
    setCurrentStep(prev => Math.min(prev + 1, totalSteps))
  }};
  const handleBack = () => {
    setErrors({});
    setCurrentStep(prev => Math.max(prev - 1, 1))
  };

  const validate = () => {
    let tempErrors = {}; 
        if (currentStep === 1) tempErrors = formUmum;
        else if (currentStep === 2) tempErrors = formKategori;
        else if (currentStep === 3) tempErrors = formBantuan;
        else return true;

        let newErrors = {};
        let isValid = true;

        for (const field of tempErrors) {
          if (formData[field.id] === undefined) {
            isValid = false;
            newErrors[field.id] = `${field.label} harus diisi.`;
          } 
          else if (field.type === 'select' && formData[field.id] === 'Pilih status...') {
            isValid = false;
            newErrors[field.id] = `${field.label} harus diisi.`;
          }
        }

        setErrors(newErrors); 
        return isValid;
  };

  const handleInputChange = (e) => {
    const { id, value, type, files, checked } = e.target;
    let dataBaru; 
    
    if (type === 'file') {
        dataBaru = files[0];
    } else if (type === 'checkbox') {
      dataBaru = checked; 
    } else if (type === 'radio' && (value === 'true' || value === 'false')) {
      dataBaru = (value === 'true');
    } else {
        if (type === 'number' && Number(value) < 0) {
            dataBaru = '0';
          } else {
            dataBaru = value;
        }
    }

    if (errors[id]) {
    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };
      delete newErrors[id];
      return newErrors;
    });
  }

    setFormData(prev => ({
        ...prev,
        [id]: dataBaru 
    }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pendaftaran Final:", formData);
    Swal.fire({
        title: "Berhasil",
        text: "Pendaftaran anda berhasil, data anda sedang diverifikasi. Status pengajuan anda bisa dilihat di aktivitas riwayat selengkapnya",
        icon: "success",
      });
    setFormData({});  
    setCurrentStep(1);
    onClose(); 
  };

  if (!onOpen) return null;
  return (
    <dialog id="" className="modal modal-open">
      <div className="modal-box h-4/5 md:w-300 p-9">
        <h3 className="font-bold text-lg">Formulir Pendaftaran Bantuan</h3>
        <Steper currentStep={currentStep} total={totalSteps}/>
        <form onSubmit={handleSubmit}>
            {currentStep === 1 &&<Step1 pertanyaan={formUmum} data={formData} handleChange={handleInputChange} errors={errors}/>}
            {currentStep === 2 &&<Step2 pertanyaan={formKategori} data={formData} handleChange={handleInputChange} errors={errors}/> }
            {currentStep === 3 &&<Step3 pertanyaan={formBantuan} data={formData} handleChange={handleInputChange} errors={errors}/>}
            {currentStep === 4 &&<Step4 data={formData} bantuan={bantuan}/>}
            <button 
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div className="modal-action mt-6">
              {currentStep > 1 && (
              <button type="button" className="btn bg-gray-300 rounded-lg text-sm" onClick={handleBack}>
                Kembali
              </button>
            )}
            {currentStep < totalSteps && (
              <button type="button" className="btn bg-[#6D123F] rounded-xl text-white border-none hover:bg-pink-600" onClick={handleNext}>
                Lanjut
              </button>
            )}
            {currentStep === totalSteps && (
              <button type="submit" className="btn btn-primary rounded-sm text-white">
                Kirim Formulir
              </button>
            )}
            </div>
        </form>
      </div>
    </dialog>
  );
}
