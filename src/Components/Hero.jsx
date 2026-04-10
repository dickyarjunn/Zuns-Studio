import { heroImage } from "../data";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Animated Background */}
      <div className="hero-bg"></div>

      <div className="container">
        <div className="hero-content">
          {/* Left: Text Content */}
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Available for new projects
            </div>

            <h1 className="heading-xl hero-title">
              Turning Ideas Into{" "}
              <span className="text-gradient">Stunning Roblox</span>{" "}
              Worlds
            </h1>

            <p className="hero-subtitle">
              Hi, I'm <strong>Dickhy Arjun Prasetiyo</strong> — a passionate Roblox Map Developer
              crafting immersive, optimized, and visually stunning game environments
              that captivate players and elevate your game to the next level.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}>
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Hire Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img
              src={heroImage}
              alt="Zuns Studio"
              className="hero-image"
            />
            
            {/* Floating Cards */}
            <div className="hero-float-card card-1">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.5rem" }}>🏆</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>30+</div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>Projects Done</div>
                </div>
              </div>
            </div>
            
            <div className="hero-float-card card-2">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.5rem" }}>⚡</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Optimized</div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
