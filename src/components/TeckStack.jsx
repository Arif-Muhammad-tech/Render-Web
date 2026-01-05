import React from 'react'
import HTML from '../assets/images/icons/html-5.png'
import CSS from '../assets/images/icons/css-3.png'
import JS from '../assets/images/icons/js.png'
import REACT from '../assets/images/icons/React.png'
import NODE from '../assets/images/icons/nodejs.png'
import BOOTSTRAP from '../assets/images/icons/bootstrap.png'
import './TechStack.css'

function TechStack() {
  const logos = [
    HTML,
    CSS,
    JS,
    REACT,
    NODE,
    BOOTSTRAP
  ];

  return (
    <section className="tech-section">
      <h2 className="tech-title">Tech Stack</h2>

      <div className="tech-marquee">
        <div className="tech-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="tech-item" key={index}>
              <img src={logo} alt="tech" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
