'use client'

import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { userStore } from "@/contexts/userStore"
import { useSession } from "next-auth/react"


export const UserNameTag = () => {
    const user = userStore((store) => store.userData?.user)
    const { data: session } = useSession()

    return (
        <div>
            <div>
                { session?.user ? 
            <Image
            src={session.user.image ?? placeholder}
            height={70}
            width={70}
            alt="User picture"
            /> :
            <div><span>{user?.name.charAt(0)}</span></div>
                }
            </div>
            <span>{user?.name} @{!session ? user?.username : "Conta-google"}</span>
        </div>
    )
}