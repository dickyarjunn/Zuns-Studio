import { useEffect, useMemo } from "react";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Showcase from "./Components/Showcase";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Generate particles
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <>
      {/* Decorative Elements */}
      <div className="grid-lines"></div>
      <div className="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Stats />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <Showcase />
        <div className="section-divider"></div>
        <Services />
        <div className="section-divider"></div>
        <Testimonials />
        <div className="section-divider"></div>
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
