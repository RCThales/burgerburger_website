import type { Metadata } from "next";
import { Big_Shoulders_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "BURGER BURGER",
  description: "Burger Burger official website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="Discover the mouthwatering world of BURGER BURGER, London Ontario's best burger joint. Indulge in our delicious menu and experience the perfect blend of flavors."
        />
        <meta
          name="keywords"
          content="BURGER BURGER, burgers, London, Ontario, fast food, delicious, foodie, BB, poutine, chicken, topbun, richmond, burger joint"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="BURGER BURGER - London Ontario's Best Burgers"
        />
        <meta
          property="og:description"
          content="Indulge in the savory goodness of BURGER BURGER. London's premier burger joint with a digital twist."
        />
        <meta
          property="og:image"
          content="https://burgerburger.s3.us-east-2.amazonaws.com/banner_bb.png"
        />
        <meta property="og:url" content="https://burgerburger.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="London Ontario's Best Burgers" />
        <meta
          name="twitter:description"
          content="Indulge in the savory goodness of BURGER BURGER. London Ontario's premier burger joint with a digital twist."
        />
        <meta
          name="twitter:image"
          content="https://burgerburger.s3.us-east-2.amazonaws.com/banner_bb.png"
        />
      </Head>
      <body className={bigShoulders.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
