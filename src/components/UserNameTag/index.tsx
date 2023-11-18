'use client'

import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { userStore } from "@/contexts/userStore"

export const UserNameTag = () => {
    const user = userStore((store) => store.userData?.user)

    return (
        <div>
            <div>
            <Image
            src={placeholder}
            height={70}
            width={70}
            alt="User picture"
            />
            </div>
            <span>{user?.name} @{user?.username}</span>
        </div>
    )
}