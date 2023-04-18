import React from "react";
import { Link } from "react-router-dom";


function HomePage(Props) {
  return (
    <div className="container">
      <nav>
        <h2>Poh</h2>
        <div className="nav-btn">
          <a href="#Hem">
            <button>Hem</button>
          </a>
          <a href="#Kompetens">
            <button>Kompetens</button>
          </a>
          <a href="#Projekt">
            <button>Projekt</button>
          </a>
          <a href="#Kontakta-mig">
            <button>Kontakta mig</button>
          </a>
        </div>
        <div className="nav-links">
          <a href="https://github.com/hedenfeldt">
            <img src="/github.png" alt="github logo" />
          </a>
          <a href="https://www.linkedin.com/in/per-olof-hedenfeldt-0b848a259/">
            <img src="/linkedin-logo.png" alt="linkedin" />
          </a>
        </div>
      </nav>

      <header className="hero" id="Hem">
        <div className="hero-img">
          <img src="/IMG_3661.jpg" alt="HeroPicture" />
        </div>
        <div>
          <h1>Hej, jag är Per-Olof, en Fullstack-utvecklare.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ab dolore repellendus eos, odio a praesentium quo aliquam non quia minima sint quisquam error optio quae libero quaerat, unde quis recusandae nulla repudiandae iure omnis. Sapiente amet adipisci odio. Magni earum et commodi ab accusantium perferendis repudiandae ipsam ullam eius?</p>
        </div>
      </header>
      
      <section className="Work" id="Kompetens">
        <h2 className="Work-title">Kompetens</h2>
        <p className="Work-subtitle">Tekniker jag har lärt mig.</p>
      <div className="Chip-wrapper">
        <div className="chip">React</div>
        <div className="chip">Mongo DB</div>
        <div className="chip">Express</div>
        <div className="chip">NPM</div>
        <div className="chip">Node.js</div>
        <div className="chip">Typescript</div>
        <div className="chip">CSS</div>
        <div className="chip">Sass</div>
        <div className="chip">Javascript</div>
        <div className="chip">HTML</div>
        <div className="chip">Javascript</div>
      </div>
      </section>

      <section className="Projekt-container" id="Projekt">
        <article className="Projekt">
          <div className="img-container">
            <img className="Projekt-img" src="/Screenshot Capture - 2023-04-18 - 01-45-41.png" alt="text to speech" />
            <div className="img-overlay"></div>
          </div>
          <div className="Projekt-text-container">
            <h3 className="Projekt-text-title">Text To Speech</h3>
            <p className="Projekt-text-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus accusamus quos quas labore minus cumque, nesciunt inventore obcaecati magni.</p>
            <Link to="/text-to-speech">
            <button>Gå till appen</button>
            </Link>
            
          </div>
        </article>

        <article className="Projekt">
          <div className="img-container">
            <img className="Projekt-img" src="/Screenshot Capture - 2023-04-18 - 01-43-24.png" alt="Spotify" />
            <div className="img-overlay"></div>
          </div>
          <div className="Projekt-text-container">
            <h3 className="Projekt-text-title">Spotify Clone</h3>
            <p className="Projekt-text-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus accusamus quos quas labore minus cumque, nesciunt inventore obcaecati magni.</p>
            <a href="https://visionary-cranachan-4bedbd.netlify.app/">
            <button>Gå till appen</button>
            </a>
          </div>
        </article>

        <article className="Projekt">
          <div className="img-container">
            <img className="Projekt-img" src="/Kanban.png" alt="Kanban" />
            <div className="img-overlay"></div>
          </div>
          <div className="Projekt-text-container">
            <h3 className="Projekt-text-title">Kanban Board</h3>
            <p className="Projekt-text-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus accusamus quos quas labore minus cumque, nesciunt inventore obcaecati magni.</p>
            <a href="https://flourishing-faun-9bc059.netlify.app/">
            <button>Gå till appen</button>
            </a>
          </div>
        </article>

        <article className="Projekt">
          <div className="img-container">
            <img className="Projekt-img" src="/Screenshot Capture - 2023-04-18 - 01-39-20.png" alt="Klarna checkout" />
            <div className="img-overlay"></div>
          </div>
          <div className="Projekt-text-container">
            <h3 className="Projekt-text-title">Klarna Checkout</h3>
            <p className="Projekt-text-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus accusamus quos quas labore minus cumque, nesciunt inventore obcaecati magni.</p>
            <a href="https://klarna-poh-z5es.onrender.com/">
            <button>Gå till appen</button>
            </a>
          </div>
        </article>


      </section>

      <footer id="Kontakta-mig">
        
          <div className="Foot-container">
          <h3 className="Foot-title">Adress</h3>
          <p className="Foot-subtitle">Sweden, Hudiksvall</p>
          </div>
          <div className="Foot-container">
          <h3 className="Foot-title">Mail</h3>
            
          <p className="Foot-subtitle">Hedenfeldt@outlook.com</p>
          </div>
          <div className="Foot-container">
          <h3 className="Foot-title">Phone</h3>
          <p className="Foot-subtitle">+46 72 21 27 420</p>
        </div>
        

      </footer>

    </div>
  );
}

export default HomePage;
