"use client";
import { userStore } from "@/contexts/userStore";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const HeaderNav = () => {
  const { userData, logoutUser, setLoading } = userStore((state) => state);
  const { push } = useRouter();
  const { data: session } = useSession();


    const handleLogoutClick = async () => {
        setLoading(true)
        if (session) {
            signOut()
        }
        logoutUser()
        setLoading(false)
  };

  return (
    <>
      {userData ? (
        <nav className="flex justify-between w-[400px] text-second z-10">
          <Link href={"/"} className="md:hover:translate-y-px transition-all">HOME</Link>
          <Link href={"/products"} className="md:hover:translate-y-px transition-all">PRODUTOS </Link>
          {userData.user.is_superuser ? (
            <Link href={"/admin"} className="md:hover:translate-y-px transition-all">AREA DO ADMIN </Link>
          ) : (
            <Link href={"/dashboard"} className="md:hover:translate-y-px transition-all">AREA DO CLIENTE </Link>
          )}
          <button type="button" onClick={() => {handleLogoutClick()}} className="md:hover:translate-y-px transition-all">
            SAIR
          </button>
        </nav>
      ) : (
        <nav className="flex justify-between w-[400px] text-second z-10">
          <Link href={"/"} className="md:hover:translate-y-px transition-all">HOME</Link>
          <Link href={"/products"} className="md:hover:translate-y-px transition-all">PRODUTOS</Link>
          <Link href={"/"} className="md:hover:translate-y-px transition-all">SOBRE</Link>
          <Link href={"/"} className="md:hover:translate-y-px transition-all">CONTATO</Link>
        </nav>
      )}
    </>
  );
};
