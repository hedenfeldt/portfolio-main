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
          <header className="about_container">
            <div className="about_left" id="hero-img">
              <img src="/IMG_3661.jpg" alt="hero img" />
            </div>
            <div className="about_right">
              <h3>Per-Olof Hedenfeldt</h3>
              <p>Jag är en fullstack utvecklare med en passion för att skapa effektiva och användarvänliga program. <br /> Mitt mål är att skapa program som förbättrar människors liv på ett meningsfullt sätt. <br /> Jag tror på att bygga mjukvara som är robust, skalbar och lättskött.</p>
              
                <section className="Work" id="Kompetens">
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
                  </div>
              </section>
              <div>Phone: +46 72 21 27 420</div>
              <div>Email: Hedenfeldt@outlook.com</div>
            </div>
            
          </header>
      {/* <header className="hero" id="Hem">
        <div className="hero-img">
          <img src="/IMG_3661.jpg" alt="HeroPicture" />
        </div>
        <div>
          <h1>Hej, jag är Per-Olof, en Fullstack-utvecklare.</h1>
          <p>Jag är en fullstack utvecklare med en passion för att skapa effektiva och användarvänliga program.Mitt mål är att skapa program som förbättrar människors liv på ett meningsfullt sätt. Jag tror på att bygga mjukvara som är robust, skalbar och lättskött.</p>
          <section className="Work" id="Kompetens">
        <p className="Work-subtitle"></p>
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
        </div>
      </header> */}
      
      

      <section className="Projekt-container" id="Projekt">
        <h3 className="Work-title">Projekt</h3>
        <article className="Projekt">
          <div className="img-container">
            <img className="Projekt-img" src="/Screenshot Capture - 2023-04-18 - 01-45-41.png" alt="text to speech" />
            <div className="img-overlay"></div>
          </div>
          <div className="Projekt-text-container">
            <h3 className="Projekt-text-title">Text To Speech</h3>
            <p className="Projekt-text-subtitle">Text to Speech (TTS) app är en programvara som kan konvertera skriven text till tal. Användaren skriver in texten som sedan omvandlas till en talad version</p>
            <Link to="/text-to-speech">
            <button>Gå till appen</button>
            </Link>
            <div className="Chip-wrapper-projekt">
              <div className="chip-projekt">React</div>
              <div className="chip-projekt">Javascript</div>
              <div className="chip-projekt">Css</div>
            </div>
          </div>
        </article>

        <article className="Projekt">
          <div className="img-container">
            <img className="Projekt-img" src="/Screenshot Capture - 2023-04-18 - 01-43-24.png" alt="Spotify" />
            <div className="img-overlay"></div>
          </div>
          <div className="Projekt-text-container">
            <h3 className="Projekt-text-title">Spotify Clone</h3>
            <p className="Projekt-text-subtitle">Spotify clone en musikströmningstjänst. Appen låter användare spela upp musik, skapa spellistor och följa artister. Det kan också ha funktioner som rekommenderade spellistor baserade på användarens musiksmak och en sökfunktion för att hitta specifika låtar eller artister.</p>
            <a href="https://visionary-cranachan-4bedbd.netlify.app/">
            <button>Gå till appen</button>
            </a>
            <div className="Chip-wrapper-projekt">
              <div className="chip-projekt">React</div>
              <div className="chip-projekt">Javascript</div>
              <div className="chip-projekt">Yarn</div>
              <div className="chip-projekt">Spotify API</div>
            </div>
          </div>
        </article>

        <article className="Projekt">
          <div className="img-container">
            <img className="Projekt-img" src="/Kanban.png" alt="Kanban" />
            <div className="img-overlay"></div>
          </div>
          <div className="Projekt-text-container">
            <h3 className="Projekt-text-title">Kanban Board</h3>
            <p className="Projekt-text-subtitle">En Kanban-board är en visuell arbetsplaneringsmetod som används för att hantera och övervaka arbetsuppgifter. Den består av en virtuell tavla med olika kolumner som representerar olika faser i en arbetsprocess. Uppgifterna flyttas från en kolumn till en annan beroende på vilken fas de befinner sig i, vilket ger en tydlig översikt över processen och vad som måste göras.</p>
            <a href="https://flourishing-faun-9bc059.netlify.app/">
            <button>Gå till appen</button>
            </a>
            <div className="Chip-wrapper-projekt">
              <div className="chip-projekt">React</div>
              <div className="chip-projekt">Javascript</div>
              <div className="chip-projekt">Sass</div>
            </div>
          </div>
        </article>

        <article className="Projekt">
          <div className="img-container">
            <img className="Projekt-img" src="/Screenshot Capture - 2023-04-18 - 01-39-20.png" alt="Klarna checkout" />
            <div className="img-overlay"></div>
          </div>
          <div className="Projekt-text-container">
            <h3 className="Projekt-text-title">Klarna Checkout</h3>
            <p className="Projekt-text-subtitle">Klarna checkout är en betalningslösning som gör det enkelt för kunder att betala för sina onlineköp. Den erbjuder olika betalningsalternativ, inklusive direktbetalning, faktura, och delbetalning. Kunderna kan genomföra sina köp med enkel inloggning och en smidig betalningsprocess som minimerar avbrott och förbättrar köpupplevelsen.</p>
            <a href="https://klarna-poh-z5es.onrender.com/">
            <button>Gå till appen</button>
            </a>
            <div className="Chip-wrapper-projekt">
              <div className="chip-projekt">Javascript</div>
              <div className="chip-projekt">Klarna API</div>
            </div>
          </div>
        </article>


      </section>

      <footer id="Kontakta-mig">
        
          <div className="Foot-container">
          <h3 className="Foot-title">Adress:</h3>
          <p className="Foot-subtitle">Sweden, Hudiksvall</p>
          </div>
          <div className="Foot-container">
          <h3 className="Foot-title">Mail:</h3>
            
          <p className="Foot-subtitle">Hedenfeldt@outlook.com</p>
          </div>
          <div className="Foot-container">
          <h3 className="Foot-title">Phone:</h3>
          <p className="Foot-subtitle">+46 72 21 27 420</p>
        </div>
        

      </footer>

    </div>
  );
}

export default HomePage;
