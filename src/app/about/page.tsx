"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GetInTouch from "../../components/GetInTouch";
import FinalCTA from "../../components/FinalCTA";

const teamMembers = [
  {
    name: "Melvin Lim",
    role: "Founder & CEO",
    image: "/about/team/melvin.jpg",
  },
  {
    name: "Marie Abalos",
    role: "Co-Founder & Operations Manager",
    image: "/about/team/marie.jpg",
  },
  {
    name: "Michael Neri",
    role: "Creative Director & Senior Video Editor",
    image: "/about/team/michael.jpg",
  },
  {
    name: "Georgina Balanay",
    role: "Operations and Management Executive",
    image: "/about/team/georgina.jpg",
  },
  {
    name: "Merymae Catiloc",
    role: "Social Media & Branding Executive",
    image: "/about/team/merymae.jpg",
  },
];

export default function AboutPage() {
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

      {/* About Us Section */}
      <section className="py-8 sm:py-12 bg-white md:py-16">
        <div className="px-4 sm:px-6 md:px-6 lg:px-[100px] max-w-7xl mx-auto">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <p className="inline-flex w-fit items-center justify-center gap-[10px] rounded-[8px] border border-[#1E2A44] bg-[#1E2A44] px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
              About Us
            </p>
            <h2 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] leading-normal text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif", letterSpacing: '-0.8px' }}>
              <span className="font-normal">Built in-house, </span>
              <span className="font-bold">our team of virtual assistants, video editors, graphic designers, telemarketers, social media managers, and bookkeepers understands both the operational backbone and the creative growth engine of every business. </span>
              <span className="font-normal">We turn tasks into opportunities, data into insights, and workflows into success stories.</span>
            </h2>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-[170px] gap-y-6 sm:gap-y-8 md:gap-y-12 lg:gap-y-16 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <h3 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif", lineHeight: '0.9' }}>
                  We have a strong <br className="hidden sm:block"/> passion.
                </h3>
                <img
                  src="/about/icons/passion.png"
                  alt="Passion icon"
                  className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <p className="self-stretch text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: 'Moderat, sans-serif' }}>
                The boundaries between &quot;work&quot; and &quot;play&quot; aren&apos;t always obvious. We are all connected and motivated by our curiosity and creativity. Staying in your comfort zone is never a good idea in our opinion.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <h3 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif", lineHeight: '0.9' }}>
                  We enjoy <br className="hidden sm:block"/> learning.
                </h3>
                <img
                  src="/about/icons/learning.png"
                  alt="Learning icon"
                  className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <p className="self-stretch text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: 'Moderat, sans-serif' }}>
                We enjoy learning, particularly from one another. We are always improving our abilities in design, development, and copywriting as well as learning how to use new platforms and features.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <h3 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif", lineHeight: '0.9' }}>
                  We leave egos at <br className="hidden sm:block"/> the door.
                </h3>
                <img
                  src="/about/icons/egos.png"
                  alt="Egos icon"
                  className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <p className="self-stretch text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: 'Moderat, sans-serif' }}>
                We challenge ideas and offer candid criticism, but we also emphasize the points in which we agree. We will challenge things in order to produce better work, but never merely out of curiosity. There isn&apos;t time for that.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <h3 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif", lineHeight: '0.9' }}>
                  We support one <br className="hidden sm:block"/> another.
                </h3>
                <img
                  src="/about/icons/support.png"
                  alt="Support icon"
                  className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <p className="self-stretch text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: 'Moderat, sans-serif' }}>
                Our days are spent constructing sites and strengthening one another. An opportunity to interact, work together, and recognize our clients and coworkers arises with each new project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 sm:py-12 overflow-hidden md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex gap-2.5 sm:gap-3 md:gap-4 animate-scroll-gallery">
            {[
              "/home/gallery/gallery-1.jpg",
              "/home/gallery/gallery-2.jpg",
              "/home/gallery/gallery-3.jpg",
              "/home/gallery/gallery-4.jpg",
              "/home/gallery/gallery-5.jpg",
              "/home/gallery/gallery-1.jpg",
              "/home/gallery/gallery-2.jpg",
              "/home/gallery/gallery-3.jpg",
              "/home/gallery/gallery-4.jpg",
              "/home/gallery/gallery-5.jpg",
            ].map((src, index) => {
              return (
                <div
                  key={`${src}-${index}`}
                  className="flex-shrink-0 w-[280px] h-[190px] md:w-[350px] md:h-[240px] rounded-xl md:rounded-2xl overflow-hidden"
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

      {/* Our Team Section */}
      <section className="bg-[#f5f9ff] py-8 sm:py-12 md:py-16">
        <div className="px-4 sm:px-6 md:px-8 lg:px-[100px] max-w-7xl mx-auto">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <p className="inline-flex w-fit items-center justify-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-2.5 sm:px-3 py-1 sm:py-1.5 text-center text-[11px] sm:text-[12px] md:text-[14px] font-medium leading-[150%] text-white mb-3 sm:mb-4" style={{ fontFamily: 'Moderat, sans-serif' }}>
              Our Team
            </p>
            <h2 className="self-stretch text-[20px] sm:text-[28px] md:text-[40px] font-normal leading-normal text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Our team brings together diverse talents in production, direction, content creation, and marketing — all working seamlessly to help your project shine
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-row gap-3 sm:gap-4">
                <div className="w-[100px] h-[105px] sm:w-[120px] sm:h-[125px] md:w-[150px] md:h-[155px] lg:w-[175px] lg:h-[180px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-[#1E2A44] flex items-center justify-center flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#1E2A44] to-[#030c32] flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold">' + member.name.charAt(0) + '</div>';
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[14px] sm:text-[15px] md:text-[17px] font-bold leading-[135%] text-[#1E2A44] mb-0.5 sm:mb-1" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] md:text-[17px] font-normal leading-[135%] text-[#C4A35A]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />

      <FinalCTA />

      <Footer />
    </main>
  );
}

