'use client'
import { LoginForm } from "@/components/LoginForm";
import { Loading } from "@/components/_fragments/loading";
import { userStore } from "@/contexts/userStore";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


export default function LoginPage() {
  const { loading, userData } = userStore((state) => state)
  const googleLogin = userStore((state) => state.googleLogin)
  const { data: session } = useSession()

  if (userData) {
    redirect('/dashboard');
  }

  useEffect(() => {
    if(session && !userData){
      googleLogin(session)
    }
  }, [userData, session]);

  return (
      <div className="w-screen min-h-screen relative text-primary">
        <Image 
          src="/imgs/hero-login.png" 
          alt="Imagem de uma mulher"
          fill
          className="absolute -z-10 bottom-0 right-0 blur-sm md:blur-none md:max-h-[100%] md:max-w-[50%] xl:max-w-[30%] object-cover"
        />
        <header className="flex items-center justify-center w-full h-24">
          <Link href={"/"}><h2 className="text-3xl text-second">ElegânciaÀLaMode</h2></Link>
        </header>
        <main className="flex h-[88vh] flex-col items-center justify-center">
        {loading ?
          <Loading /> :
          <LoginForm />}
        </main>
      </div>
  )
}
