import React from "react";

function CallToAction() {
  return (
    <section className="py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="calltoaction relative overflow-hidden rounded-2xl border border-white/1 p-12 text-center">

          {/* Glow background */}


          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build your next{" "}
            <span className="text-blue-500">digital product?</span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Let’s turn your idea into a fast, modern, and scalable web experience.
            We help startups and businesses grow online.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg font-semibold transition">
              Get Free Consultation
            </button>

            <button className="border border-gray-600 hover:border-blue-500 px-10 py-4 rounded-lg font-semibold transition">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
