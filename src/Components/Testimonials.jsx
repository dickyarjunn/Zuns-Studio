import { testimonials } from "../data";

const Testimonials = () => {
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

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card glass-card reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="testimonial-quote-icon">"</div>
              
              <div className="testimonial-stars">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <span key={i} className="testimonial-star">★</span>
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
