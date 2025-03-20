import Hero from "@/components/hero";
import About from "@/components/about";
import Prizes from "@/components/prizes";
import Sponsors from "@/components/sponsors";
import FAQ from "@/components/faq";
import RegisterCTA from "@/components/register-cta";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-black text-white">
      <Hero />
      <About />
      <Prizes />
      <Sponsors />
      <FAQ />
      <RegisterCTA />
    </div>
  );
}
