'use client'

import { signIn } from "next-auth/react"
import { GoogleIcon } from "../../Icons"


export const GoogleSignInButton = () => {
    return (
        <button onClick={() => signIn()} className="w-[50px] flex justify-center hover:translate-y-px transition-all">
            <GoogleIcon />
        </button>
    )
}