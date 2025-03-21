import Hero from "@/components/hero";
import About from "@/components/about";
import Prizes from "@/components/prizes";
import Sponsors from "@/components/sponsors";
import Judges from "@/components/judges";
import FAQ from "@/components/faq";
import BotCTA from "@/components/bot-cta";
import SectionWrapper from "@/components/section-wrapper";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-black text-white">
      <Hero />
      <SectionWrapper className="bg-black py-24">
        <About />
        <Prizes />
      </SectionWrapper>
      <Sponsors />
      <Judges />
      <FAQ />
      <BotCTA />
      <Footer />
    </div>
  );
}
