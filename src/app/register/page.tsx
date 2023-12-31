"use client"
import { RegisterForm } from "@/components/RegisterForm";
import { Loading } from "@/components/_fragments/loading";
import { userStore } from "@/contexts/userStore";
import { redirect } from "next/navigation";
import Image from "next/image";
import heroRegister from "@/assets/imgs/hero-register.png"
import Link from "next/link";


export default function RegisterPage() {
  const { loading, userData } = userStore((state) => state)

  if (userData) {
    redirect('/dashboard')
  }

  return (
    <>
      <header className="flex items-center justify-center w-full h-24">
          <Link href={"/"}><h2 className="text-3xl text-second">ElegênciaÀLaMode</h2></Link>
        </header>
      <main className="flex h-[89vh] flex-col items-center pt-8">
        <Image 
          src={heroRegister} 
          alt='um homem com um olhar sério' 
          className="absolute -z-10 bottom-0 left-0 blur-sm md:blur-none md:max-h-[100%] md:max-w-[50%] xl:max-w-[30%]"/>
        {loading ?
          <Loading /> :
          <RegisterForm />
        }
      </main>
    </>
  )
}
