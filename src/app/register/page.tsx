"use client"
import { RegisterForm } from "@/components/RegisterForm";
import { Loading } from "@/components/_fragments/loading";
import { userStore } from "@/contexts/userStore";
import { redirect } from "next/navigation";


export default function RegisterPage() {
  const { loading, userData } = userStore((state) => state)

  if (userData) {
    redirect('/dashboard');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {loading ?
        <Loading /> :
        <RegisterForm />
      }
    </main>
  )
}
