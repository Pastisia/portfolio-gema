import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Design from "./components/Design";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Design />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
