"use client";
import { useState } from "react";
import Step1 from "./step1";
import Steper from "./steper";

export default function Modal({
  onOpen,
  onClose,
  formUmum,
  formKategori,
  formBantuan,
}) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const totalSteps = 4 

  if (!onOpen) return null;
  return (
    <dialog id="" className="modal modal-open">
      <div className="modal-box h-4/5 p-11">
        <h3 className="font-bold text-lg">Formulir Pendaftaran Bantuan</h3>
        <Steper currentStep={currentStep} total={totalSteps}/>
        <form method="dialog">
            <Step1 pertanyaan={formUmum} data={formData} />
            <button 
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div className="modal-action mt-6">
              <button type="button" className="btn btn-primary rounded-sm" >
                Lanjut
              </button>
            </div>
        </form>
      </div>
    </dialog>
  );
}
