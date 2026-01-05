import React from "react";
import "./HowWeWork.css";


function HowWeWork() {
  return (
    <section className="how-container">
      <h2 className="how-title">How We Work</h2>

      <div className="flow-wrapper">
        <Step number="01" title="Discover" desc="Understanding your goals and users." />
        <Line />
        <Step number="02" title="Design" desc="Crafting clean and intuitive UI." />
        <Line />
        <Step number="03" title="Develop" desc="Building fast, scalable systems." />
        <Line />
        <Step number="04" title="Launch" desc="Deploy, test and support." />
      </div>
    </section>
  );
}

export default HowWeWork;

function Step({ number, title, desc }) {
  return (
    <div className="step-box">
      <div className="step-circle">{number}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Line() {
  return <div className="flow-line" />;
}
