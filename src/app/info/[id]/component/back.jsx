"use client";
import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();

  const handleInfo = () => {
    router.push("/info");
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-4">
      <button
        onClick={handleInfo}
        className="btn btn-sm sm:btn-md rounded-sm bg-[#6D123F] text-white border border-transparent 
             hover:!bg-white hover:!text-[#6D123F] hover:!border-[#6D123F] 
             transition-all duration-200 ease-in-out"
      >
        Kembali
      </button>
    </div>
  );
}
