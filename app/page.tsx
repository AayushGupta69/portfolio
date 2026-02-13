import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import FeatureCards from "@/components/feature-cards";
import ShowcaseSection from "@/components/showcase-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
    </>
  );
}
