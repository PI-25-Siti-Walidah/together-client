'use client'
import { ClassNames } from "@emotion/react";
import Akun from "./component/akun";
import Avatar from "./component/avatar";

export default function UserAkun(){
    return(
        <div className="pt-16 mx-8 my-12 lg:mx-28">
            <Avatar />
            <Akun />
        </div>
    )
}