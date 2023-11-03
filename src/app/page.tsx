import Contact from "@/components/contact/Contact";
import GrindDaily from "@/components/grinddaily/GrindDaily";
import Hero from "@/components/hero/Hero";
import Location from "@/components/location/Location";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
 
      <Hero></Hero>
      <GrindDaily></GrindDaily>
      <Location></Location>
      <Contact></Contact>
    </main>
  );
}
