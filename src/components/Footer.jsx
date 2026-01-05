import React from 'react'

function Footer() {
  return (
    <div>
          <section className="bg-black border-t border-white/10 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* BRAND */}
          <div>
            <h4 className="text-white text-lg font-semibold">
              Render<span className="text-blue-500">Web</span>
            </h4>
            <p className="mt-2 text-sm max-w-xs">
              Building modern, fast and scalable web experiences.
            </p>
          </div>

          {/* NAV LINKS */}
          <div className="flex md:justify-center gap-6 text-sm">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* CONTACT / SOCIAL */}
          <div className="md:text-right text-sm">
            <p>
              📧{" "}
              <a
                href="mailto:hello@renderweb.dev"
                className="hover:text-white transition"
              >
                hello@renderweb.dev
              </a>
            </p>

            <div className="flex md:justify-end gap-4 mt-3 text-lg">
              <a href="#" className="hover:text-white transition">🌐</a>
              <a href="#" className="hover:text-white transition">🐦</a>
              <a href="#" className="hover:text-white transition">📸</a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} RenderWeb. All rights reserved.
        </div>

      </div>
    </section>
    </div>
  )
}

export default Footer
