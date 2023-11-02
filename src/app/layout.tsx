import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'

const bebas = Oswald({ subsets: ["latin"] , weight: ['200', '400', '600', '700']});

export const metadata: Metadata = {
  title: 'BURGER BURGER',
  description: 'Burger Burger official website.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={bebas.className}>{children}</body>
    </html>
  );
}
