import Navbar from "./components/navbar.jsx";
import Hero from "./sections/hero.jsx";
import ShowcaseSection from "./sections/showcase-section.jsx";
import LogoShowcase from "./sections/logo-showcase.jsx";
import FeatureCards from "./sections/feature-cards.jsx";
import Experience from "./sections/experience.jsx";
import TechStack from "./sections/tech-stack.jsx";
import Testimonials from "./sections/testimonials.jsx";
import Contact from "./sections/contact.jsx";
import Footer from "./sections/footer.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        pauseOnHover={true}
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};
export default App;
