"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GetInTouch from "../../components/GetInTouch";

const galleryImages = [
  "/home/gallery/gallery-1.jpg",
  "/home/gallery/gallery-2.jpg",
  "/home/gallery/gallery-3.jpg",
  "/home/gallery/gallery-4.jpg",
  "/home/gallery/gallery-5.jpg",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#142148]" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030c32] to-[#050a1b] text-white self-stretch pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 md:pt-24 md:pb-16 md:px-6 lg:pt-[96px] lg:pb-[50px] lg:px-[100px]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-[50px] self-stretch max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-1">
            <h1 className="self-stretch text-[22px] sm:text-[28px] md:text-[40px] lg:text-[64px] font-bold leading-tight md:leading-none text-white capitalize" style={{ fontFamily: "'Figtree', sans-serif" }}>
              We know how to turn tasks into opportunities
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

      {/* Get in touch! Section */}
      <GetInTouch />

      {/* Image Gallery Section */}
      <section className="py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

      <Footer />
    </main>
  );
}

