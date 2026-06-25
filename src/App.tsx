import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./sections/About";
import { Research } from "./sections/Research";
import { Projects } from "./sections/Projects";
import { Publications } from "./sections/Publications";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
