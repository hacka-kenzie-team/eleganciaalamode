import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProviders from "next-auth/providers/credentials"


export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProviders({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Your-Username:",
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Your-password:",
                }
            },
            async authorize(credentials) {
                //get user setup
                const user = { id: "1", name: "Samuel", password: "12345" }
                if (credentials?.username === user.name && 
                    credentials?.password === user.password) {
                        return user
                    } else {
                        return null
                    }
            }
        })
    ],
}