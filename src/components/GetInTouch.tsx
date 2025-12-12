"use client";

import {
  User,
  Mail,
  PhoneCall,
  Info,
  Briefcase,
  Hash,
  Pencil,
  Paperclip,
  Check,
} from "lucide-react";
import { Reveal } from "./Reveal";

type FormField = {
  type: "text" | "email" | "tel" | "textarea" | "file";
  name: string;
  placeholder: string;
  icon: "user" | "mail" | "phone" | "info" | "briefcase" | "hash" | "pencil" | "paperclip";
  required?: boolean;
  gridCols?: 1 | 2; // For grouping fields in a grid
};

type GetInTouchProps = {
  formTitle?: string;
  formFields?: FormField[];
  sectionId?: string;
};

const defaultFormFields: FormField[] = [
  { type: "text", name: "firstName", placeholder: "First Name", icon: "user", gridCols: 2 },
  { type: "text", name: "lastName", placeholder: "Last Name", icon: "user", gridCols: 2 },
  { type: "email", name: "email", placeholder: "Email Address", icon: "mail" },
  { type: "tel", name: "phone", placeholder: "Phone Number", icon: "phone" },
  { type: "text", name: "subject", placeholder: "Subject", icon: "info" },
  { type: "textarea", name: "message", placeholder: "How can we help you? Feel free to get in touch!", icon: "pencil" },
  { type: "file", name: "attachment", placeholder: "Attach File", icon: "paperclip" },
];

const iconMap = {
  user: User,
  mail: Mail,
  phone: PhoneCall,
  info: Info,
  briefcase: Briefcase,
  hash: Hash,
  pencil: Pencil,
  paperclip: Paperclip,
};

export default function GetInTouch({ formTitle = "Contact Form", formFields = defaultFormFields, sectionId }: GetInTouchProps) {
  return (
    <section className="bg-[#f5f9ff] py-8 sm:py-12 md:py-16" id={sectionId}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
          {/* Background Colors - Split Vertically */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#1E2A44]" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#0f1f4b] to-[#1a3a6b]" />
          </div>
          
          {/* Content - Two Columns Layout */}
          <div className="relative grid md:grid-cols-2">
            {/* Left Panel - Information Section */}
            <div className="flex flex-col px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-white bg-gradient-to-b from-[#1E2A44] to-[#1a3a6b] md:bg-transparent">
              {/* Top Section - Dark Blue */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
                <Reveal as="p" className="inline-flex w-fit items-center justify-center gap-[10px] rounded-[8px] border border-white bg-[#1E2A44] px-2.5 sm:px-3 py-1 sm:py-1.5 text-center text-[11px] sm:text-[12px] md:text-[14px] font-medium leading-[150%] text-white" style={{ fontFamily: 'Moderat, sans-serif' }}>
                  Contact Us
                </Reveal>
                <Reveal>
                  <h2 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-semibold leading-tight md:leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Get in touch!
                  </h2>
                </Reveal>
                <Reveal>
                  <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    The Delegate Co. is the dedicated support powerhouse for entrepreneurs and companies — a trusted partner known for efficiency, adaptability, and smart delegation.
                  </p>
                </Reveal>
              </div>
              
              {/* Bottom Section - Blue Gradient */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <Reveal>
                  <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    We&apos;re happy to answer any questions you may have and help you determine which of our services best fit your needs.
                  </p>
                </Reveal>
                <Reveal>
                  <p className="text-[14px] sm:text-[15px] md:text-[17px] font-bold leading-[135%] text-white underline" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Call us at: +65 8333 0499
                  </p>
                </Reveal>
                
                <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4">
                  <Reveal>
                    <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold leading-normal text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      Your benefits:
                    </h3>
                  </Reveal>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {["Client-oriented", "Results-driven", "Independent", "Competent", "Problem-solving"].map((benefit) => (
                      <Reveal key={benefit} className="flex items-center gap-2">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" />
                        <span className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                          {benefit}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4">
                  <Reveal>
                    <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold leading-normal text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
                      What Happen Next?
                    </h3>
                  </Reveal>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>1</span>
                      <p className="text-[13px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        We Schedule a call at your convenience
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>2</span>
                      <p className="text-[13px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        We do a discovery and consulting meeting
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>3</span>
                      <p className="text-[13px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        We prepare a proposal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Contact Form */}
            <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
              <div className="rounded-xl sm:rounded-2xl md:rounded-[32px] bg-white p-5 sm:p-6 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
                <Reveal>
                  <h2 className="text-[24px] sm:text-[32px] md:text-[42px] font-semibold leading-tight text-[#1E1E1E] mb-5 sm:mb-6 md:mb-8" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    {formTitle}
                  </h2>
                </Reveal>
                <form className="space-y-4 sm:space-y-5">
                  {formFields.map((field, index) => {
                    const IconComponent = iconMap[field.icon];
                    const isTextarea = field.type === "textarea";
                    const isFile = field.type === "file";
                    
                    // Check if this field should be grouped with the next one
                    const shouldGroup = field.gridCols === 2 && index < formFields.length - 1;
                    const nextField = shouldGroup ? formFields[index + 1] : null;
                    const shouldSkip = index > 0 && formFields[index - 1].gridCols === 2;

                    // Skip if this is the second field in a pair
                    if (shouldSkip) {
                      return null;
                    }

                    // Render grouped fields
                    if (shouldGroup && nextField) {
                      const NextIconComponent = iconMap[nextField.icon];
                      return (
                        <Reveal key={`${field.name}-${nextField.name}`} className="grid gap-4 sm:gap-5 md:grid-cols-2">
                          <div className="relative">
                            <IconComponent className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a]" />
                            <input
                              type={field.type}
                              name={field.name}
                              placeholder={field.placeholder}
                              required={field.required}
                              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-[#d0d6ea] text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]"
                              style={{ fontFamily: "'Figtree', sans-serif" }}
                            />
                          </div>
                          <div className="relative">
                            <NextIconComponent className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a]" />
                            <input
                              type={nextField.type}
                              name={nextField.name}
                              placeholder={nextField.placeholder}
                              required={nextField.required}
                              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-[#d0d6ea] text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]"
                              style={{ fontFamily: "'Figtree', sans-serif" }}
                            />
                          </div>
                        </Reveal>
                      );
                    }

                    if (isTextarea) {
                      return (
                        <Reveal key={field.name} className="relative">
                          <IconComponent className="absolute left-3 sm:left-4 top-3 sm:top-4 h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a]" />
                          <textarea
                            name={field.name}
                            rows={6}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-[#d0d6ea] text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a] resize-none"
                            style={{ fontFamily: "'Figtree', sans-serif" }}
                          />
                        </Reveal>
                      );
                    }

                    if (isFile) {
                      return (
                        <Reveal key={field.name} className="relative">
                          <IconComponent className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a]" />
                          <input
                            type="file"
                            name={field.name}
                            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-[#d0d6ea] text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a] file:border-0 file:bg-transparent file:text-[#1E1E1E]"
                            style={{ fontFamily: "'Figtree', sans-serif" }}
                          />
                        </Reveal>
                      );
                    }

                    return (
                      <Reveal key={field.name} className="relative">
                        <IconComponent className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a]" />
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-[#d0d6ea] text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]"
                          style={{ fontFamily: "'Figtree', sans-serif" }}
                        />
                      </Reveal>
                    );
                  })}
                  <button className="w-full rounded-[8px] bg-[#c4a35a] px-5 sm:px-6 py-2.5 sm:py-3 text-center text-[15px] sm:text-[16px] md:text-[17px] font-medium leading-[135%] text-white transition hover:bg-[#b8934f]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

