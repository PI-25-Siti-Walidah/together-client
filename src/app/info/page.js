"use client"
import Filter from "./filter"
import ListBantuan from "./list-bantuan"
import { useRouter } from "next/navigation"

export default function Info(){
     const router = useRouter();
        const handleDetail = () => {
        router.push('/detail/[id]')}

    return(
        <section>
        <Filter />
        <ListBantuan />
        <button onClick={handleDetail} className=" text-white bg-purple-800 hover:bg-pink-500">
            <span>Detail</span>
        </button>
        </section>
    )
}
