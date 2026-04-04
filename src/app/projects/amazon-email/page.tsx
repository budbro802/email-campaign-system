import Link from "next/link";

export default function AmazonEmailCaseStudy() {
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
        Amazon Email Template Recreation
      </h1>
      <p className="text-sm text-gray-500 mb-6">Email Development Case Study</p>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-600">
          This project recreates a transactional-style Amazon email, focusing on
          structured layout, content hierarchy, and email client compatibility.
          The build emphasizes table-based HTML, inline styling, and reliable
          rendering across major email clients.
        </p>
      </section>

      {/* Image */}
      <div className="mb-10">
        <img
          src="/images/amazon-mock-porfolio-template-image.png"
          alt="Amazon Email"
          className="w-full border rounded-lg"
        />
      </div>

      {/* Technical Highlights */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Technical Highlights</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Table-based HTML layout for email client compatibility</li>
          <li>Inline CSS for consistent rendering across clients</li>
          <li>Structured layout for transactional email content</li>
          <li>Button and spacing alignment using nested tables</li>
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
