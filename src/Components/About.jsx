import { skills } from "../data";

const About = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="about-text">
            <span className="section-label reveal">About Me</span>
            <h2 className="heading-lg reveal" style={{ marginBottom: "24px" }}>
              Crafting Worlds That{" "}
              <span className="text-gradient">Players Remember</span>
            </h2>

            <p className="reveal">
              I'm <strong>Dickhy Arjun Prasetiyo</strong>, the creative force behind
              <strong> Zuns Studio</strong>. With over 30 completed projects and a deep
              passion for Roblox development, I specialize in building immersive,
              performance-optimized environments that bring game concepts to life.
            </p>

            <p className="reveal">
              Every map I create starts with understanding my client's vision.
              From there, I focus on three pillars: <strong>stunning aesthetics</strong>,
              <strong> smooth performance</strong>, and <strong>unforgettable player experience</strong>.
              No matter the genre or style — I bring every concept to life with
              meticulous attention to detail and a commitment to exceeding expectations.
            </p>

            <p className="reveal">
              My goal is simple: deliver maps that don't just look incredible
              but also run flawlessly on all devices. Your players deserve the best,
              and that's exactly what I deliver.
            </p>

            <div className="about-skills reveal">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
