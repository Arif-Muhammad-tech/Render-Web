import Navbar from "../components/Navbar.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center bg-gray-950 text-white">
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

    {/* Right Visual (Placeholder) */}
    <div className="hidden md:flex justify-center">
      <div className="w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
    </div>

  </div>
</section>


    </>
  );
}

export default Home;
