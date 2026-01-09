"use client";

import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Reveal } from "../components/Reveal";

export default function NotFound() {
  return (
    <main className="min-h-0 sm:min-h-screen text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Header />
      
      {/* Gradient Background */}
      <div className="relative min-h-0 sm:min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030c32] via-[#1E2A44] to-[#142148]">
          {/* Additional gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 pt-10 sm:pt-28 md:pt-32 pb-5 sm:pb-20 md:pb-24 min-h-0 sm:min-h-[calc(100vh-80px)] flex sm:items-center">
          <div className="mx-auto max-w-6xl px-4 md:px-6 w-full py-4 sm:py-0">
            <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-8 md:space-y-10">
              {/* 404 Text */}
              <Reveal>
                <div className="relative mb-1 sm:mb-6 md:mb-8 w-full flex justify-center">
                  <div 
                    className="text-[180px] sm:text-[240px] md:text-[320px] lg:text-[400px] font-bold leading-none text-white/20 select-none"
                    style={{ 
                      fontFamily: "'Figtree', sans-serif",
                      textShadow: '0 0 80px rgba(255,255,255,0.1)',
                      letterSpacing: '-0.05em'
                    }}
                  >
                    404
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={60}>
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-tight text-white lg:text-[64px]">
                  Page Not Found
                </h1>
              </Reveal>
              
              <Reveal delay={120}>
                <p className="text-[16px] sm:text-[18px] font-normal leading-[135%] text-white/90 max-w-2xl md:text-[20px]">
                  Oops! The page you&apos;re looking for seems to have wandered off. 
                  Don&apos;t worry—we&apos;re here to help you get back on track.
                </p>
              </Reveal>
              
              <Reveal delay={180}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <Link
                    href="/"
                    className="flex justify-center items-center gap-[10px] rounded-md bg-[#d5a546] px-6 sm:px-8 py-3 sm:py-3.5 text-center text-[14px] sm:text-[16px] font-medium leading-[150%] text-[#1E1E1E] transition hover:bg-[#c29132] md:px-10 md:py-4"
                    style={{ fontFamily: "Moderat, sans-serif" }}
                  >
                    <Home className="h-4 w-4 sm:h-5 sm:w-5" />
                    Go Home
                  </Link>
                  <Link
                    href="/contact"
                    className="flex justify-center items-center gap-[10px] rounded-[8px] bg-white px-6 sm:px-8 py-3 sm:py-3.5 text-center text-[14px] sm:text-[16px] font-medium leading-[150%] text-[#1E1E1E] transition hover:bg-white/90 md:px-10 md:py-4"
                    style={{ fontFamily: "Moderat, sans-serif" }}
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </div>
              </Reveal>
              
              <Reveal delay={240}>
                <div className="pt-0 sm:pt-10 md:pt-12">
                  <p className="text-[14px] sm:text-[15px] font-normal leading-[135%] text-white/70 md:text-[17px]">
                    Or explore our{" "}
                    <Link href="/#what-we-do" className="text-[#C4A35A] hover:text-[#d5a546] hover:underline transition">
                      services
                    </Link>
                    {" "}and{" "}
                    <Link href="/#our-services" className="text-[#C4A35A] hover:text-[#d5a546] hover:underline transition">
                      what we do
                    </Link>
                    .
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

