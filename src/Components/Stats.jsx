import { stats } from "../data";

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card glass-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="stat-number text-gradient">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
