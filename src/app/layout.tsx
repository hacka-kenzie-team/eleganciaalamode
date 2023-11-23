import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Toast } from '@/components/_fragments/toast'
import { ShoppingCartModal } from '@/components/ShoppingCartModal'
import { Providers } from '@/components/Providers'

const comfortaa = Comfortaa({ subsets: ['latin'], weight: ["600"]})

export const metadata: Metadata = {
  title: 'Elegância À La Mode',
  description: 'Loja de Roupas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <Toast />
          <ShoppingCartModal />
        </Providers>
      </body>
    </html>
  )
}
