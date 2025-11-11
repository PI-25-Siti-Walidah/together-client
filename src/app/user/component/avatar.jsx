"use client";
import { User } from "lucide-react";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { useEffect, useState } from "react";

export default function Avatar() {
  const { user, checkAuth } = useAuthStore();
  const [nama, setNama] = useState("");

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) {
      setNama(user.nama || user.username);
    }
  }, [user]);

  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center p-4">
        <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mb-2">
          <User className="w-10 h-10 text-[#6D123F]" />
        </div>
        <div className="text-md font-semibold text-[#6D123F] ">
          Hai, {nama || "Perempuan Hebat"}!
        </div>
      </div>
    </section>
  );
}
