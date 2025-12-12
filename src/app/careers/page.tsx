"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApplyModal from "../../components/ApplyModal";

const jobRoles = [
  {
    title: "Video Editor",
    description:
      "Responsible for editing and producing engaging video content for various platforms. Ensures high-quality visuals, smooth transitions, and alignment with brand guidelines and storytelling objectives.",
  },
  {
    title: "Graphic Designer",
    description:
      "Creates visually appealing designs for digital and print materials. Translates ideas into effective visual concepts that enhance brand identity and communication.",
  },
  {
    title: "Social Media Manager",
    description:
      "Develops and executes social media strategies to grow audience engagement, manage content calendars, and monitor performance metrics across all platforms.",
  },
  {
    title: "General Virtual Assistant",
    description:
      "Provides administrative and operational support including scheduling, email management, data entry, and other day-to-day business tasks to ensure smooth workflow.",
  },
  {
    title: "Bookkeeper",
    description:
      "Manages financial records, tracks income and expenses, reconciles accounts, and prepares reports to ensure accurate and up-to-date financial information.",
  },
  {
    title: "Telemarketer",
    description:
      "Makes outbound calls to prospective clients, promotes products or services, qualifies leads, and maintains positive customer relations to support sales growth.",
  },
];

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const openModal = (job: string) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-white text-[#142148]" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030c32] to-[#050a1b] text-white self-stretch pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 md:pt-24 md:pb-16 md:px-6 lg:pt-[96px] lg:pb-[50px] lg:px-[100px]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-[50px] self-stretch max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-1">
            <h1 className="self-stretch text-[22px] sm:text-[28px] md:text-[40px] lg:text-[64px] font-bold leading-tight md:leading-none text-white capitalize" style={{ fontFamily: "'Figtree', sans-serif" }}>
              We Know How To Turn Tasks Into Opportunities
            </h1>
            <p className="text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
              The Delegate Co. is the dedicated support powerhouse for entrepreneurs and companies — a trusted partner known for efficiency, adaptability, and smart delegation.
            </p>
          </div>
          <img
            src="/the-delegate-co-logo.png"
            alt="The Delegate Co. logo"
            className="hidden md:block w-[120px] sm:w-[140px] h-auto md:w-[180px] lg:w-[264px] lg:h-[269px] object-contain"
            style={{ aspectRatio: '264/269' }}
          />
        </div>
      </section>

      {/* Join Our Growing Team Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <p className="inline-flex w-fit items-center justify-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-2.5 sm:px-3 py-1 sm:py-1.5 text-center text-[11px] sm:text-[12px] md:text-[14px] font-medium leading-[150%] text-white mb-3 sm:mb-4" style={{ fontFamily: 'Moderat, sans-serif' }}>
              Our Careers
            </p>
            <h2 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-tight md:leading-none text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Join Our Growing Team
            </h2>
          </div>

          <div className="divide-y divide-[#e4e9f3]">
            {jobRoles.map((job) => (
              <div
                key={job.title}
                className="flex flex-col gap-3 sm:gap-4 py-5 sm:py-6 md:flex-row md:items-center md:gap-8"
              >
                <h3 className="text-[18px] sm:text-[22px] md:text-[28px] font-medium leading-normal text-[#1E1E1E] md:w-1/3" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  {job.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] md:flex-1" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  {job.description}
                </p>
                <button
                  onClick={() => openModal(job.title)}
                  className="flex justify-center items-center gap-[10px] rounded-[8px] border border-[#C4A35A] bg-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-center text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#C4A35A] transition md:w-fit"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ApplyModal isOpen={isModalOpen} onClose={closeModal} jobTitle={selectedJob || undefined} />
    </main>
  );
}

