"use client";

import {
  ArrowRight,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GetInTouch from "../../components/GetInTouch";
import FinalCTA from "../../components/FinalCTA";

const services = [
  {
    title: "Video Editor",
    copy:
      "Bring your brand to life through engaging visuals and polished storytelling — from social clips to full-length videos that capture attention and drive results.",
    icon: "/home/how-we-do/video-editor.png",
  },
  {
    title: "Graphic Designer",
    copy:
      "Enhance your brand's identity with eye-catching designs, marketing materials, and social content that leave a lasting impression.",
    icon: "/home/how-we-do/graphic-designer.png",
  },
  {
    title: "Social Media Manager",
    copy:
      "Save time and grow your online presence with consistent content planning, posting, and engagement that build genuine audience connections.",
    icon: "/home/how-we-do/social.png",
  },
  {
    title: "General Virtual Assistant",
    copy:
      "Free up your time by delegating everyday tasks like scheduling, email management, research, and admin support — so you can focus on growth.",
    icon: "/home/how-we-do/general-va.png",
  },
  {
    title: "Bookkeeper",
    copy:
      "Stay on top of your finances with accurate tracking, organized records, and timely reports that keep your business running smoothly.",
    icon: "/home/how-we-do/bookkeeper.png",
  },
  {
    title: "Telemarketer",
    copy:
      "Expand your reach and boost conversions with lead generation, follow-ups, and client outreach that turn conversations into opportunities.",
    icon: "/home/how-we-do/telemarketer.png",
  },
];

const engagementProcess = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We start with a comprehensive consultation to understand your business needs, goals, and the specific tasks you want to delegate.",
  },
  {
    number: "02",
    title: "Skill Assessment & Matching",
    description:
      "Our team evaluates your requirements and matches you with virtual assistants who have the exact skills and experience you need.",
  },
  {
    number: "03",
    title: "Customized Service Plan",
    description:
      "We create a tailored service plan that outlines the scope of work, deliverables, timelines, and communication protocols.",
  },
  {
    number: "04",
    title: "Onboarding & Training",
    description:
      "Your assigned virtual assistant undergoes thorough onboarding and training to align with your business processes and expectations.",
  },
  {
    number: "05",
    title: "Ongoing Support & Optimization",
    description:
      "We provide continuous support, regular check-ins, and performance optimization to ensure you get the best results from your virtual assistant.",
  },
];

const heroCards = [
  {
    title: "Our Engagement Process",
    description:
      "We collaborate with clients to create engaging virtual assistance solutions, manage projects, and develop strategies that captivate audiences and enhance brand loyalty.",
    link: "Discover Our Engagement Process",
    image: "/hire/our-engagement.jpg", // Placeholder - update with actual image
  },
  {
    title: "Join The Delegate Co. and Redefine the Future of Work",
    description:
      "Join us in co-creating innovative solutions. We invite partnerships with brands, agencies, and creators to redefine possibilities and add value.",
    link: "Explore Careers",
    image: "/hire/join.jpg", // Placeholder - update with actual image
  },
  {
    title: "Contact Us",
    description:
      "Get in touch with us to book our virtual assistance experts for your upcoming event. Our founders and creative leads are available for dynamic panels, keynotes, and workshops.",
    link: "Reach out to us for a Virtual Assistant Speaker!",
    image: "/hire/contact.jpg", // Placeholder - update with actual image
  },
];

export default function HirePage() {
  return (
    <main className="min-h-screen bg-white text-[#142148]" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030c32] to-[#050a1b] text-white self-stretch pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 md:pt-[96px] md:pb-[50px] md:px-12 lg:px-[100px]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-[50px] self-stretch max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-1">
            <h1 className="self-stretch text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight md:leading-none text-white capitalize" style={{ fontFamily: "'Figtree', sans-serif" }}>
              The Team Behind Your Success Story
            </h1>
            <p className="text-[14px] sm:text-[18px] md:text-[24px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Join us and unlock opportunities to learn, grow, and make an impact while enjoying the flexibility of modern remote work
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

      {/* Join Section */}
      <section className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 self-stretch bg-white py-8 sm:py-12 px-4 md:py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">

          {/* Three Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {heroCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 sm:gap-4"
              >
                <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[330px] rounded-lg sm:rounded-xl md:rounded-2xl bg-gray-200 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.className = 'w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[330px] rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-[#1E2A44] to-[#030c32] flex items-center justify-center';
                        parent.innerHTML = '<div class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">' + card.title.charAt(0) + '</div>';
                      }
                    }}
                  />
                </div>
                <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-[24px] sm:leading-[28px] md:leading-[30px] text-center text-[#1E1E1E]" style={{ fontFamily: "'Moderat', sans-serif" }}>
                    {card.title}
                  </h3>
                  <p className="w-full flex-shrink-0 text-[13px] sm:text-[14px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-[#1E1E1E]" style={{ fontFamily: "'Moderat', sans-serif" }}>
                    {card.description}
                  </p>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 mx-auto text-[13px] sm:text-[14px] md:text-[16px] font-bold leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-[#1E1E1E] underline"
                    style={{ fontFamily: "'Moderat', sans-serif" }}
                  >
                    {card.link}
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Service Offerings Section */}
      <section className="flex flex-col items-center gap-5 self-stretch bg-white py-8 sm:py-12 px-4 md:py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-tight md:leading-none text-[#1E1E1E] mb-3 sm:mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Our Service Offerings
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] max-w-2xl mx-auto px-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Discover our comprehensive range of virtual assistant services designed to streamline your operations and boost productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-start gap-[8px] sm:gap-[10px] p-4 sm:p-5 md:p-6 lg:p-[30px] flex-1 basis-0 rounded-lg sm:rounded-[12px] border border-[#E5E5E5] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] items-center justify-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3
                  className="self-stretch text-[18px] sm:text-[20px] md:text-[24px] font-bold leading-[26px] sm:leading-[30px] md:leading-[36px] tracking-[0.07px] text-[#1E2A44]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="self-stretch text-[13px] sm:text-[14px] md:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[25.6px] tracking-[-0.312px] text-[#666]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {service.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Engagement Process Section */}
      <section className="flex flex-col items-start gap-6 sm:gap-8 md:gap-[30px] self-stretch bg-[#F8F9FA] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[160px]">
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2
              className="text-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight md:leading-[1.2] lg:leading-[72px] tracking-[0.352px] text-[#1E2A44] mb-3 sm:mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Engagement Process
            </h2>
            <p
              className="w-full max-w-[765px] flex-shrink-0 text-center text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold leading-tight md:leading-[1.2] lg:leading-[72px] tracking-[0.352px] text-[#1E2A44] mx-auto px-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Follow our streamlined process to get matched with the perfect virtual assistant for your business needs.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 self-stretch px-0 sm:px-4 md:px-8 lg:px-20">
            {engagementProcess.map((step) => (
              <div key={step.number} className="flex gap-4 sm:gap-5 md:gap-6 items-start w-full">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#C4A35A] text-white text-[18px] sm:text-[20px] md:text-[24px] font-bold rounded-full flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] font-bold leading-tight md:leading-[1.3] lg:leading-[42px] tracking-[0.383px] text-[#1E2A44] mb-1.5 sm:mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="w-full max-w-[736px] flex-shrink-0 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[1.5] md:leading-[1.6] lg:leading-[28.8px] tracking-[-0.439px] text-[#666]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch! Section */}
      <GetInTouch
        formTitle="Hire Our Team Form"
        formFields={[
          { type: "text", name: "firstName", placeholder: "First Name", icon: "user", gridCols: 2 },
          { type: "text", name: "lastName", placeholder: "Last Name", icon: "user", gridCols: 2 },
          { type: "email", name: "email", placeholder: "Email Address", icon: "mail" },
          { type: "text", name: "companyName", placeholder: "Company Name", icon: "briefcase" },
          { type: "text", name: "teamSize", placeholder: "Team Size Needed", icon: "hash" },
          { type: "textarea", name: "message", placeholder: "How can we help you? Feel free to get in touch!", icon: "pencil" },
          { type: "file", name: "attachment", placeholder: "Attach File", icon: "paperclip" },
        ]}
      />

      {/* CTA Section */}
      <FinalCTA />

      <Footer />
    </main>
  );
}

