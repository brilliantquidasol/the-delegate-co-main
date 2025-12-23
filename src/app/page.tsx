"use client";

import Link from "next/link";
import { useId, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import ApplyModal from "../components/ApplyModal";
import { Reveal } from "../components/Reveal";
import { useAccordionAnimation } from "../hooks/useAccordionAnimation";

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
      "Whether you're in real estate, e-commerce, finance, or healthcare, we match you with VAs who understand your industry and workflows.",
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
      "Transform your raw footage into compelling visual stories. Our video editors bring creativity, precision, and storytelling together to produce engaging content — whether it's for social media, marketing campaigns, or branded materials. We ensure every cut, transition, and effect reflects your brand's personality and message.",
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
      "Grow your digital presence with strategy and consistency. Our social media managers plan, create, and execute content tailored to your brand's voice and goals. From crafting engaging posts to monitoring analytics and community engagement, we help you build a loyal and active online following.",
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

type FaqItemProps = {
  faq: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
};

const FaqItem = ({ faq, isOpen, onToggle }: FaqItemProps) => {
  const contentId = useId();
  const { contentRef, panelStyles, contentStyles, iconStyles } =
    useAccordionAnimation(isOpen);

  return (
    <>
      <button
        className="flex w-full items-center justify-between text-left text-[13px] sm:text-[14px] font-medium text-[#1E1E1E] md:text-[17px]"
        style={{ fontFamily: "'Figtree', sans-serif" }}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        {faq.question}
        <ChevronDown
          className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#1E1E1E]"
          style={iconStyles}
        />
      </button>
      <div
        id={contentId}
        className="grid overflow-hidden"
        style={panelStyles}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef}>
          <p
            className="mt-2 sm:mt-3 text-[12px] sm:text-[13px] leading-[150%] text-[#4b5678] md:text-[16px]"
            style={{
              fontFamily: "'Figtree', sans-serif",
              ...contentStyles,
            }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </>
  );
};

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

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

        <div className="relative z-10 mx-auto grid max-w-7xl gap-6 sm:gap-8 px-4 pt-16 sm:pt-20 sm:pb-12 md:gap-12 md:px-6 md:pt-24 md:pb-0 md:grid-cols-[1.1fr,0.9fr] md:items-end">
          <Reveal className="space-y-3 sm:space-y-4 md:space-y-6 md:pb-24 pb-6 sm:pb-8">
            <h1 className="text-[36px] sm:text-[36px] leading-tight font-bold text-white md:text-[64px] md:leading-none lg:text-[85px]">
              <span className="block sm:inline">
                Your behind-
                <span className="hidden sm:inline"><br /></span>
                the-scenes
                <span className="hidden sm:inline"><br /></span>
                powerhouse.
              </span>
            </h1>
            <p className="text-[16px] sm:text-[18px] font-normal leading-[135%] text-white/90 md:text-[20px] lg:text-[24px]">
              Because with great creativity comes <br className="hidden md:block" /> great results.
            </p>
            <div className="flex flex-row items-center gap-3 md:gap-4 text-sm font-semibold">
              <Link
                href="/#what-we-do"
                className="flex justify-center items-center gap-[10px] rounded-md bg-[#d5a546] px-4 sm:px-5 py-2 sm:py-2.5 text-center text-[13px] sm:text-[14px] font-medium leading-[150%] text-[#1E1E1E] transition hover:bg-[#c29132] md:px-6 md:py-3 md:text-[16px]"
                style={{ fontFamily: "Moderat, sans-serif" }}
              >
                Explore More
              </Link>
              <Link
                href="/#our-services"
                className="flex justify-center items-center gap-[10px] rounded-[8px] border border-[#C4A35A] bg-[#030c32] px-4 sm:px-5 py-2 sm:py-2.5 text-center text-[13px] sm:text-[14px] font-medium leading-[150%] text-[#C4A35A] transition hover:bg-[#0c1f55] md:px-6 md:py-3 md:text-[16px]"
                style={{ fontFamily: 'Moderat, sans-serif' }}
              >
                Services
              </Link>
            </div>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[135%] text-[#FFFFFFB2] max-w-2xl md:text-[17px]">
              We are Singapore&apos;s trailblazing virtual assistant agency,
              redefining the way businesses scale and succeed. By combining
              smart digital tools, skilled support, <br className="hidden md:block" /> and efficient workflows, we
              help entrepreneurs and companies stay productive <br className="hidden md:block" /> and stand out in
              a fast-paced world.
            </p>
          </Reveal>
          <Reveal className="relative" delay={120}>
            <img
              src="/home/hero-overlay-image.png"
              alt="Delegate leadership"
              className="hidden md:block w-full rounded-xl sm:rounded-2xl md:rounded-[32px] object-cover shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
              loading="lazy"
            />
          </Reveal>
        </div>
      </header>

      <section id="what-we-do" className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:px-6 md:py-16">
        <Reveal className="flex flex-col self-stretch rounded-[8px] bg-[#1E2A44] px-4 py-5 sm:py-6 text-white sm:px-6 md:px-[50px] md:py-[30px]">
          <p className="inline-flex w-fit justify-center items-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-2.5 sm:px-3 py-1 sm:py-1.5 text-center text-[11px] sm:text-[12px] font-medium leading-[150%] text-white mb-3 sm:mb-4 md:text-[14px]" style={{ fontFamily: 'Moderat, sans-serif' }}>
            What We Do
          </p>
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-[24px] sm:text-[28px] font-semibold leading-tight text-white md:text-[48px] md:leading-none lg:text-[64px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                Simplifying work <br className="hidden sm:block" /> for a busy world.
              </h2>
            </div>
            <div className="rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold flex items-center justify-center md:justify-start">
              <img src="/the-delegate-co-logo.png" alt="Delegate mark · Since 2016" className="w-[80px] sm:w-[100px] h-auto md:w-[120px] lg:w-[208px] lg:h-[188px] aspect-[52/47]" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:pb-12 md:px-6 md:pb-16">
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              delay={index * 60}
            >
              <div className="mb-3 sm:mb-4 flex h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] items-center justify-center rounded-xl sm:rounded-2xl md:h-[70px] md:w-[70px]">
                <img src={item.icon} alt={item.title} className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px]" />
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-bold leading-normal text-[#1E1E1E] md:text-[24px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                {item.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-[14px] sm:text-[15px] font-normal leading-[135%] text-[#1E1E1E] md:text-[17px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                {item.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 sm:py-12 overflow-hidden md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex gap-2.5 sm:gap-3 md:gap-4 animate-scroll-gallery">
            {[...galleryImages, ...galleryImages].map((src, index) => {
              return (
                <div
                  key={`${src}-${index}`}
                  className="flex-shrink-0 w-[240px] h-[160px] sm:w-[280px] sm:h-[190px] md:w-[350px] md:h-[240px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
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

      <section className="py-8 sm:py-12 bg-white md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <Reveal as="p" className="inline-flex w-fit justify-center items-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-2.5 sm:px-3 py-1 sm:py-1.5 text-center text-[11px] sm:text-[12px] font-medium leading-[150%] text-white md:text-[14px]" style={{ fontFamily: 'Moderat, sans-serif' }}>
              About Us
            </Reveal>
            
            <Reveal>
              <h2 className="text-[18px] sm:text-[20px] leading-normal text-[#1E1E1E] md:text-[32px] lg:text-[40px]" style={{ fontFamily: "'Figtree', sans-serif", letterSpacing: '-0.8px' }}>
                <span className="font-normal">Built in-house, </span>
                <span className="font-bold">our team of virtual assistants, video editors, graphic designers, telemarketers, social media managers, and bookkeepers understands both the operational backbone and the creative growth engine of every business. </span>
                <span className="font-normal">We turn tasks into opportunities, data into insights, and workflows into success stories.</span>
              </h2>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <Reveal as="p" className="text-[13px] sm:text-[14px] font-normal leading-[135%] text-[#1E1E1E] md:text-[17px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                The Delegate Co. is the dedicated support powerhouse for entrepreneurs and companies — a trusted partner known for efficiency, adaptability, and smart delegation. We&apos;re not just an admin team; we&apos;re a group of problem-solvers, creators, and thinkers with a deep understanding of business needs, people, and processes.
              </Reveal>
              <Reveal as="p" className="text-[13px] sm:text-[14px] font-normal leading-[135%] text-[#1E1E1E] md:text-[17px]" style={{ fontFamily: "'Figtree', sans-serif" }} delay={80}>
                Our edge lies in the balance we strike between human intuition and digital productivity tools. Every task, project, and strategy is guided by systems, performance data, and a clear sense of purpose. Whether you&apos;re a solo founder, scaling startup, or established business,
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="our-services" className="bg-[#f5f9ff] py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-6 sm:mb-8 md:mb-10">
            <Reveal as="p" className="inline-flex w-fit justify-center items-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-2.5 sm:px-3 py-1 sm:py-1.5 text-center text-[11px] sm:text-[12px] font-medium leading-[150%] text-white mb-3 sm:mb-4 md:text-[14px]" style={{ fontFamily: 'Moderat, sans-serif' }}>
              Our Services
            </Reveal>
            <Reveal>
              <h2 className="text-[24px] sm:text-[28px] font-semibold leading-tight text-[#1E1E1E] md:text-[48px] md:leading-none lg:text-[64px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                Services We Provided
              </h2>
            </Reveal>
          </div>
          <div className="divide-y divide-[#e4e9f3]">
            {services.map((service) => (
              <Reveal
                key={service.title}
                className="flex flex-col gap-3 sm:gap-4 py-5 sm:py-6 md:flex-row md:items-center md:gap-8"
              >
                <h3 className="text-[18px] sm:text-[20px] font-medium leading-normal text-[#1E1E1E] md:text-[28px] md:w-1/3" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] font-normal leading-[135%] text-[#1E1E1E] md:text-[17px] md:flex-1" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  {service.copy}
                </p>
                <button
                  onClick={() => {
                    setSelectedJob(service.title);
                    setIsApplyOpen(true);
                  }}
                  className="flex justify-center items-center gap-[10px] rounded-[8px] border border-[#C4A35A] bg-white px-4 sm:px-5 py-1.5 sm:py-2 text-center text-[13px] sm:text-[14px] font-normal leading-[135%] text-[#C4A35A] transition md:px-6 md:text-[17px] md:w-fit"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  Apply Now
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-8 sm:py-12 text-white md:py-16"
        style={{
          backgroundImage: "url('/home/how-we-do-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-5 sm:mb-6 md:mb-8">
            <Reveal as="p" className="inline-flex w-fit items-center justify-center rounded-full border border-white/70 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 md:text-[12px]">
              How We Do
            </Reveal>
            <Reveal>
              <h2 className="mt-3 sm:mt-4 text-[20px] sm:text-[24px] font-semibold leading-tight md:text-[36px] lg:text-[48px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                Your All-in-One Remote Team
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {remoteTeam.map((role, index) => (
              <Reveal
                key={role.title}
                as="article"
                delay={index * 70}
                className="flex h-full flex-col gap-2.5 sm:gap-3 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#dbe6f2] bg-white p-3 sm:p-4 md:p-6 text-[#1E1E1E] shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-1 h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden md:h-[70px] md:w-[70px]">
                  <img src={role.icon} alt={`${role.title} icon`} className="h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[70px] object-contain" />
                </div>
                <h3 className="self-stretch text-[16px] sm:text-[18px] font-bold leading-normal text-[#1E1E1E] md:text-[24px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  {role.title}
                </h3>
                <p className="self-stretch text-[13px] sm:text-[14px] font-normal leading-[135%] text-[#1E1E1E] md:text-[17px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  {role.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="flex flex-col items-center self-stretch gap-6 sm:gap-8 bg-white p-4 sm:p-6 md:gap-16 md:p-12 lg:gap-20 lg:p-20"
      >
        <div className="mx-auto max-w-6xl grid w-full gap-6 sm:gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div>
              <Reveal as="p" className="inline-flex w-fit items-center justify-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:text-[12px]">
                FAQs
              </Reveal>
              <Reveal>
                <h2 className="mt-3 sm:mt-4 self-stretch text-[20px] sm:text-[24px] font-semibold leading-tight text-[#1E2A44] md:text-[40px] md:leading-none lg:text-[64px]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  Frequently Asked Questions
                </h2>
              </Reveal>
            </div>

            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <Reveal
                    key={faq.question}
                    className="rounded-lg sm:rounded-xl md:rounded-2xl border border-[#e4e9f3] bg-white p-3 sm:p-4 md:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                    delay={index * 60}
                  >
                    <FaqItem
                      faq={faq}
                      isOpen={isOpen}
                      onToggle={() => setOpenFaq(isOpen ? null : index)}
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal className="relative self-stretch w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.16)] min-h-[200px] sm:min-h-[250px] md:min-h-[400px] lg:w-[650px] lg:min-h-[460px]" delay={120}>
            <img
              src="/home/faq.jpg"
              alt="Team reviewing analytics dashboards"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <GetInTouch />

      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        jobTitle={selectedJob ?? undefined}
      />

      <Footer />
    </main>
  );
}
