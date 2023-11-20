'use client'
import { LoginForm } from "@/components/LoginForm";
import { Loading } from "@/components/_fragments/loading";
import { userStore } from "@/contexts/userStore";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function LoginPage() {
  const { loading, userData, googleLogin } = userStore((state) => state)
  const { data: session } = useSession()

  useEffect(() => {
    if (userData && window) {
      redirect('/dashboard');
    }
    if(session && !userData){
      googleLogin(session)
      console.log(session.user?.name)
    }
  }, [userData]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {loading ?
        <Loading /> :
        <LoginForm />}
    </main>
  )
}
