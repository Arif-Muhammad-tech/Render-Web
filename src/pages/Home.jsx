import Navbar from "../components/Navbar.jsx";
import "./Home.css";
import card_bg from "../assets/images/card_bg.png";
import card_bg_back from "../assets/images/card_bg.jpeg";
import Services from "../components/services.jsx";
import Why_choose_us from "../components/why_choose_us.jsx";
function Home() {
  return (
    <>
      <Navbar />

<section className="min-h-screen pt-20 flex items-center text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Building <span className="text-blue-500">Modern Web</span> Experiences
            </h1>

            <p className="mt-6 text-gray-400 max-w-xl">
              We help businesses grow with fast, scalable, and modern websites tailored to their needs.
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

          {/* Right Visual – Flip Card */}
          {/* Right Visual – Flip Card */}
          <div className="hidden md:flex justify-center items-center perspective">
            <div className="flip-card w-96 h-56">

              <div className="flip-inner">

                {/* FRONT */}
                <div
                  className="flip-front rounded-2xl border border-white overflow-hidden"
                  style={{
                    backgroundImage: `url(${card_bg})`,
                    opacity: 0.9,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/"></div>

                  <div className="relative h-full p-6 flex flex-col justify-center text-center">
                    <h2 className="text-xl font-bold text-white">
                      RenderWeb
                    </h2>
                    <p className="text-sm text-gray-300">
                      Building Modern Web Experiences
                    </p>
                  </div>
                </div>

                {/* BACK (placeholder for now) */}
                {/* BACK SIDE */}
                <div className="flip-back rounded-2xl border border-white/20 bg-black/70 backdrop-blur-xl p-6"
                style={{
                    backgroundImage: `url(${card_bg_back})`,
                    opacity: 0.9,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                  <div className="grid grid-cols-2 grid-rows-2 gap-6 text-gray-300 h-full">

                    {/* Top Left – Company */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">RenderWeb</h4>
                      <p className="text-xs leading-relaxed">
                        Modern web solutions for startups and businesses.
                      </p>
                    </div>

                    {/* Top Right – Services */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Services</h4>
                      <ul className="space-y-1 text-xs">
                        <li>Web Development</li>
                        <li>Landing Pages</li>
                        <li>Web Apps</li>
                      </ul>
                    </div>

                    {/* Bottom Left – Tech Stack */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Location</h4>
                      <ul className="space-y-1 text-xs">
                        <li>Trivandrum Kerala, India</li>
                      </ul>
                    </div>

                    {/* Bottom Right – Contact */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Contact</h4>
                      <ul className="space-y-1 text-xs">
                        <li>renderweb.dev</li>
                        <li>hello@renderweb.dev</li>
                      </ul>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </div>



        </div>
      </section>
      <section className="">
    <Services />
  </section>
  <section>
    <Why_choose_us />
  </section>


    </>
  );
}

export default Home;
