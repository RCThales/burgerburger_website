import type { Metadata } from 'next'
import { Big_Shoulders_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

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
      <body className={bigShoulders.className}>
        <Navbar></Navbar>
        {children}
  
      </body>
    </html>
  );
}
