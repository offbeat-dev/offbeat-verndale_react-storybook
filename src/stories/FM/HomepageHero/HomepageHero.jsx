import React from "react";
import "./homepage-hero.css";

export const HomepageHero = () => {
  return (
    <section className="section home-hero hero-100vh">
      <div className="container home-hero">
        <div className="w-layout-grid grid">
          <h1 className="heading-1 home-hero">Creatives shape the future.</h1>
          <div className="hero-grid-right">
            <div className="heading-4 home-hero">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FM
              brands equip creatives with premium resources so they can deliver
              the most influential work of their careers.
            </div>
            <div className="home-hero-scroll-badge-wrapper">
              <div className="home-hero-scroll-badge-container">
                <div>Scroll</div>
                <img
                  src="https://assets.website-files.com/63ef04fb550ec95cc2c05902/63ef2f02a31e987bcba131ea_Arrow_white.svg"
                  loading="lazy"
                  alt="Arrow"
                  className="home-hero-scroll-badge-arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-container home-hero">
        <div className="hero-video w-background-video w-background-video-atom">
          <video autoPlay loop muted playsInline>
            <source src="https://assets.website-files.com/63ef04fb550ec95cc2c05902/63ffb776a62f34b613b15374_Home-Page_resized-transcode.mp4" />
            <source src="https://assets.website-files.com/63ef04fb550ec95cc2c05902/63ffb776a62f34b613b15374_Home-Page_resized-transcode.webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
