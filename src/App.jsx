import './App.css'

function App() {
  return (
    <div className="portfolio">
      
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
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
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
                I Help Businesses Keep Their Applications
                <span> Reliable, Usable, and Client-Ready.</span>
              </h1>

              <p className="hero-description">
                Application Specialist focused on application support,
                troubleshooting, software testing, CMS management,
                client coordination, and delivering practical solutions
                for business applications.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
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

            {/* Application Dashboard */}
            <div className="hero-dashboard">
              <div className="dashboard-header">
                <div>
                  <p>Application Overview</p>
                  <h3>System Operations</h3>
                </div>

                <div className="status">
                  <span></span>
                  Operational
                </div>
              </div>

              <div className="dashboard-grid">

                <div className="dashboard-card">
                  <div className="card-icon">✓</div>
                  <div>
                    <p>Application</p>
                    <strong>Healthy</strong>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-icon">#</div>
                  <div>
                    <p>Open Tickets</p>
                    <strong>Monitoring</strong>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-icon">✓</div>
                  <div>
                    <p>Testing</p>
                    <strong>In Progress</strong>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-icon">↗</div>
                  <div>
                    <p>Resolution</p>
                    <strong>Validated</strong>
                  </div>
                </div>

              </div>

              <div className="activity">
                <div className="activity-title">
                  <span>Recent Activity</span>
                  <span>Live</span>
                </div>

                <div className="activity-item">
                  <span className="activity-dot"></span>
                  Client request received
                  <small>Today</small>
                </div>

                <div className="activity-item">
                  <span className="activity-dot"></span>
                  Issue investigated
                  <small>Today</small>
                </div>

                <div className="activity-item">
                  <span className="activity-dot"></span>
                  Fix validated
                  <small>Today</small>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
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
        <section id="experience" className="section section-dark">
          <div className="container">
            <p className="section-label">EXPERIENCE</p>
            <h2>Professional Experience</h2>

            <div className="experience-card">
              <div className="timeline-marker"></div>

              <div>
                <p className="experience-label">
                  APPLICATION SPECIALIST
                </p>

                <h3>[Company Name]</h3>

                <p className="placeholder">
                  [Employment Date] · [Location]
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

        {/* Projects */}
        <section id="projects" className="section">
          <div className="container">
            <p className="section-label">SELECTED WORK</p>
            <h2>Projects</h2>

            <div className="project-grid">

              <div className="project-card">
                <span className="project-tag">Application Specialist</span>
                <h3>AFL Cross Platform</h3>
                <p>
                  Supported and tested a cross-platform application and CMS
                  ecosystem, including application modules, client-requested
                  enhancements, issue investigation, and release validation.
                </p>

                <div className="project-tools">
                  <span>Application Testing</span>
                  <span>CMS</span>
                  <span>Bug Investigation</span>
                  <span>Client Coordination</span>
                </div>

                <button>View Case Study →</button>
              </div>

              <div className="project-card">
                <span className="project-tag">Application Specialist</span>
                <h3>Alfardan Oyster Privilege Club</h3>
                <p>
                  Supported a membership and privilege platform involving
                  mobile application and web-based CMS functionality.
                </p>

                <div className="project-tools">
                  <span>Troubleshooting</span>
                  <span>Testing</span>
                  <span>CMS Support</span>
                  <span>Validation</span>
                </div>

                <button>View Case Study →</button>
              </div>

              <div className="project-card">
                <span className="project-tag">Application Specialist</span>
                <h3>Alfardan Living</h3>
                <p>
                  Supported mobile and CMS functionality for a property and
                  lifestyle platform.
                </p>

                <div className="project-tools">
                  <span>Functional Testing</span>
                  <span>CMS</span>
                  <span>Support</span>
                  <span>Release Testing</span>
                </div>

                <button>View Case Study →</button>
              </div>

              <div className="project-card">
                <span className="project-tag">Application Support / Testing</span>
                <h3>PromoMojo</h3>
                <p>
                  Supported application issues and enhancement requests
                  involving product functionality, pricing, content, and
                  platform behavior.
                </p>

                <div className="project-tools">
                  <span>Issue Investigation</span>
                  <span>Testing</span>
                  <span>Bug Validation</span>
                  <span>Enhancements</span>
                </div>

                <button>View Case Study →</button>
              </div>

            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section section-dark">
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
        <section className="section">
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

        {/* Certifications */}
        <section id="certifications" className="section section-dark">
          <div className="container">
            <p className="section-label">EDUCATION & CERTIFICATIONS</p>
            <h2>Certifications & Education</h2>

            <div className="cert-grid">

              <div className="cert-card">
                <span>Certification</span>
                <h3>Java Foundations Certification</h3>
                <p>[Issuing Organization]</p>
                <small>[Date] · Credential ID: [Credential ID]</small>
              </div>

              <div className="cert-card">
                <span>Certification</span>
                <h3>Systems Administration Certification</h3>
                <p>[Issuing Organization]</p>
                <small>[Date] · Credential ID: [Credential ID]</small>
              </div>

              <div className="cert-card">
                <span>Certification</span>
                <h3>SAP Business One Certification</h3>
                <p>[Issuing Organization]</p>
                <small>[Date] · Credential ID: [Credential ID]</small>
              </div>

              <div className="cert-card">
                <span>Education</span>
                <h3>Bachelor of Science in Information Technology</h3>
                <p>[Educational Institution]</p>
                <small>[Graduation Date]</small>
              </div>

            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact-section">
          <div className="container contact-content">
            <p className="section-label">CONTACT</p>

            <h2>Let's Work Together</h2>

            <p>
              Have an application issue, project requirement, or opportunity
              you'd like to discuss? I'd be happy to connect.
            </p>

            <div className="contact-buttons">
              <a href="mailto:[YOUR EMAIL]" className="primary-button">
                Email Me
              </a>

              <a href="#" className="secondary-button">
                LinkedIn
              </a>

              <a href="#" className="secondary-button">
                GitHub
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