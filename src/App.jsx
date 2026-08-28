import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio">

      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-purple"></span>
        <span className="orb orb-blue"></span>
        <span className="orb orb-cyan"></span>
        <span className="orb orb-violet"></span>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">
            Enrico C. Manabat
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Connect
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section id="home" className="hero">
          <div className="container hero-content">

            <div className="hero-text">
              <p className="eyebrow">
                APPLICATION SPECIALIST
              </p>

              <h1>
                Keeping Applications
                <span> Reliable & Client-Ready.</span>
              </h1>

              <p className="hero-description">
                Application Specialist focused on application support,
                troubleshooting, testing, and client coordination for
                reliable business software.
              </p>

              <p className="placeholder">
                Bachelor of Science in Information Technology · STI College
                Balagtas · Graduated 2025
              </p>

              <div className="hero-buttons">
                <a href="#experience" className="primary-button">
                  View My Work
                </a>

                <a href="#contact" className="secondary-button">
                  Let's Connect
                </a>
              </div>

              <div className="credibility">
                <span>Application Support</span>
                <span>QA & Testing</span>
                <span>Client Coordination</span>
                <span>Troubleshooting</span>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="hero-photo">
              <img src="/profile.jpeg" alt="Enrico C. Manabat" />
            </div>

          </div>
        </section>

        {/* About */}
        <section id="about" className="section reveal">
          <div className="container">
            <p className="section-label">ABOUT ME</p>
            <h2>Technical Understanding with a User-Focused Approach.</h2>

            <p className="section-description">
              I'm an Application Specialist with a background in Information
              Technology and hands-on experience supporting business
              applications, coordinating with clients and development teams,
              testing application features, investigating issues, and helping
              deliver reliable software solutions.
            </p>

            <div className="about-grid">

              <div className="info-card">
                <div className="info-number">01</div>
                <h3>Application Support</h3>
                <p>
                  Troubleshooting application issues, investigating user
                  concerns, monitoring tickets, and coordinating technical
                  resolutions.
                </p>
              </div>

              <div className="info-card">
                <div className="info-number">02</div>
                <h3>QA & Testing</h3>
                <p>
                  Creating test scenarios, performing functional testing,
                  identifying defects, reproducing issues, and validating
                  fixes.
                </p>
              </div>

              <div className="info-card">
                <div className="info-number">03</div>
                <h3>Client & Team Coordination</h3>
                <p>
                  Communicating with clients, documenting requirements,
                  coordinating with developers, and providing clear updates.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section section-dark reveal">
          <div className="container">
            <p className="section-label">EXPERIENCE</p>
            <h2>Professional Experience</h2>

            <div className="experience-card">
              <div className="timeline-marker"></div>

              <div>
                <p className="experience-label">
                  APPLICATION SPECIALIST
                </p>

                <h3>Odecci Solutions Inc.</h3>

                <p className="placeholder">
                  September 22, 2025 · Guiguinto, Bulacan
                </p>

                <p>
                  Supporting business applications, investigating reported
                  issues, coordinating technical concerns with development
                  teams, performing functional and regression testing,
                  managing support tickets, and communicating technical
                  updates to clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section section-dark reveal">
          <div className="container">
            <p className="section-label">EXPERTISE</p>
            <h2>Skills & Expertise</h2>

            <div className="skills-grid">

              <div className="skill-card">
                <h3>Application Support</h3>
                <p>
                  Troubleshooting · Incident Management · Application
                  Monitoring · Issue Investigation · User Support · CMS
                  Management
                </p>
              </div>

              <div className="skill-card">
                <h3>QA & Testing</h3>
                <p>
                  Functional Testing · Regression Testing · Test Case
                  Creation · Bug Reporting · Defect Validation · UAT
                </p>
              </div>

              <div className="skill-card">
                <h3>Business & Technical</h3>
                <p>
                  Requirements Analysis · Application Workflow Analysis ·
                  Documentation · Client Coordination · Problem Solving
                </p>
              </div>

              <div className="skill-card">
                <h3>Tools</h3>
                <p>
                  WordPress · Figma · Canva · Microsoft Office · Jira /
                  Ticketing Systems · CMS · Git / GitHub · VS Code · SAP
                  Business One
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="section reveal">
          <div className="container">
            <p className="section-label">MY PROCESS</p>
            <h2>How I Solve Application Issues</h2>

            <div className="workflow">

              <div className="workflow-step">
                <span>01</span>
                <h3>Understand</h3>
                <p>Understand the client's or user's concern.</p>
              </div>

              <div className="workflow-step">
                <span>02</span>
                <h3>Investigate</h3>
                <p>Analyze application behavior and reproduce the issue.</p>
              </div>

              <div className="workflow-step">
                <span>03</span>
                <h3>Identify</h3>
                <p>Determine the possible root cause and affected functionality.</p>
              </div>

              <div className="workflow-step">
                <span>04</span>
                <h3>Coordinate</h3>
                <p>Work with developers or relevant teams.</p>
              </div>

              <div className="workflow-step">
                <span>05</span>
                <h3>Test</h3>
                <p>Validate the fix through functional and regression testing.</p>
              </div>

              <div className="workflow-step">
                <span>06</span>
                <h3>Deliver</h3>
                <p>Provide clear updates and confirm the resolution.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact-section reveal">
          <div className="container contact-content">
            <p className="section-label">CONTACT</p>

            <h2>Let's Work Together</h2>

            <p>
              Have an application issue, project requirement, or opportunity
              you'd like to discuss? I'd be happy to connect.
            </p>

            <div className="contact-buttons">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=enricoc.manabat@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/enricooo"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                LinkedIn
              </a>

              <a
                href="https://wa.me/639770580481"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Call Me
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <strong>Enrico C. Manabat</strong>
          <p>Application Specialist | IT Professional</p>
          <small>© 2026 Enrico C. Manabat. All rights reserved.</small>
        </div>
      </footer>

    </div>
  )
}

export default App