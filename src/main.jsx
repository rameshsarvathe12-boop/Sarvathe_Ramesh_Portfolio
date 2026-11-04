import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Menu, X, Code2, Database, BrainCircuit, Rocket, Terminal, ExternalLink,
  Download, CheckCircle2, Layers3, Workflow, Cpu
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Sarvathe Ramesh",
  role: "Full-Stack Developer",
  location: "Hyderabad, Telangana",
  phone: "+91 9346700268",
  email: "rameshsarvathe12@gmail.com",
  // Add your actual profile URLs here before publishing.
  linkedin: "",
  github: "",
};

const projects = [
  {
    number: "01",
    category: "AI / CYBERSECURITY",
    title: "AI-Based Network Security Enhancement for 5G IIoT",
    description: "An AI-powered approach to identifying and preventing cyber threats in real time, with a focus on connected industrial environments and 5G networks.",
    stack: ["Python", "FastAPI", "React.js", "MongoDB", "Machine Learning", "CNN", "LSTM"],
    icon: BrainCircuit,
    accent: "violet",
    links: [{ label: "Live project", url: "https://network-security-nu.vercel.app/" }, { label: "GitHub", url: "https://github.com/rameshsarvathe12-boop/network_security" }],
  },
  {
    number: "02",
    category: "FULL-STACK APPLICATION",
    title: "Employee Management System",
    description: "A web application for managing employee information, with CRUD operations, data validation and error handling.",
    stack: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "SQL", "MySQL"],
    icon: Layers3,
    accent: "cyan",
    links: [{ label: "GitHub", url: "https://github.com/rameshsarvathe12-boop/network_security" }],
  },
  {
    number: "03",
    category: "DEVOPS / CLOUD",
    title: "DevOps CI/CD Pipeline for FastAPI",
    description: "An automated delivery workflow that builds, tests and deploys a FastAPI application, using Docker for containerization and GitHub Actions for automation.",
    stack: ["Python", "FastAPI", "Docker", "GitHub Actions", "Linux", "AWS EC2"],
    icon: Workflow,
    accent: "orange",
    links: [{ label: "GitHub", url: "https://github.com/rameshsarvathe12-boop/network_security" }],
  },
];

const skillGroups = [
  { title: "Programming", icon: Code2, items: ["Python", "C", "JavaScript (ES6+)"] },
  { title: "Frontend", icon: Layers3, items: ["HTML5", "CSS3", "React.js"] },
  { title: "Backend & APIs", icon: Terminal, items: ["Django", "FastAPI", "REST APIs"] },
  { title: "Database", icon: Database, items: ["SQL", "MySQL"] },
  { title: "Tools & Platforms", icon: Cpu, items: ["Git", "GitHub", "Postman", "VS Code"] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const emailHref = `mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Sarvathe Ramesh")}`;

  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Sarvathe Ramesh home">
          <span className="brand-mark">SR<span>.</span></span>
          <span className="brand-name">SARVATHE RAMESH</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {[["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Education", "#education"]].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Sarvathe<br /><span>Ramesh.</span></h1>
            <h2>Full-Stack Developer <span className="slash">/</span> Aspiring Software Engineer</h2>
            <p className="hero-description">
              I build practical digital experiences — from responsive interfaces to backend services and AI-powered applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href={emailHref}>Get in touch <Mail size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> {profile.location}</span>
              <span className="meta-divider" />
              <span><Code2 size={15} /> Python · JavaScript · React</span>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="hero-glow" />
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><span className="code-lock">JS</span></div>
              <div className="code-content">
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {'{'}</p>
                <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">'Sarvathe'</span>,</p>
                <p><span className="code-muted">03</span> &nbsp; role: <span className="code-green">'Full-Stack Dev'</span>,</p>
                <p><span className="code-muted">04</span> &nbsp; mindset: <span className="code-green">'Always learning'</span>,</p>
                <p><span className="code-muted">05</span> &nbsp; focus: [</p>
                <p><span className="code-muted">06</span> &nbsp; &nbsp; <span className="code-orange">'Build'</span>, <span className="code-orange">'Learn'</span>,</p>
                <p><span className="code-muted">07</span> &nbsp; &nbsp; <span className="code-orange">'Improve'</span></p>
                <p><span className="code-muted">08</span> &nbsp; ]</p>
                <p><span className="code-muted">09</span> {'}'}</p>
                <p className="code-comment"><span className="code-muted">10</span> // Turning ideas into useful software.</p>
                <div className="cursor-line"><span /></div>
              </div>
            </div>
            <div className="float-chip chip-top"><BrainCircuit size={16} /> AI + ML</div>
            <div className="float-chip chip-bottom"><Rocket size={16} /> BUILDING THE NEXT</div>
            <div className="hero-index">01 <span>/</span> 04</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-label"><span>01</span> ABOUT ME</div>
          <div className="about-grid">
            <h2 className="section-heading">Curious by nature.<br /><span>Builder by choice.</span></h2>
            <div className="about-text">
              <p className="lead">I’m an aspiring software engineer with a foundation in full-stack development and a strong interest in solving real-world problems through technology.</p>
              <p>Through 30 weeks of structured, project-based training at NxtWave Intensive, I’ve strengthened my skills in Python, JavaScript, React.js, SQL and application development. I enjoy exploring how frontend experiences, backend systems and AI can work together to create useful products.</p>
              <div className="about-facts">
                <div><strong>30</strong><span>Weeks of structured<br />project-based training</span></div>
                <div><strong>03</strong><span>Featured development<br />projects</span></div>
                <div><strong>∞</strong><span>Curiosity to learn<br />and improve</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap section-pad" id="skills">
          <div className="section-label"><span>02</span> WHAT I WORK WITH</div>
          <div className="section-intro">
            <h2 className="section-heading">Tools for turning<br /><span>ideas into impact.</span></h2>
            <p>A growing toolkit across frontend, backend, data and development workflows.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return <article className="skill-card" key={group.title} style={{ "--delay": `${index * 90}ms` }}>
                <div className="skill-icon"><Icon size={20} /></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>;
            })}
          </div>
          <div className="soft-skills"><span className="soft-label">HOW I WORK</span>{["Communication", "Problem Solving", "Teamwork", "Time Management", "Adaptability"].map(s => <span key={s}>{s}</span>)}</div>
        </section>

        <section className="projects-section section-wrap section-pad" id="projects">
          <div className="section-label"><span>03</span> SELECTED WORK</div>
          <div className="section-intro projects-intro">
            <h2 className="section-heading">Learning through<br /><span>building things.</span></h2>
            <p>Projects where I’ve applied my skills to practical software and engineering challenges.</p>
          </div>
          <div className="project-list">
            {projects.map(project => {
              const Icon = project.icon;
              return <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                  <div className="project-links">
                    {project.links.map(link => link.url ?
                      <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={14} /></a> :
                      <span className="link-placeholder" key={link.label}>{link.label} <span>— add URL</span></span>
                    )}
                  </div>
                </div>
                <div className="project-art"><div className="project-art-ring" /><Icon size={62} strokeWidth={1.1} /></div>
              </article>;
            })}
          </div>
          <p className="project-note">Explore the live application and source code through the project links above.</p>
        </section>

        <section className="education-section section-wrap section-pad" id="education">
          <div className="section-label"><span>04</span> EDUCATION & LEARNING</div>
          <div className="section-intro">
            <h2 className="section-heading">A foundation for<br /><span>what comes next.</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-item current">
              <div className="timeline-dot" />
              <div className="timeline-date">MAY 2026 — PRESENT</div>
              <div><h3>Python Full Stack Program</h3><p>NxtWave Intensive <span>· Hyderabad</span></p></div>
              <span className="timeline-status">IN PROGRESS</span>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">2023 — 2026</div>
              <div><h3>B.Tech — Electronics & Communication</h3><p>Institute of Aeronautical Engineering <span>· Hyderabad</span></p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">2020 — 2023</div>
              <div><h3>Diploma — Electronics & Communication</h3><p>Government Polytechnic College <span>· Nizamabad</span></p><span className="score">84%</span></div>
            </div>
          </div>
          <div className="certifications">
            <div className="cert-heading"><CheckCircle2 size={18} /><h3>Certifications & Internship</h3></div>
            <div className="cert-row"><span>C Programming Training — DTTI</span><span>DEC 2022 — JAN 2023</span></div>
            <div className="cert-row"><span>AI, Machine Learning, IoT & Power Electronics Internship</span><span>2024</span></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="section-label"><span>05</span> NEXT STEP</div>
            <p className="contact-overline">HAVE A ROLE OR PROJECT IN MIND?</p>
            <h2>Let’s build<br /><span>something useful.</span></h2>
            <p className="contact-copy">I’m looking for an opportunity to contribute, learn from a great team and grow as a software engineer.</p>
            <a className="button button-primary contact-button" href={emailHref}>Start a conversation <ArrowUpRight size={17} /></a>
            <div className="contact-details">
              <a href={emailHref}><Mail size={16} /> {profile.email}</a>
              <a href={`tel:${profile.phone.replaceAll(" ", "")}`}><span className="phone-icon">↗</span> {profile.phone}</a>
              <span><MapPin size={16} /> {profile.location}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a href="#home" className="brand"><span className="brand-mark">SR<span>.</span></span></a>
        <p>Designed & built by Sarvathe Ramesh · © {new Date().getFullYear()}</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
