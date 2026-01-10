import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import CaseStudy from "./components/CaseStudy";

export default function App() {
  return (
    <>      
      {/* Line 4: Define your routes */}
      <Routes>
        {/* Line 5: Home page route (your current portfolio) */}
        <Route
          path="/"
          element={
            <>
             <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </>
          }
        />
        
        {/* Line 6: Case study route with dynamic parameter */}
        <Route
          path="/case-study/:projectId"
          element={<CaseStudy />}
        />
      </Routes>
    </>
  );
}