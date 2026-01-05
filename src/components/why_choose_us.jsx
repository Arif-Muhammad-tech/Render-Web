import "./whyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">
          We focus on quality, performance, and real business value.
        </p>

        <div className="why-grid">
          <div className="why-card">
            <h3>Modern Design</h3>
            <p>Clean, modern UI built with user experience in mind.</p>
          </div>

          <div className="why-card">
            <h3>Hosting Support</h3>
            <p>Providing reliable hosting solutions for your projects.</p>
          </div>

          <div className="why-card">
            <h3>Scalable Code</h3>
            <p>Clean architecture that grows with your business.</p>
          </div>

          <div className="why-card">
            <h3>SEO Ready</h3>
            <p>Built with SEO best practices for visibility and reach.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
