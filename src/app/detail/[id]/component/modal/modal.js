"use client";

export default function Modal({
  onOpen,
  onClose,
  formUmum,
  formKategori,
  formBantuan,
}) {
  if (!onOpen) return null;
  return (
    <dialog id="" className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog"></form>
          <button onClick={onClose} className="btn">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
