import { services } from "../data";

const Services = () => {
  return (
    <section className="section-padding" id="services">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label reveal" style={{ justifyContent: "center" }}>
            What I Offer
          </span>
          <h2 className="heading-lg reveal">
            My <span className="text-gradient">Services</span>
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
            Professional Roblox map development services tailored to bring your
            game's vision to reality.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card glass-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
