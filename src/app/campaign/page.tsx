"use client";
import { blogPosts } from "@/const/blogData";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/layout/CtaSection";
import PageTitle3 from "@/components/ui/PageTitle3";
import Button from "@/components/ui/Button";
import BlogCardThree from "@/components/ui/BlogCardThree";
import PriceCard from "@/components/ui/PriceCard";

import TeamMember from "@/components/ui/TeamMember";
import BadgeLink from "@/components/ui/BadgeLink";
import Image from "next/image";
import CounterCarousel from "@/components/ui/MainSlider";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import testimonials from "@/data/testimonials.json";
import maincarsoul from "@/data/maincarsoul.json";
import HeroOne from "@/components/layout/Heroone";
import { Linkedin, Twitch } from "lucide-react";
import { Twitter } from "react-feather";
import CounterSection from "@/components/ui/CounterSection";
import VideoBlock from "@/components/ui/VideoBlock";

export default function CampaignPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600 mb-3">
              Email Campaign Demo
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get the Email Developer Starter Kit
            </h1>

            <p className="text-lg text-slate-600 mb-8">
              A real-world campaign demonstrating landing page development, lead
              capture, and automated email workflows.
            </p>

            <a
              href="#signup"
              className="inline-block bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90"
            >
              Join the List
            </a>
          </div>

          <div className="bg-slate-100 p-6 rounded-2xl">
            <p className="text-slate-600">This campaign showcases:</p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Responsive landing page</li>
              <li>• Lead capture workflow</li>
              <li>• ESP integration</li>
              <li>• Automated email sequence</li>
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
              Create a responsive landing page using Next.js.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Capture</h3>
            <p className="text-slate-600">
              Collect leads through a structured form.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Nurture</h3>
            <p className="text-slate-600">Trigger automated email sequences.</p>
          </div>
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white border rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Join the Campaign</h2>
            <p className="text-slate-600 mt-2">
              Enter your details to receive the sequence.
            </p>
          </div>

          <form className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              className="border p-3 rounded-lg"
            />

            <input
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
        </div>
      </section>
    </main>
  );
}
