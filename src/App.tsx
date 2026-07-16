import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { HowWeWork } from "./components/sections/HowWeWork";
import { Problems } from "./components/sections/Problems";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-700 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="contenido-principal">
        <Hero />
        <Problems />
        <Services />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
