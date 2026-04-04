"use client";
import { Boxes } from "lucide-react";
import Button from "../ui/Button";
import PageTitle3 from "../ui/PageTitle3";
import Brands from "../ui/Brands";
import Image from "next/image";
import TopCarousel from "../ui/TopCarousel";

export default function PortfolioHero() {
  return (
    <div className="banner-wrap lg:pb-24 pb-12 font-dm bg-home-one-gradient-banner relative pt-24">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:pt-10 relative z-10">
          {/* left side */}
          <div className="w-full items-center flex h-full xl:pr-8">
            <div className="flex flex-col ">
              {/* Badge */}
              {/*<div>
                <span
                  className="inline-block py-2 px-3 rounded-full border border-gray-200 bg-white text-sm text-blue-600 font-medium aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="200"
                >
                  Online program is now available
                </span>
              </div>*/}

              {/* Heading */}
              <h1 className="text-gray-900 font-semibold xl:text-7xl lg:text-6xl text-5xl leading-tight tracking-tight">
                Andrew Anderson
              </h1>
              <h2 className="text-blue-600 font-semibold xl:text-6xl lg:text-5xl text-4xl leading-tight mt-4">
                Email Developer
              </h2>

              <p className="text-gray-700 text-lg mt-4">
                Marketing-Focused Front-End Developer
              </p>

              <p className="text-gray-700 max-w-md mt-5 text-base leading-relaxed">
                Building responsive HTML email templates and front-end
                experiences for real-world campaigns. Experienced in Campaign
                Monitor, CMS platforms, and client-facing production
                environments.
              </p>
            </div>
          </div>

          {/* right side */}
          <div className="w-full">
            <div
              className="relative rounded-xl lg:overflow-visible overflow-hidden aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {/* Main Image */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <Image
                  src="/images/lids-porfolio-template-image.png"
                  alt="banner"
                  decoding="async"
                  loading="eager"
                  width={637}
                  height={721}
                  className="w-full max-h-[700px] object-contain rounded-xl mx-auto"
                  priority
                />

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-medium shadow">
                  Featured Email Campaign
                </div>
              </div>

              {/* Floating Icon */}

              {/* Avatar Group */}

              {/* topslider */}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-20 pb-0 lg:pt-24 pt-12 py-0">
        <PageTitle3
          badgeText=""
          title="Supporting high-volume email campaigns & CRM systems"
          subtitle=""
          widthClass="w-full xl:w-2/3 lg:w-2/3 mx-auto"
          alignment="center"
          padding="pb-16"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-600">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200">
          Campaign Monitor
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200">
          CRM Systems
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200">
          Email Automation
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200">
          UTM Tracking
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200">
          HTML Email
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200">
          API Integrations
        </span>
      </div>
    </div>
  );
}
