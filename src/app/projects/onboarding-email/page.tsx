export default function GlobalAlignEmailCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6">
        User Onboarding Email Template
      </h1>
      <p className="text-sm text-gray-500 mb-6">Email Development Case Study</p>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-600">
          This project recreates a user onboarding email designed to guide users
          back into a platform. The layout focuses on clear call-to-action
          placement, structured content sections, and readability across
          devices. The goal was to replicate a real-world onboarding experience
          using table-based HTML and inline CSS.
        </p>
      </section>

      {/* Image */}
      <div className="mb-10">
        <img
          src="/images/global-align-porfolio-template-image.png"
          alt="Global Align Email"
          className="w-full border rounded-lg"
        />
      </div>

      {/* Technical Highlights */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Technical Highlights</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Table-based HTML layout for email client compatibility</li>
          <li>Inline CSS styling for consistent rendering</li>
          <li>Clear CTA hierarchy for user navigation</li>
          <li>Structured sections to guide user flow</li>.
        </ul>
      </section>

      {/* Tools */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Tools Used</h2>
        <p className="text-gray-600">
          HTML, CSS, Table-Based Email Development, Responsive Design
        </p>
      </section>
    </main>
  );
}
