"use client"
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

        const handleRegister = () => {
            router.push('/akun/register')
        }
    return (
        <section>
                  <button 
          onClick={handleRegister}
          className="btn btn-ghost text-[16px] text-[#6D123F] hover:bg-[#FCC0C5] hover:border-[#FCC0C5] hover:text-white">
            Register
          </button>
        </section>
    );
}