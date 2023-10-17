import React from "react";
import "./collage-section-flex.css";

export const CollageSectionFlex = () => {
  return (
    <div className="page-about__collage page-about__collage--products">
      <div className="page-about__collage__background bg-lemonade"></div>
      <div
        className="page-about__collage__media imgix-fluid imgix-fluid-bg"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundImage:
            "url('https://ableton-production.imgix.net/about/photo-1.jpg?dpr=2&fit=crop&h=667&ixjsv=1.1.3&q=50&w=667')",
        }}
      ></div>
      <div
        className="page-about__collage__media imgix-fluid imgix-fluid-bg"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundImage:
            "url('https://ableton-production.imgix.net/about/photo-2.jpg?dpr=2&fit=crop&h=400&ixjsv=1.1.3&q=50&w=533')",
        }}
      ></div>
    </div>
  );
};
