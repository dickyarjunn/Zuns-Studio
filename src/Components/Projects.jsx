import { projects } from "../data";

const Projects = () => {
  return (
    <section className="section-padding" id="projects">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label reveal" style={{ justifyContent: "center" }}>
            Portfolio
          </span>
          <h2 className="heading-lg reveal">
            Featured <span className="text-gradient">Projects</span>
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
            A showcase of my finest Roblox map creations — each crafted with
            passion, precision, and a focus on player immersion.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
                <div className="project-card-overlay">
                  <span
                    className="btn btn-primary"
                    style={{ padding: "10px 20px", fontSize: "0.8rem" }}
                  >
                    View Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7"/>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
