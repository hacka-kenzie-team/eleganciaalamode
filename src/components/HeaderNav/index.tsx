'use client'
import { userStore } from "@/contexts/userStore";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link"


export const HeaderNav = () => {
    const { userData, logoutUser, setLoading } = userStore((state) => state);
    const { data: session } = useSession()

    const handleLogoutClick = async () => {
        setLoading(true)
        if (session) {
            signOut()
        }
        logoutUser()
        setLoading(false)
    }

    return (
        <>
            {userData ?
                (<nav className="flex gap-7">
                    <Link href={"/products"}>PRODUTOS </Link>
                    <Link href={"/dashboard"}>AREA DO CLIENTE </Link>
                    <button type="button" onClick={() => handleLogoutClick()}>SAIR</button>
                </nav>) :
                (<nav className="flex gap-7">
                    <Link href={"/products"}>PRODUTOS </Link>
                    <Link href={"/login"}>LOGIN </Link>
                    <Link href={"/register"}>CADASTRO </Link>
                </nav>)}
        </>
    )
}