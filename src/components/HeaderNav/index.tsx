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
          <Link href={"/"}>HOME</Link>
          <Link href={"/products"}>PRODUTOS </Link>
          {userData.user.is_superuser ? (
            <Link href={"/admin"}>AREA DO ADMIN </Link>
          ) : (
            <Link href={"/dashboard"}>AREA DO CLIENTE </Link>
          )}
          <button type="button" onClick={() => handleLogoutClick()}>
            SAIR
          </button>
        </nav>
      ) : (
        <nav className="flex justify-between w-[400px] text-second z-10">
          <Link href={"/"}>HOME</Link>
          <Link href={"/products"}>PRODUTOS</Link>
          <Link href={"/"}>SOBRE</Link>
          <Link href={"/"}>CONTATO</Link>
        </nav>
      )}
    </>
  );
};
