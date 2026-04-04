import Link from "next/link";

export default function LidsEmailPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      <Link
        href="/andrew-portfolio"
        className="text-sm text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Portfolio
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-semibold mb-6">Lids Promotional Email</h1>
      <p className="text-sm text-gray-500 mb-6">Email Development Case Study</p>
      {/* Subtitle */}
      <p className="text-gray-600 mb-10 max-w-2xl">
        A responsive promotional email built to showcase product categories and
        drive engagement through clear CTAs and structured layout.
      </p>
      {/* Image */}
      <div className="mb-12 flex justify-center">
        <img
          src="/images/lids-porfolio-template-image.png"
          alt="Lids Email"
          className="max-h-[700px] object-contain rounded-lg shadow mx-auto"
        />
      </div>
      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-gray-600 mb-4">
          This project is a recreation of a promotional marketing email designed
          to highlight product categories and drive user engagement through
          clear call-to-action placement.
        </p>

        <p className="text-gray-600 mb-4">
          The focus was on building a reliable, table-based layout that renders
          consistently across major email clients while maintaining visual
          structure and hierarchy.
        </p>

        <p className="text-gray-600">
          Special attention was given to spacing, alignment, and responsive
          behavior to ensure the email adapts cleanly across desktop and mobile
          environments.
        </p>
      </section>
      {/* What I Built */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What I Built</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>
            Structured a multi-section promotional email layout to organize
            content clearly and guide user attention
          </li>

          <li>
            Designed a category-based CTA grid to support product discovery and
            improve engagement flow
          </li>

          <li>
            Implemented a table-based layout system to ensure consistent
            rendering across major email clients
          </li>

          <li>
            Developed a responsive stacking strategy to maintain usability and
            readability on mobile devices
          </li>

          <li>
            Standardized spacing and alignment to preserve visual consistency
            across all sections
          </li>
        </ul>
      </section>
      {/* Technical Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Technical Highlights</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>
            Used table-based HTML structure to support consistent rendering
            across common email clients, including Outlook
          </li>

          <li>
            Applied inline CSS to align with email client limitations where
            embedded or external styles are not supported
          </li>

          <li>
            Structured layouts to account for known email client constraints,
            prioritizing reliability over modern CSS techniques
          </li>

          <li>
            Built responsive stacking behavior to maintain readability across
            desktop and mobile screen sizes
          </li>

          <li>
            Incorporated practical experience from troubleshooting email
            rendering issues in production environments
          </li>
        </ul>
      </section>

      {/* Tools */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Tools Used</h2>

        <p className="text-gray-600 mb-2">
          Built independently as a front-end email development project.
        </p>

        <p className="text-gray-600">
          HTML, CSS, Table-Based Email Development, Responsive Design, Email
          Client Testing
        </p>
      </section>
    </main>
  );
}
