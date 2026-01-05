import React from 'react'

function Testimonials() {
  const data = [
    {
      name: "Startup Founder",
      role: "SaaS Product",
      text: "RenderWeb delivered exactly what we needed. Clean, fast and scalable."
    },
    {
      name: "Business Owner",
      role: "E-commerce",
      text: "Professional work with great communication. Highly recommended."
    },
    {
      name: "Product Manager",
      role: "Tech Company",
      text: "Modern UI and excellent performance. Great experience overall."
    }
  ];

  return (
    <section className="py-24 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur"
          >
            <p className="text-gray-300 mb-4">“{item.text}”</p>
            <h4 className="font-semibold">{item.name}</h4>
            <span className="text-sm text-gray-400">{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
