import Link from "next/link";

export default function NewsletterCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/andrew-portfolio"
        className="text-sm text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Portfolio
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6">
        Content Newsletter Email Template
      </h1>
      <p className="text-sm text-gray-500 mb-6">Email Development Case Study</p>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-600">
          This project recreates a content-driven newsletter email designed to
          highlight updates, featured content, and user engagement
          opportunities. The layout emphasizes readability, structured sections,
          and responsive stacking across devices using table-based HTML.
        </p>
      </section>

      {/* Image */}
      <div className="mb-10">
        <img
          src="/images/explore-opportunities-porfolio-template-image.png"
          alt="Newsletter Email"
          className="w-full border rounded-lg"
        />
      </div>

      {/* Technical Highlights */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Technical Highlights</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Table-based layout for reliable email rendering</li>
          <li>Multi-section content structure for newsletters</li>
          <li>Image and text stacking for responsive behavior</li>
          <li>Consistent spacing and typography for readability</li>
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
