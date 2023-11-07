import Link from "next/link"

export const HeaderNav = () => {
    return (
        <nav>
            <Link href={"/products"}>PRODUTOS </Link>
            <Link href={"/login"}>LOGIN </Link>
            <Link href={"/register"}>CADASTRO </Link>
        </nav>
    )
}