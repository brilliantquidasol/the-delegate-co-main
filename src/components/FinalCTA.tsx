"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";

interface Button {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  href?: string;
}

interface FinalCTAProps {
  backgroundImage?: string;
  heading?: string;
  description?: string;
  buttons?: Button[];
}

const defaultProps: Required<Omit<FinalCTAProps, "backgroundImage">> & { backgroundImage: string } = {
  backgroundImage: "/about/final-cta-bg.jpg",
  heading: "Discover how a Virtual Assistant can simplify your business. Let&apos;s talk.",
  description: "Free yourself from the busywork and focus on what truly matters — growing your business. Our Virtual Assistants are here to handle the tasks that slow you down, so you can move faster, smarter, and stronger.",
  buttons: [
    { label: "Explore More", variant: "primary", href: "/#what-we-do" },
    { label: "Services", variant: "secondary", href: "/#our-services" },
  ],
};

export default function FinalCTA({
  backgroundImage = defaultProps.backgroundImage,
  heading = defaultProps.heading,
  description = defaultProps.description,
  buttons = defaultProps.buttons,
}: FinalCTAProps) {
  return (
    <section 
      className="relative self-stretch flex flex-col justify-center items-center md:items-end overflow-hidden py-12 sm:py-16 md:py-20 lg:py-[100px] px-4 sm:px-6 md:px-12 lg:px-[100px]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/47 to-black/47" />
      </div>
      <div className="absolute inset-0 bg-[#030c32]/60" />
      <div className="relative z-10 w-full flex justify-center md:justify-end">
        <div className="max-w-2xl w-full rounded-xl sm:rounded-2xl bg-[#1E2A44] p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 sm:space-y-5 md:space-y-6">
          <Reveal>
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold leading-normal text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
              {heading}
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
              {description}
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3 sm:gap-4" delay={120}>
            {buttons.map((button, index) => {
              const isPrimary = button.variant === "primary" || (!button.variant && index === 0);
              const baseClasses = `flex justify-center items-center gap-[8px] sm:gap-[10px] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-center text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[150%] transition ${
                isPrimary
                  ? "rounded-md bg-[#d5a546] text-[#1E1E1E] hover:bg-[#c29132]"
                  : "rounded-[8px] border border-[#C4A35A] bg-[#1E2A44] text-[#C4A35A] hover:bg-[#0c1f55]"
              }`;

              // Render anchor when href is provided for proper navigation
              if (button.href) {
                return (
                  <Link
                    key={`${button.label}-${index}`}
                    href={button.href}
                    onClick={button.onClick}
                    className={baseClasses}
                    style={{ fontFamily: "Moderat, sans-serif" }}
                  >
                    {button.label}
                  </Link>
                );
              }

              return (
                <button
                  key={`${button.label}-${index}`}
                  onClick={button.onClick}
                  className={baseClasses}
                  style={{ fontFamily: "Moderat, sans-serif" }}
                >
                  {button.label}
                </button>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

