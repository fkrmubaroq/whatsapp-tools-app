import Footer from "./components/footer";
import { Header } from "./components/header";
import SectionFeature from "./components/seaction-features";
import SectionCTA from "./components/section-cta";
import SectionHero from "./components/section-hero";

export default function TestimonialGeneratorPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionHero />
        <SectionFeature />
        <SectionCTA />
      </main>
      <Footer />
    </>
  );
}
