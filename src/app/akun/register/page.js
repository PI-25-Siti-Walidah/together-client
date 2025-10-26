"use client"
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  
        const handleLogin = () => {
            router.push('/akun/login')
        }
    return (
        <section>
                  <button 
          onClick={handleLogin}
          className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#FCC0C5] hover:border-[#FCC0C5] hover:text-white">
            Login
          </button>
        </section>
    );
}