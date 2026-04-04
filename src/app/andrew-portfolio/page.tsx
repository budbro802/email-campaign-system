"use client";
import { blogPosts } from "@/const/blogData";

import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
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
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import { Linkedin, Twitch } from "lucide-react";
import { Twitter } from "react-feather";
import CounterSection from "@/components/ui/CounterSection";
import VideoBlock from "@/components/ui/VideoBlock";
import EmailProjects from "@/components/portfolio/EmailProjects";
import SkillsSection from "@/components/portfolio/SkillsSection";
import AboutSection from "@/components/portfolio/AboutSection";

export default function HomePage() {
  const bottomPosts = blogPosts.filter((post) => !post.featured).slice(0, 3);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Hero */}
      <PortfolioHero />
      <AboutSection />
      <EmailProjects />
      <SkillsSection />

      {/* footer */}
      <Footer />
    </>
  );
}
