"use client";
import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { useAuthStore } from "../../../lib/store/useAuthStore";

export default function Greeting() {
  const { user, checkAuth } = useAuthStore();
  const [nama, setNama] = useState("");

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) setNama(user.nama || user.username);
  }, [user]);

  return (
    <section className="text-center mb-6">
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center mb-3">
          <User className="w-10 h-10 text-[#6D123F]" />
        </div>
        <h2 className="text-lg font-semibold text-[#6D123F]">
          Hai, {nama || "Perempuan Hebat"}!
        </h2>
      </div>
    </section>
  );
}
