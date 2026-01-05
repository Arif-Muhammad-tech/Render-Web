import React from "react";

function Contact() {
  return (
    <section className="py-24 mb-10 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Let’s talk about your{" "}
              <span className="text-blue-500">project</span>
            </h2>

            <p className="text-gray-400 mb-8 max-w-md">
              Have an idea or need a modern website?  
              Drop us an email and we’ll get back to you within 24 hours.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@renderweb.dev"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
              >
                ✉️ hello@renderweb.dev
              </a>

              <a
                href="https://forms.gle/ascJwMmq1NPK5p5E6"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
              >
                📝 Fill the Form
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              No spam. Just meaningful conversations.
            </p>
          </div>

          {/* RIGHT INFO CARD */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Why email us?
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>✔ Clear project discussion</li>
              <li>✔ Faster response time</li>
              <li>✔ Direct communication</li>
              <li>✔ No unnecessary forms</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
