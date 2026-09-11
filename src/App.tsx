import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MouseGlow from "@/components/MouseGlow";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot/Chatbot";

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-ink-100 overflow-x-hidden">
      {/* <MouseGlow /> */}
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
