import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar';

const oswald = Oswald({ subsets: ["latin"] , weight: ['200', '400', '600', '700']});

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
    <html className={oswald.className} lang="en">
      <Navbar></Navbar>
      <body>{children}</body>
    </html>
  );
}
