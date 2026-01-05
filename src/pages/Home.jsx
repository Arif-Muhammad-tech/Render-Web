import Navbar from "../components/Navbar.jsx";
import "./Home.css";

import card_bg from "../assets/images/card_bg.png";
import card_bg_back from "../assets/images/card_bg.jpeg";

import Services from "../components/services.jsx";
import Why_choose_us from "../components/why_choose_us.jsx";
import HowWeWork from "../components/HowWeWork.jsx";
import Projects from "../components/Projects.jsx";
import TechStack from "../components/TeckStack.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CallToAction from "../components/CallToAction.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen pt-20 flex items-center text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Render Your <span className="text-blue-500">Ideas Into</span> Reality
            </h1>

            <p className="mt-6 text-gray-400 max-w-xl">
              We helps you to upgrade your business into next level by crafting
              stunning, responsive websites that captivate your audience and drive results.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
                Get Started
              </button>

              <button className="border border-gray-600 hover:border-blue-500 px-8 py-3 rounded-lg font-semibold">
                View Services
              </button>
            </div>
          </div>

          {/* RIGHT FLIP CARD */}
          <div className="hidden md:flex justify-center items-center perspective">
            <div className="flip-card w-96 h-56">
              <div className="flip-inner">

                {/* FRONT */}
                <div
                  className="flip-front rounded-2xl border border-white overflow-hidden"
                  style={{
                    backgroundImage: `url(${card_bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="relative h-full p-6 flex flex-col justify-center text-center">
                    <h2 className="text-xl font-bold text-white">RenderWeb</h2>
                    <p className="text-sm text-gray-300">
                      Crafting modern, responsive websites that drive growth and engagement.
                    </p>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="flip-back rounded-2xl border border-white/20 bg-black/70 backdrop-blur-xl p-6"
                  style={{
                    backgroundImage: `url(${card_bg_back})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="grid grid-cols-2 grid-rows-2 gap-6 text-gray-300 h-full">
                    <div>
                      <h4 className="text-white font-semibold mb-2">RenderWeb</h4>
                      <p className="text-xs">Modern web solutions for businesses.</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Services</h4>
                      <ul className="text-xs space-y-1">
                        <li>Web Development</li>
                        <li>Landing Pages</li>
                        <li>Web Apps</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Location</h4>
                      <p className="text-xs">Kerala, India</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Contact</h4>
                      <p className="text-xs">hello@renderweb.dev</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <Services />
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <Why_choose_us />
      </section>

      {/* HOW WE WORK */}
      <section className="py-24">
        <HowWeWork />
      </section>

      {/* PROJECTS */}
      <section className="py-24">
        <Projects />
      </section>

      {/* TECH STACK */}
      <section className="py-24">
        <TechStack />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <Testimonials />
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24">
        <CallToAction />
      </section>

      {/* CONTACT */}
      <section className="py-24">
        <Contact />
      </section>

      {/* FOOTER (NO SECTION WRAP) */}
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
