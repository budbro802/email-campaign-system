"use client";
import { useState } from "react";

export default function CampaignPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Response:", data);
  };

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600 mb-3">
              Marketing Campaign Workflow
            </p>

            <h1 className="text-4xl font-bold leading-tight">
              Attract and Engage Job Applicants with Automated Email Campaigns
            </h1>

            <p className="text-lg text-slate-600 mb-6">
              This campaign demonstrates how recruiting and talent acquisition
              teams can use landing pages, structured lead capture, and
              automated email workflows to engage candidates more effectively.
            </p>

            <a
              href="#signup"
              className="inline-block bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90"
            >
              Join the List
            </a>

            <p className="text-sm text-center mt-4">
              Want to see how this works?{" "}
              <a href="/campaign-system" className="text-blue-600 underline">
                View the system breakdown
              </a>
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-2xl">
            <p className="text-slate-600">This campaign showcases:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Responsive recruiting landing page built with Next.js</li>
              <li>Candidate lead capture with structured form handling</li>
              <li>Simulated CRM/email platform integration</li>
              <li>Automated candidate engagement email sequence </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Build</h3>
            <p className="text-slate-600">
              Create responsive landing pages designed to attract job
              applicants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Capture</h3>
            <p className="text-slate-600">
              Collect and structure candidate data through validated inputs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Nurture</h3>
            <p className="text-slate-600">
              Trigger automated email sequences to engage candidates over time.
            </p>
          </div>
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white border rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">
              Enter your details to experience a recruiting-focused email
              workflow.
            </h2>
            <p className="text-slate-600 mt-2">
              Enter your details to experience the campaign workflow.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <input
              name="firstName"
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              className="border p-3 rounded-lg"
            />

            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="col-span-2 bg-sky-600 text-white py-3 rounded-full font-semibold"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-500 text-center mt-3">
            No spam. Unsubscribe at any time.
          </p>
          <p className="text-xs text-slate-500 text-center mt-2">
            Built as a sample candidate engagement campaign system.
          </p>
        </div>
      </section>
    </main>
  );
}
