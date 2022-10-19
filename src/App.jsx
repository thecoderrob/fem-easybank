import { useState } from "react";
import "./styles.css";

import logo from "./assets/logo.svg";
import logoDark from "./assets/logo-dark.svg";

import mockups from "./assets/image-mockups.png";

import { perks, articles } from "./data";

import Perk from "./components/Perk";
import Article from "./components/Article";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="App">
      <header>
        <div className="container--header | container flex">
          <div>
            <img src={logo} alt="Site logo" />
          </div>

          <button
            className="nav-toggle"
            data-expanded={isNavOpen}
            onClick={(e) => setIsNavOpen(!isNavOpen)}
          >
            <span className="sr-only">Menu</span>
          </button>

          <nav className="primary-nav">
            <ul className="primary-nav__list | flex">
              <li className="primary-nav__item">
                <a href="#home" className="primary-nav__link">
                  Home
                </a>
              </li>
              <li className="primary-nav__item">
                <a href="#about" className="primary-nav__link">
                  About
                </a>
              </li>
              <li className="primary-nav__item">
                <a href="#contact" className="primary-nav__link">
                  Contact
                </a>
              </li>
              <li className="primary-nav__item">
                <a href="#blog" className="primary-nav__link">
                  Blog
                </a>
              </li>
              <li className="primary-nav__item">
                <a href="#careers" className="primary-nav__link">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <button className="cta">Request Invite</button>
        </div>
      </header>

      <main>
        <section className="section__hero | section--light">
          <div className="grid-container--hero | grid-container">
            <div className="hero__image">
              <img src={mockups} alt="Cellphones showing Easybank app" />
            </div>
            <div className="hero__content flow">
              <h1 className="fs-900 text-primary-400">
                Next generation <span className="d-block">digital banking</span>
              </h1>
              <p>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <button className="cta">Request Invite</button>
            </div>
          </div>
        </section>

        <section className="section--dark">
          <div className="container--perks | container grid">
            <div className="perks__title | flow">
              <h2 className="fs-800 text-primary-400">Why choose Easybank?</h2>
              <p>
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>

            <div className="grid--perks | grid">
              {perks.map((perk, idx) => {
                return <Perk key={idx} {...perk} />;
              })}
            </div>
          </div>
        </section>

        <section className="section--light">
          <div className="container--articles | container flow">
            <h2 className="articles__title | fs-800 text-primary-400">
              Latest Articles
            </h2>

            <div className="grid--articles | grid">
              {articles.map((article, idx) => {
                return <Article key={idx} {...article} />;
              })}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="grid-container--footer | grid-container">
          <div className="footer__socials | flex">
            <div>
              <img src={logoDark} alt="Site logo" />
            </div>

            <div className="flex" style={{ "--flex-gap": "1rem" }}>
              <a href="#facebook">
                <i className="fa-brands fa-square-facebook socials__icon"></i>
              </a>
              <a href="#youtube">
                <i className="fa-brands fa-youtube socials__icon"></i>
              </a>
              <a href="#twitter">
                <i className="fa-brands fa-twitter socials__icon"></i>
              </a>
              <a href="#pinterest">
                <i className="fa-brands fa-pinterest socials__icon"></i>
              </a>
              <a href="#instagram">
                <i className="fa-brands fa-instagram socials__icon"></i>
              </a>
            </div>
          </div>

          <nav className="footer__nav | flex">
            <ul className="footer__list-1 | flow">
              <li className="footer__item">
                <a href="#about-us" className="footer__link">
                  About Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
              <li className="footer__item">
                <a href="#blog" className="footer__link">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="footer__list-2 | flow">
              <li className="footer__item">
                <a href="#careers" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#support" className="footer__link">
                  Support
                </a>
              </li>
              <li className="footer__item">
                <a href="#privacy-policy" className="footer__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer__cta | flow">
            <button className="cta">Request Invite</button>
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
