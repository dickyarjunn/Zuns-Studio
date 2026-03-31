import { showcaseItems } from "../data";

const Showcase = () => {
  return (
    <section className="section-padding" id="showcase">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span className="section-label reveal" style={{ justifyContent: "center" }}>
            Showcase
          </span>
          <h2 className="heading-lg reveal">
            Featured <span className="text-gradient">Maps</span>
          </h2>
          <p
            className="reveal"
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "560px",
              margin: "16px auto 0",
              fontSize: "1.05rem",
            }}
          >
            A closer look at my most ambitious and visually stunning builds.
          </p>
        </div>

        <div className="showcase-grid">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className="showcase-item reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <img src={item.image} alt={item.title} />
              <div className="showcase-item-overlay">
                <div className="showcase-play">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-purple-400)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "4px",
                    }}
                  >
                    {item.type}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
