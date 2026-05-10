export default function CampaignCaseStudy() {
  return (
    <main className="bg-white text-slate-900 px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* TITLE */}
        <section>
          <div className="mb-6">
            <a
              href="https://email-developer-portfolio-delta.vercel.app/"
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              ← Back to Portfolio
            </a>
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Candidate Engagement Campaign System
          </h1>
          <p className="text-slate-600">
            A candidate engagement system built with Next.js that simulates how
            recruiting platforms capture applicant data, process submissions,
            and trigger automated communication workflows.
          </p>
        </section>

        {/* OVERVIEW */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-slate-600">
            This project demonstrates how modern recruiting and marketing
            systems capture candidate information, route it through backend
            processing, and integrate with external platforms to support
            engagement and communication workflows.
          </p>
          <p className="text-slate-600">
            This reflects real-world workflows used in recruiting platforms,
            where candidate data is captured, processed, and used to trigger
            targeted communication.
          </p>

          <h3 className="text-xl font-semibold mt-8 text-center">
            Project Walkthrough
          </h3>
          <div className="mt-8 flex justify-center">
            <iframe
              className="w-full max-w-4xl aspect-video rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/KvD6smLTYA4"
              title="Candidate Engagement Campaign System Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* FEATURES */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">What This Includes</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Responsive landing page designed for candidate intake</li>
            <li>Structured form handling for applicant data</li>
            <li>API route for processing and routing submissions</li>
            <li>
              Integration with an email platform (Brevo) for contact management
            </li>
            <li>Automated email sequence simulating candidate communication</li>
          </ul>
        </section>

        {/* WORKFLOW */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Workflow</h2>
          <p className="text-slate-600">
            Candidate submits form → Data sent to API → Data processed and
            validated → Contact stored in email platform → Automated
            communication sequence triggered
          </p>
        </section>

        {/* TECH */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Next.js (App Router)</li>
            <li>Tailwind CSS</li>
            <li>API Routes</li>
            <li>HTML Email Development (table-based, responsive)</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center">
          <a
            href="/campaign"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-full"
          >
            View Live Campaign
          </a>
        </section>
      </div>
    </main>
  );
}
