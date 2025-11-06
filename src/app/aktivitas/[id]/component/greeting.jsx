"use client";
import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { useAuthStore } from "../../../../lib/store/useAuthStore";

export default function Greeting() {
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
        {/* Avatar bulat */}
        <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mb-2">
          <User className="w-10 h-10 text-[#6D123F]" />
        </div>

        {/* Teks sambutan */}
        <div className="text-md font-semibold text-[#6D123F]">
          Hai, {nama || "Pengguna"}!
        </div>
      </div>
    </section>
  );
}
