"use client"

import Overview from "./overview"
import Review from "./review"
import Navbar from "../navbar/navbar";

export default function Cerita(){
    return(
        <main className='bg-[#FFF9F7]'>
            <Overview />
            <Review />
            <Navbar />
        </main>
    ) 
}