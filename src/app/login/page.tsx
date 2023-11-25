'use client'
import { LoginForm } from "@/components/LoginForm";
import { Loading } from "@/components/_fragments/loading";
import { userStore } from "@/contexts/userStore";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";


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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {loading ?
        <Loading /> :
        <LoginForm />}
    </main>
  )
}
