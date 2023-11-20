'use client'
import { userStore } from "@/contexts/userStore";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { useRouter } from "next/navigation";


export const HeaderNav = () => {
    const { userData, logoutUser } = userStore((state) => state);
    const { push } = useRouter()
    const { data: session } = useSession()

    const handleLogoutClick = async () => {
        if (session) {
            signOut()
        }
        logoutUser()
        push("/")
    }

    return (
        <>
            {userData ?
                (<nav>
                    <Link href={"/products"}>PRODUTOS </Link>
                    <Link href={"/dashboard"}>AREA DO CLIENTE </Link>
                    <button type="button" onClick={() => handleLogoutClick()}>SAIR</button>
                </nav>) :
                (<nav>
                    <Link href={"/products"}>PRODUTOS </Link>
                    <Link href={"/login"}>LOGIN </Link>
                    <Link href={"/register"}>CADASTRO </Link>
                </nav>)}
        </>
    )
}