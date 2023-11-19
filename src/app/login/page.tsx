'use client'
import { LoginForm } from "@/components/LoginForm";
import { Loading } from "@/components/_fragments/loading";
import { userStore } from "@/contexts/userStore";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function LoginPage() {
  const { loading, userData } = userStore((state) => state)

  useEffect(() => {
    if (userData && window) {
      redirect('/dashboard');
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