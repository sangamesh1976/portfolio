
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "SQL & Oracle",
    "Informatica PowerCenter",
    "Python",
    "Pandas",
    "PySpark",
    "PyTest",
    "ETL Testing",
    "Snowflake",
    "Azure Data Factory",
    "Databricks",
    "Git & GitHub",
    "Agentic AI",
  ];

  const projects = [
    {
      title: "Retail ETL Testing Framework",
      description:
        "Validated source-to-target data, incremental loads, record counts, data types, duplicates, and business rules using Python, Pandas, SQL, and PyTest.",
      technologies: "Python • Pandas • Oracle • PyTest",
    },
    {
      title: "SCD Type 2 Validation",
      description:
        "Validated historical data changes, effective dates, current-record flags, and expired records in a dimensional data warehouse.",
      technologies: "Informatica • SQL • Oracle",
    },
    {
      title: "Automated File-to-Database Validation",
      description:
        "Built a validation workflow to compare CSV files with database tables, identify mismatches, and generate execution reports.",
      technologies: "Python • Pandas • SQL • PyTest",
    },
  ];

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          Portfolio<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Sangamesh</span>
            </h1>

            <h2>ETL Automation Corporate Trainer & Data Engineer</h2>

            <p className="hero-description">
              I specialize in ETL testing, data validation, Python
              automation with pandas script,pyspark frame work, SQL, and data warehouse testing. I build
              reliable solutions that improve data quality and testing
              efficiency.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore My Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="profile-icon">DE</div>
            <h3>Data Quality. Automation. Innovation.</h3>
            <p>
              Transforming complex data validation into efficient,
              automated testing workflows.
            </p>
            <div className="stats">
              <div>
                <strong>ETL</strong>
                <span>Testing</span>
              </div>
              <div>
                <strong>Python</strong>
                <span>Automation</span>
              </div>
              <div>
                <strong>SQL</strong>
                <span>Validation</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2 className="section-title">About Me</h2>

          <p className="section-description">
            I am an ETL testing and data engineering professional
            interested in building robust data pipelines and automated
            testing frameworks. My focus is on validating data accuracy,
            completeness, transformation logic, and source-to-target
            consistency. I am also exploring AI-powered ETL testing
            solutions.
          </p>
        </section>

        <section id="skills" className="section section-alt">
          <p className="eyebrow">MY TECHNICAL TOOLKIT</p>
          <h2 className="section-title">Skills & Technologies</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>✦</span> {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">WHAT I HAVE BEEN BUILDING</p>
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">{"</>"}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2 className="section-title">Contact Me</h2>

          <p className="section-description">
            Have an opportunity, project, or collaboration in mind?
            Feel free to get in touch.
          </p>

          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="btn btn-primary">
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Your Name. Built with React
          & TypeScript.
        </p>
      </footer>
    </div>
  );
}

export default App;
