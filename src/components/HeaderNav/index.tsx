'use client'
import { userStore } from "@/contexts/userStore";
import Link from "next/link"
import { useRouter } from "next/navigation";


export const HeaderNav = () => {
    const { userData, logoutUser } = userStore((state) => state);
    const { push } = useRouter()

    const handleLogoutClick = async () => {
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