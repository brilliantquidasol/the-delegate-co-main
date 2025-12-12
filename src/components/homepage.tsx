"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  PhoneCall,
  Mail,
  MapPin,
  Star,
  User,
  Info,
  Pencil,
  Paperclip,
  Check,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const differentiators = [
  {
    title: "Cost-effectiveness",
    icon: "/home/cost.png",
    copy:
      "We provide affordable Virtual Assistant services that save you time and reduce overhead, allowing you to focus on growing your business.",
  },
  {
    title: "Skilled Support",
    icon: "/home/skilled.png",
    copy:
      "Our Virtual Assistants are trained in the latest tools and platforms to help you manage tasks efficiently and stay ahead of the competition.",
  },
  {
    title: "Industry Expertise",
    icon: "/home/expertise.png",
    copy:
      "Whether you’re in real estate, e-commerce, finance, or healthcare, we match you with VAs who understand your industry and workflows.",
  },
  {
    title: "Scalability",
    icon: "/home/scalability.png",
    copy:
      "Our VA services grow with your business, ensuring you always have the right level of support—when you need it most.",
  },
  {
    title: "Intelligence, Amplified",
    icon: "/home/intelligence.png",
    copy:
      "Our AI solutions evolve with your business, delivering smarter automation and insights—exactly when you need them most.",
  },
  {
    title: "Trained. Tested. Tailored.",
    icon: "/home/trained.png",
    copy:
      "We don't just assign VAs—we prepare them. Each assistant completes hands-on training to match your processes, goals, and expectations.",
  },
];

const services = [
  {
    title: "Video Editor",
    copy:
      "Bring your brand to life through engaging visuals and polished storytelling — from social clips to full-length videos that capture attention and drive results.",
  },
  {
    title: "Graphic Designer",
    copy:
      "Enhance your brand's identity with eye-catching designs, marketing materials, and social content that leave a lasting impression.",
  },
  {
    title: "Social Media Manager",
    copy:
      "Save time and grow your online presence with consistent content planning, posting, and engagement that build genuine audience connections.",
  },
  {
    title: "General Virtual Assistant",
    copy:
      "Free up your time by delegating everyday tasks like scheduling, email management, research, and admin support — so you can focus on growth.",
  },
  {
    title: "Bookkeeper",
    copy:
      "Stay on top of your finances with accurate tracking, organized records, and timely reports that keep your business running smoothly.",
  },
  {
    title: "Telemarketer",
    copy:
      "Expand your reach and boost conversions with lead generation, follow-ups, and client outreach that turn conversations into opportunities.",
  },
];

const remoteTeam = [
  {
    title: "Video Editor",
    icon: "/home/how-we-do/video-editor.png",
    copy:
      "Transform your raw footage into compelling visual stories. Our video editors bring creativity, precision, and storytelling together to produce engaging content — whether it’s for social media, marketing campaigns, or branded materials. We ensure every cut, transition, and effect reflects your brand’s personality and message.",
  },
  {
    title: "Graphic Designer",
    icon: "/home/how-we-do/graphic-designer.png",
    copy:
      "Turn your ideas into visuals that speak volumes. Our graphic designers create captivating designs that elevate your brand identity — from social media graphics and marketing collaterals to logos and digital assets. Every piece is crafted to make your business stand out and connect with your audience at first glance.",
  },
  {
    title: "Social Media Manager",
    icon: "/home/how-we-do/social.png",
    copy:
      "Grow your digital presence with strategy and consistency. Our social media managers plan, create, and execute content tailored to your brand’s voice and goals. From crafting engaging posts to monitoring analytics and community engagement, we help you build a loyal and active online following.",
  },
  {
    title: "General Virtual Assistant",
    icon: "/home/how-we-do/general-va.png",
    copy:
      "Reclaim your time and focus on what matters most. Our general virtual assistants handle the day-to-day essentials — scheduling, email management, data entry, research, travel planning, and more. With reliability and attention to detail, they ensure your operations run smoothly behind the scenes",
  },
  {
    title: "Bookkeeper",
    icon: "/home/how-we-do/bookkeeper.png",
    copy:
      "Gain peace of mind knowing your finances are in order. Our bookkeepers provide accurate, organized, and up-to-date records — from tracking expenses and managing invoices to preparing financial summaries. We help you make informed decisions with clarity and confidence.",
  },
  {
    title: "Telemarketer",
    icon: "/home/how-we-do/telemarketer.png",
    copy:
      "Turn conversations into conversions. Our telemarketers specialize in lead generation, client outreach, and follow-ups designed to drive business growth. With professionalism and persuasive communication, they help you connect with prospects, nurture relationships, and boost sales opportunities.",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "Delegates span virtual assistants, creatives, media pros, finance partners, and revenue specialists.",
  },
  {
    question: "Can I customize the service to fit my needs?",
    answer:
      "Every engagement starts with discovery to co-build playbooks, KPIs, and collaboration cadences.",
  },
  {
    question: "Do you require long-term commitments?",
    answer:
      "We recommend a 3-month runway to ramp and optimize, then move to flexible retainers.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept ACH, major credit cards, and international wire. Billing is available in USD or SGD.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Our operators cover APAC, North America, and Europe with overlapping time zones.",
  },
];

const galleryImages = [
  "/home/gallery/gallery-1.jpg",
  "/home/gallery/gallery-2.jpg",
  "/home/gallery/gallery-3.jpg",
  "/home/gallery/gallery-4.jpg",
  "/home/gallery/gallery-5.jpg",
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white text-[#142148]" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Header />
      <header className="relative overflow-hidden text-white">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src="/home/hero-section-bg.png"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-[#030c32]/60" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pt-24 md:grid-cols-[1.1fr,0.9fr] md:items-end">
          <div className="space-y-6 pb-24">
            <h1 className="text-[85px] font-bold leading-none text-white">
              Your behind-
              <br />
              the-scenes
              <br />
              powerhouse.
            </h1>
            <p className="text-[24px] font-normal leading-[135%] text-white/90">
              Because with great creativity comes <br /> great results.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <button className="flex justify-center items-center gap-[10px] rounded-md bg-[#d5a546] px-6 py-3 text-center text-[16px] font-medium leading-[150%] text-[#1E1E1E] transition hover:bg-[#c29132]" style={{ fontFamily: 'Moderat, sans-serif' }}>
                Explore More
              </button>
              <button className="flex justify-center items-center gap-[10px] rounded-[8px] border border-[#C4A35A] bg-[#030c32] px-6 py-3 text-center text-[16px] font-medium leading-[150%] text-[#C4A35A] transition hover:bg-[#0c1f55]" style={{ fontFamily: 'Moderat, sans-serif' }}>
                Services
              </button>
            </div>
            <p className="text-[17px] font-normal leading-[135%] text-[#FFFFFFB2] max-w-2xl">
              We are Singapore&apos;s trailblazing virtual assistant agency,
              redefining the way businesses scale and succeed. By combining
              smart digital tools, skilled support, <br /> and efficient workflows, we
              help entrepreneurs and companies stay productive <br /> and stand out in
              a fast-paced world.
            </p>
          </div>
          <div className="relative">
            <img
              src="/home/hero-overlay-image.png"
              alt="Delegate leadership"
              className="w-full rounded-[32px] object-cover shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
              loading="lazy"
            />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col self-stretch rounded-[8px] bg-[#1E2A44] px-[50px] py-[30px] text-white">
          <p className="inline-flex w-fit justify-center items-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-3 py-1.5 text-center text-[14px] font-medium leading-[150%] text-white mb-4" style={{ fontFamily: 'Moderat, sans-serif' }}>
            What We Do
          </p>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-[64px] font-semibold leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
                Simplifying work <br /> for a busy world.
              </h2>
            </div>
            <div className="rounded-full px-6 py-3 text-sm font-semibold flex items-center">
              <img src="/the-delegate-co-logo.png" alt="Delegate mark · Since 2016" className="w-[208px] h-[188px] aspect-[52/47]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <article
              key={item.title}
            >
              <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <img src={item.icon} alt={item.title} className="h-[70px] w-[70px]" />
              </div>
              <h3 className="text-[24px] font-bold leading-normal text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                {item.title}
              </h3>
              <p className="mt-2 text-[17px] font-normal leading-[135%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-4 animate-scroll-gallery">
            {[...galleryImages, ...galleryImages].map((src, index) => {
              return (
                <div
                  key={`${src}-${index}`}
                  className="flex-shrink-0 w-[350px] h-[240px] rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'lightgray'
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-8">
            <p className="inline-flex w-fit justify-center items-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-3 py-1.5 text-center text-[14px] font-medium leading-[150%] text-white" style={{ fontFamily: 'Moderat, sans-serif' }}>
              About Us
            </p>
            
            <h2 className="text-[40px] leading-normal text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif", letterSpacing: '-0.8px' }}>
              <span className="font-normal">Built in-house, </span>
              <span className="font-bold">our team of virtual assistants, video editors, graphic designers, telemarketers, social media managers, and bookkeepers understands both the operational backbone and the creative growth engine of every business. </span>
              <span className="font-normal">We turn tasks into opportunities, data into insights, and workflows into success stories.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <p className="text-[17px] font-normal leading-[135%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                The Delegate Co. is the dedicated support powerhouse for entrepreneurs and companies — a trusted partner known for efficiency, adaptability, and smart delegation. We&apos;re not just an admin team; we&apos;re a group of problem-solvers, creators, and thinkers with a deep understanding of business needs, people, and processes.
              </p>
              <p className="text-[17px] font-normal leading-[135%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                Our edge lies in the balance we strike between human intuition and digital productivity tools. Every task, project, and strategy is guided by systems, performance data, and a clear sense of purpose. Whether you&apos;re a solo founder, scaling startup, or established business,
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f9ff] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <p className="inline-flex w-fit justify-center items-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-3 py-1.5 text-center text-[14px] font-medium leading-[150%] text-white mb-4" style={{ fontFamily: 'Moderat, sans-serif' }}>
              Our Services
            </p>
            <h2 className="text-[64px] font-semibold leading-none text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Services We Provided
            </h2>
          </div>
          <div className="divide-y divide-[#e4e9f3]">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-8"
              >
                <h3 className="text-[28px] font-medium leading-normal text-[#1E1E1E] md:w-1/3" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-[17px] font-normal leading-[135%] text-[#1E1E1E] md:flex-1" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  {service.copy}
                </p>
                <button className="flex justify-center items-center gap-[10px] rounded-[8px] border border-[#C4A35A] bg-white px-6 py-2 text-center text-[17px] font-normal leading-[135%] text-[#C4A35A] transition md:w-fit" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-16 text-white"
        style={{
          backgroundImage: "url('/home/how-we-do-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <p className="inline-flex w-fit items-center justify-center rounded-full border border-white/70 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/90">
              How We Do
            </p>
            <h2 className="mt-4 text-[48px] font-semibold leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Your All-in-One Remote Team
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {remoteTeam.map((role) => (
              <article
                key={role.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-[#dbe6f2] bg-white p-6 text-[#1E1E1E] shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-1 h-[70px] w-[70px] rounded-xl flex items-center justify-center overflow-hidden">
                  <img src={role.icon} alt={`${role.title} icon`} className="h-[70px] w-[70px] object-contain" />
                </div>
                <h3 className="self-stretch text-[24px] font-bold leading-normal text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  {role.title}
                </h3>
                <p className="self-stretch text-[17px] font-normal leading-[135%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  {role.copy}
                </p>
                <button className="mt-auto self-start text-left text-[17px] font-normal leading-[135%] text-[#1E1E1E] underline" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  Learn More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="flex flex-col items-center self-stretch gap-20 bg-white p-20">
        <div className="mx-auto max-w-6xl grid w-full gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="flex flex-col gap-6">
            <div>
              <p className="inline-flex w-fit items-center justify-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
                FAQs
              </p>
              <h2 className="mt-4 self-stretch text-[64px] font-semibold leading-none text-[#1E2A44]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-[#e4e9f3] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                  >
                    <button
                      className="flex w-full items-center justify-between text-left text-[17px] font-medium text-[#1E1E1E]"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      {faq.question}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#1E1E1E] transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-[16px] leading-[150%] text-[#4b5678]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative self-stretch w-[650px] overflow-hidden rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.16)] min-h-[460px]">
            <img
              src="/home/faq.jpg"
              alt="Team reviewing analytics dashboards"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f9ff] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            {/* Background Colors - Split Vertically */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#1E2A44]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#0f1f4b] to-[#1a3a6b]" />
            </div>
            
            {/* Content - Two Columns Layout */}
            <div className="relative grid md:grid-cols-2">
              {/* Left Panel - Information Section */}
              <div className="flex flex-col px-8 py-12 text-white">
                {/* Top Section - Dark Blue */}
                <div className="space-y-6 mb-12">
                  <p className="inline-flex w-fit items-center justify-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-3 py-1.5 text-center text-[14px] font-medium leading-[150%] text-white" style={{ fontFamily: 'Moderat, sans-serif' }}>
                    Contact Us
                  </p>
                  <h2 className="text-[64px] font-semibold leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Get in touch!
                  </h2>
                  <p className="text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    The Delegate Co. is the dedicated support powerhouse for entrepreneurs and companies — a trusted partner known for efficiency, adaptability, and smart delegation.
                  </p>
                </div>
                
                {/* Bottom Section - Blue Gradient */}
                <div className="space-y-6">
                  <p className="text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    We&apos;re happy to answer any questions you may have and help you determine which of our services best fit your needs.
                  </p>
                  <p className="text-[17px] font-bold leading-[135%] text-white underline" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Call us at: +65 8333 0499
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="text-[24px] font-bold leading-normal text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      Your benefits:
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["Client-oriented", "Results-driven", "Independent", "Competent", "Problem-solving"].map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-white shrink-0" />
                          <span className="text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h3 className="text-[24px] font-bold leading-normal text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      What Happen Next?
                    </h3>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="flex items-start gap-3">
                        <span className="text-[48px] font-bold leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>1</span>
                        <p className="text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                          We Schedule a call at your convenience
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[48px] font-bold leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>2</span>
                        <p className="text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                          We do a discovery and consulting meeting
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[48px] font-bold leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>3</span>
                        <p className="text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                          We prepare a proposal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel - Contact Form */}
              <div className="px-8 py-12">
                <div className="rounded-[32px] bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[42px] font-semibold leading-tight text-[#1E1E1E] mb-8" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Contact Form
                  </h2>
                  <form className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#5d688a]" />
                        <input
                          type="text"
                          placeholder="First Name"
                          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[#d0d6ea] text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]"
                          style={{ fontFamily: "'Figtree', sans-serif" }}
                        />
                      </div>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#5d688a]" />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[#d0d6ea] text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]"
                          style={{ fontFamily: "'Figtree', sans-serif" }}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#5d688a]" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[#d0d6ea] text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]"
                        style={{ fontFamily: "'Figtree', sans-serif" }}
                      />
                    </div>
                    <div className="relative">
                      <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#5d688a]" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[#d0d6ea] text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]"
                        style={{ fontFamily: "'Figtree', sans-serif" }}
                      />
                    </div>
                    <div className="relative">
                      <Info className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#5d688a]" />
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[#d0d6ea] text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]"
                        style={{ fontFamily: "'Figtree', sans-serif" }}
                      />
                    </div>
                    <div className="relative">
                      <Pencil className="absolute left-4 top-4 h-5 w-5 text-[#5d688a]" />
                      <textarea
                        rows={6}
                        placeholder="How can we help you? Feel free to get in touch!"
                        className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[#d0d6ea] text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a] resize-none"
                        style={{ fontFamily: "'Figtree', sans-serif" }}
                      />
                    </div>
                    <div className="relative">
                      <Paperclip className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#5d688a]" />
                      <input
                        type="file"
                        className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[#d0d6ea] text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a] file:border-0 file:bg-transparent file:text-[#1E1E1E]"
                        style={{ fontFamily: "'Figtree', sans-serif" }}
                      />
                    </div>
                    <button className="w-full rounded-[8px] bg-[#c4a35a] px-6 py-3 text-center text-[17px] font-medium leading-[135%] text-white transition hover:bg-[#b8934f]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Checkmark() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/40">
      <svg viewBox="0 0 20 20" className="h-3 w-3 fill-white/70" aria-hidden="true">
        <path d="M8 13.5 4.5 10 3 11.5l5 5 9-9L15.5 6l-7 7.5Z" />
      </svg>
    </div>
  );
}


