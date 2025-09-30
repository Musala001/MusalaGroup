import React from "react";
import "./App.css";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

const projects = [
  { name: "ChatApp", url: "https://musala.onrender.com" },
  { name: "Chat 4.0", url: "https://musalschat4-0.onrender.com" },
  { name: "Shift Ciphers", url: "https://musalashiftciphers.onrender.com" },
  { name: "Wanga Study Resources", url: "https://wanga-study-resources.onrender.com" },
  { name: "Seeing Beyond AI", url: "https://seeing-beyond-ai.vercel.app/" },
  { name: "University Research Collaboration", url: "https://unirescollab-a0bgfbhzcfg6angs.southafricanorth-01.azurewebsites.net/" },
  { name: "Medical Control", url: "https://musala001.github.io/Medical-Control/" },
];

const services = [
  { name: "Business Websites", image: "/business.png", description: "Custom websites for all business types." },
  { name: "Personal Websites", image: "/personal.png", description: "Showcase yourself or your personal brand online." },
  { name: "Church & School Websites", image: "/churchschool.png", description: "Professional websites for institutions and schools." },
  { name: "Resort & Hospitality Sites", image: "/resort.png", description: "Beautiful websites for resorts and hotels." },
  { name: "Custom Apps", image: "/apps.png", description: "Tailor-made apps to solve unique problems." },
];

const App: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/MusalaGr.png" alt="MUSALA GROUP" className="logo-img" />
          MUSALA GROUP TECHNOLOGY
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="hero" className="hero">
        <h1>We Build Websites That Power Businesses and People</h1>
        <p>Professional website development and custom apps tailored for your needs.</p>
        <a href="#contact" className="btn">Get a Free Quote</a>
      </section>

      <section id="about" className="section about">
        <div className="about-container">
          <h2>About Us</h2>
          <p>
            MUSALA GROUP Pty Ltd is a South African software solutions company
            specializing in professional website development. We create websites for
            businesses, churches, schools, resorts, influencers, and more. Beyond
            websites, we build our own applications designed to solve real-world
            problems.
          </p>
        </div>
      </section>

      <section id="services" className="section services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {services.map((service) => (
            <div key={service.name} className="service-card">
              <img src={service.image} alt={service.name} className="service-img" />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section portfolio">
  <h2>Our Work</h2>
  <div className="portfolio-grid">
    {projects.map((project) => (
      <a
        key={project.name}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-item"
      >
        <div className="portfolio-content">
          <h3>{project.name}</h3>
          <span className="visit-site-btn">Visit Site</span>
        </div>
      </a>
    ))}
  </div>
</section>


{/* Contact Section */}
<section id="contact" className="section contact">
  <h2>Contact Us</h2>
  <div className="contact-grid">
    <div className="contact-card">
      <h3>WhatsApp / Call</h3>
      <a href="tel:+27836679065">0836679065</a>
    </div>
    <div className="contact-card">
      <h3>Email</h3>
      <a href="mailto:solomonndouvhada@gmail.com">solomonndouvhada@gmail.com</a>
    </div>
    <div className="contact-card social-card">
      <h3>Socials</h3>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/musala-group-pty-ltd-132448387/" target="_blank"><FaLinkedin /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
  </div>
  <a href="mailto:solomonndouvhada@gmail.com" className="btn contact-btn">Send Email</a>
</section>



      <footer className="footer">
        <p>© {new Date().getFullYear()} MUSALA GROUP Pty Ltd. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
