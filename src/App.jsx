import Navbar from "./components/navbar.jsx";
import Hero from "./sections/hero.jsx";
import ShowcaseSection from "./sections/showcase-section.jsx";
import LogoShowcase from "./sections/logo-showcase.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
    </>
  );
};
export default App;
