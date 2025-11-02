"use client";
import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
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

  if (!onOpen) return null;
  return (
    <dialog id="" className="modal modal-open">
      <div className="modal-box h-4/5 p-11">
        <h3 className="font-bold text-lg">Formulir Pendaftaran Bantuan</h3>
        <Steper currentStep={currentStep} total={totalSteps}/>
        <form method="dialog">
            {currentStep === 1 &&<Step1 pertanyaan={formUmum} data={formData} />}
            {currentStep === 2 &&<Step2 pertanyaan={formKategori} data={formData}/> }
            {currentStep === 3 &&<Step3 pertanyaan={formBantuan} data={formData}/>}
            <button 
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div className="modal-action mt-6">
              {currentStep > 1 && (
              <button type="button" className="btn btn-error rounded-sm text-white" onClick={handleBack}>
                Kembali
              </button>
            )}
            {currentStep < totalSteps && (
              <button type="button" className="btn btn-primary rounded-sm" onClick={handleNext}>
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
