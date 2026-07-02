import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import AuroraBackground from "./components/AuroraBackground";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const handleSplashFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <SplashScreen onFinish={handleSplashFinish} />}
      </AnimatePresence>

      {!loading && (
        <>
          <AuroraBackground />

          <ScrollProgress />
          <ScrollToTop />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
