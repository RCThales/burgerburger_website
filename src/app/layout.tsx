import type { Metadata } from "next";
import { Big_Shoulders_Display } from "next/font/google";
import { Viewport } from 'next'
import "./globals.css";
import  AppInstall  from "../components/appinstall/AppInstall"
import Navbar from "@/components/navbar/Navbar";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: '#3F3F46',
}

export const metadata: Metadata = {
  title: "BURGER BURGER",
  description: "Burger Burger official website.",
  manifest: '/manifest.json',
  icons: {apple: '/icon.png'},
  openGraph: {
    title: "Burger Burger",
    description:
      "Discover the mouthwatering world of BURGER BURGER, London Ontario's best burger joint. Indulge in our delicious menu and experience the perfect blend of flavors.",
    url: "https://burgerburger.vercel.app/",
    siteName: "Burger Burger",
    images: [
      {
        url: "https://burgerburger.s3.us-east-2.amazonaws.com/banner_bb.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://burgerburger.s3.us-east-2.amazonaws.com/banner_bb.png",
        width: 1800,
        height: 1600,
        alt: "Burger Burger banner.",
      },
    ],

    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "London Ontario's Best Burgers",
    description:
      "Indulge in the savory goodness of BURGER BURGER. London Ontario's premier burger joint with a digital twist.",
    images: ["https://burgerburger.s3.us-east-2.amazonaws.com/banner_bb.png"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
  appleWebApp: {
    title: "Burger Burgert Apple Web App",
    statusBarStyle: "black-translucent",
    startupImage: [
      "https://burgerburger.s3.us-east-2.amazonaws.com/banner_bb.png",
      {
        url: "https://burgerburger.s3.us-east-2.amazonaws.com/banner_bb.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  category: "food",
  creator: "Thales Cardoso and Rayssa Ruas",
  keywords: [
    "Burger Burger",
    "burgers",
    "london",
    "ontario",
    "canada",
    "london ontario",
    "foodie",
    "discounts",
    "chicken",
    "richmond",
    "students",
    "western",
    "burger joint",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bigShoulders.className}>
        <Navbar></Navbar>
        {children}
       <AppInstall></AppInstall>
      </body>
    </html>
  );
}
