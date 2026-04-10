import { useState, useEffect } from "react";
import { testimonials } from "../data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive: detect screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Reset index when items per page changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Calculate card width based on items per page
  const getCardStyle = () => {
    const gap = 24;
    const totalGaps = itemsPerPage - 1;
    return {
      minWidth: `calc((100% - ${totalGaps * gap}px) / ${itemsPerPage})`,
      flex: `0 0 calc((100% - ${totalGaps * gap}px) / ${itemsPerPage})`,
    };
  };

  const getTranslateX = () => {
    const gap = 24;
    const cardWidthPercent = 100 / itemsPerPage;
    const gapPerCard = ((itemsPerPage - 1) * gap) / itemsPerPage;
    const offset = currentIndex * (cardWidthPercent);
    const gapOffset = currentIndex * gap;
    return `calc(-${offset}% - ${currentIndex * (gap - gapPerCard)}px)`;
  };

  return (
    <section className="section-padding" id="testimonials">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label reveal" style={{ justifyContent: "center" }}>
            Testimonials
          </span>
          <h2 className="heading-lg reveal">
            What Clients <span className="text-gradient">Say</span>
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
            Real feedback from real clients who trusted me with their projects.
          </p>
        </div>

        {/* Slider Container */}
        <div className="reveal" style={{ position: "relative" }}>
          <div style={{ overflow: "hidden", borderRadius: "var(--radius-xl)" }}>
            <div
              className="testimonial-slider-track"
              style={{
                display: "flex",
                gap: "24px",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: `translateX(${getTranslateX()})`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card glass-card"
                  style={getCardStyle()}
                >
                  <div className="testimonial-quote-icon">"</div>

                  <div className="testimonial-stars">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <span key={i} className="testimonial-star">★</span>
                    ))}
                  </div>

                  <p className="testimonial-text">"{testimonial.text}"</p>

                  <div className="testimonial-author">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div className="testimonial-avatar">
                        {testimonial.initials}
                      </div>
                    )}
                    <div>
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-role">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {testimonials.length > itemsPerPage && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                marginTop: "40px",
                alignItems: "center",
              }}
            >
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="testimonial-nav-btn"
                aria-label="Previous testimonials"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              {/* Dots */}
              <div style={{ display: "flex", gap: "8px" }}>
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    style={{
                      width: currentIndex === i ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "var(--radius-full)",
                      border: "none",
                      background: currentIndex === i
                        ? "var(--color-purple-500)"
                        : "rgba(255,255,255,0.15)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="testimonial-nav-btn"
                aria-label="Next testimonials"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
