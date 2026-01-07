import React from "react";
import "./services.css";
import webDevIcon from "../assets/images/web_development.png";
import itSupportIcon from "../assets/images/It_support.png";
import portfolioIcon from "../assets/images/portfolio.png";


function Services() {
    return (
        <section id="services" className="services-section">
            <div className="container services-container">
                <h2 className="text-center fw-bold mb-20 text-4xl text-white font-bold">Our Services</h2>

                <div className="services-grid mb-10 py">
                    <div className="card card-1">
                        <div className="text">
                            <h3>Web Development</h3>
                            <p>Converting your Dream into Online</p>
                        </div>
                        <div className="icon"><img src={webDevIcon} alt="Web Development" /></div>
                    </div>
                    <div className="card card-2">
                        <div className="text">
                            <h3>IT support</h3>
                            <p>Providing technical assistance and troubleshooting</p>
                        </div>
                        <div className="icon2"><img src={itSupportIcon} alt="IT Support" /></div>
                    </div>
                    <div className="card card-3">
                        <div className="text">
                            <h3>portfolio</h3>
                            <p>Creating a showcase of your work and achievements</p>
                        </div>
                        <div className="icon3"><img src={portfolioIcon} alt="Portfolio" /></div>
                    </div>
                    <div className="card card-4">
                        <div className="text">
                            <h3>Resume Preparation</h3>
                            <p>Helping you create a compelling resume that stands out from the crowd</p>
                        </div>
                        <div className="icon3"><img src={portfolioIcon} alt="Portfolio" /></div>
                    </div>
                    <div className="card card-5">
                        <div className="text">
                            <h3>Resume Preparation</h3>
                            <p>Helping you create a compelling resume that stands out from the crowd</p>
                        </div>
                        <div className="icon3"><img src={portfolioIcon} alt="Portfolio" /></div>
                    </div>
                    <div className="card card-6">
                        <div className="text">
                            <h3>Resume Preparation</h3>
                            <p>Helping you create a compelling <br />resume that stands out from the crowd</p>
                        </div>
                        <div className="icon3"><img src={portfolioIcon} alt="Portfolio" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
