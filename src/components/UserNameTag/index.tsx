'use client'

import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { userStore } from "@/contexts/userStore"
import { useSession } from "next-auth/react"
import { ephesis } from "@/app/fonts"


export const UserNameTag = () => {
    const user = userStore((store) => store.userData?.user)
    const { data: session } = useSession()

    return (
        <>
            <h1 className="pt-10 text-center">Bem vindo!</h1>
            <div className="flex items-center my-10 gap-3">
                <div className="flex gap-3">
                    {session?.user ?
                        <Image
                            src={session.user.image ?? placeholder}
                            height={70}
                            width={70}
                            alt="User picture"
                            className="rounded-[50%] overflow-hidden border-2 border-red-900" /> :
                        <div className="min-w-[44px] bg-red-900/50 p-2 group-hover:bg-red-900 transition duration-500 ease-in-out delay-75 border-2 border-red-900">
                            <span className={ephesis.className}>{user?.name.charAt(0)}</span>
                        </div>
                    }
                </div>
                <span>
                    {user?.name} @{!session ? user?.username : "Conta-google"}
                </span>
            </div>
        </>
    )
}