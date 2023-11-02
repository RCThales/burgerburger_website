import Contact from "@/components/contact/Contact";
import GrindDaily from "@/components/grinddaily/GrindDaily";
import Hero from "@/components/hero/Hero";
import Location from "@/components/location/Location";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar></Navbar>
      <Hero></Hero>
      <GrindDaily></GrindDaily>
      <Location></Location>
      <Contact></Contact>
    </main>
  );
}
