'use client'
import { ClassNames } from "@emotion/react";
import Akun from "./component/akun";
import Avatar from "./component/avatar";
import Sandi from "./component/sandi";
import Navbar from "@/app/navbar/navbar";
import PusatBantuan from "./component/bantuan";

export default function UserAkun(){
    return(
        <div className="pt-0 lg:pt-16 mx-8 my-12 lg:mx-28">
            <Avatar />
            <Akun />
            <Sandi />
            <Navbar />
            <div>
                <PusatBantuan />
            </div>
        </div>
    )
}