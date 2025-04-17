import Navbar from "./components/navbar.jsx";
import Hero from "./sections/hero.jsx";
import ShowcaseSection from "./sections/showcase-section.jsx";
import LogoShowcase from "./sections/logo-showcase.jsx";
import FeatureCards from "./sections/feature-cards.jsx";
import Experience from "./sections/experience.jsx";
import Testimonials from "./sections/testimonials.jsx";
import Footer from "./sections/footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <Testimonials />
      <Footer />
    </>
  );
};
export default App;
