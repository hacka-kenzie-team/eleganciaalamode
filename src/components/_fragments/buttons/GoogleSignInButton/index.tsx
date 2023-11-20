'use client'

import { signIn } from "next-auth/react"
import { GoogleIcon } from "../../Icons"


export const GoogleSignInButton = () => {
    return (
        <button onClick={() => signIn()}>
            <GoogleIcon />
            GOOOOOGLE
        </button>
    )
}