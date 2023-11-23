import type { Metadata } from 'next'
import { Inter, Marcellus_SC } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Toast } from '@/components/_fragments/toast'
import { ShoppingCartModal } from '@/components/ShoppingCartModal'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })
const marcellusSC = Marcellus_SC({
  subsets: ['latin'],
  style: ['normal'],
  weight: '400',
  variable: '--font-marcellusSC'
})

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
      <body className={`${inter.className} ${marcellusSC.className}`}>
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
