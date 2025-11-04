"use client";
import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Steper from "./steper";

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

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleInputChange = (e) => {
    const { id, value, type, files } = e.target;
    let dataBaru; 
    
    if (type === 'file') {
        dataBaru = files[0];
    } else {
        if (type === 'number' && Number(value) < 0) {
            dataBaru = '0';
          } else {
            dataBaru = value;
        }
    }
    setFormData(prev => ({
        ...prev,
        [id]: dataBaru 
    }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pendaftaran Final:", formData);
    alert("Pendaftaran berhasil dikirim!");
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
            {currentStep === 1 &&<Step1 pertanyaan={formUmum} data={formData} handleChange={handleInputChange}/>}
            {currentStep === 2 &&<Step2 pertanyaan={formKategori} data={formData} handleChange={handleInputChange}/> }
            {currentStep === 3 &&<Step3 pertanyaan={formBantuan} data={formData} handleChange={handleInputChange}/>}
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
