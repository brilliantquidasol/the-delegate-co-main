"use client";

import { FormEvent, useState } from "react";
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
  const [formData, setFormData] = useState<Record<string, string | File | null>>({});
  const [selectedFiles, setSelectedFiles] = useState<Record<string, File | null>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (name: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    // Clear submit status when user makes changes
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage("");
    }
  };

  const handleFileChange = (name: string, file: File | null) => {
    setSelectedFiles((prev) => ({ ...prev, [name]: file }));
    setFormData((prev) => ({ ...prev, [name]: file }));
    // Clear error for this field when file is selected
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    // Clear submit status when user makes changes
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage("");
    }
  };

  const handleFileRemove = (name: string) => {
    setSelectedFiles((prev) => ({ ...prev, [name]: null }));
    setFormData((prev) => ({ ...prev, [name]: null }));
    // Reset the file input
    const fileInput = document.getElementById(`file-input-${name}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
    // Clear error
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    formFields.forEach((field) => {
      const value = formData[field.name];
      
      if (field.required !== false && !value) {
        newErrors[field.name] = `${field.placeholder} is required.`;
      } else if (field.type === "email" && value && typeof value === "string") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field.name] = "Please enter a valid email address.";
        }
      } else if (field.type === "tel" && value && typeof value === "string") {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) {
          newErrors[field.name] = "Please enter a valid phone number.";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);
    setSubmitMessage("");

    if (!validateForm()) {
      setSubmitStatus("error");
      setSubmitMessage("Please fix the errors above before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Success
      setSubmitStatus("success");
      setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.");
      
      // Reset form
      setFormData({});
      setSelectedFiles({});
      const form = e.currentTarget;
      form.reset();
      
      // Clear file inputs
      const fileInputs = form.querySelectorAll('input[type="file"]');
      fileInputs.forEach((input) => {
        (input as HTMLInputElement).value = "";
      });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="relative grid lg:grid-cols-2">
            {/* Left Panel - Information Section */}
            <div className="flex flex-col px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-white bg-gradient-to-b from-[#1E2A44] to-[#1a3a6b] lg:bg-transparent">
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
                          <div>
                            <div className="relative">
                              <IconComponent className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a]" />
                              <input
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                required={field.required}
                                value={typeof formData[field.name] === "string" ? formData[field.name] as string : ""}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border ${errors[field.name] ? "border-red-400" : "border-[#d0d6ea]"} bg-white text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]`}
                                style={{ fontFamily: "'Figtree', sans-serif" }}
                                aria-invalid={!!errors[field.name]}
                                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                              />
                            </div>
                            {errors[field.name] && (
                              <p className="text-[12px] sm:text-[13px] text-red-500 mt-1" role="alert" id={`${field.name}-error`}>
                                {errors[field.name]}
                              </p>
                            )}
                          </div>
                          <div>
                            <div className="relative">
                              <NextIconComponent className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a]" />
                              <input
                                type={nextField.type}
                                name={nextField.name}
                                placeholder={nextField.placeholder}
                                required={nextField.required}
                                value={typeof formData[nextField.name] === "string" ? formData[nextField.name] as string : ""}
                                onChange={(e) => handleInputChange(nextField.name, e.target.value)}
                                className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border ${errors[nextField.name] ? "border-red-400" : "border-[#d0d6ea]"} bg-white text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]`}
                                style={{ fontFamily: "'Figtree', sans-serif" }}
                                aria-invalid={!!errors[nextField.name]}
                                aria-describedby={errors[nextField.name] ? `${nextField.name}-error` : undefined}
                              />
                            </div>
                            {errors[nextField.name] && (
                              <p className="text-[12px] sm:text-[13px] text-red-500 mt-1" role="alert" id={`${nextField.name}-error`}>
                                {errors[nextField.name]}
                              </p>
                            )}
                          </div>
                        </Reveal>
                      );
                    }

                    if (isTextarea) {
                      return (
                        <Reveal key={field.name}>
                          <div className="relative">
                            <IconComponent className="absolute left-3 sm:left-4 top-3 sm:top-4 h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a]" />
                            <textarea
                              name={field.name}
                              rows={6}
                              placeholder={field.placeholder}
                              required={field.required}
                              value={typeof formData[field.name] === "string" ? formData[field.name] as string : ""}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border ${errors[field.name] ? "border-red-400" : "border-[#d0d6ea]"} bg-white text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a] resize-none`}
                              style={{ fontFamily: "'Figtree', sans-serif" }}
                              aria-invalid={!!errors[field.name]}
                              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                            />
                          </div>
                          {errors[field.name] && (
                            <p className="text-[12px] sm:text-[13px] text-red-500 mt-1" role="alert" id={`${field.name}-error`}>
                              {errors[field.name]}
                            </p>
                          )}
                        </Reveal>
                      );
                    }

                    if (isFile) {
                      const selectedFile = selectedFiles[field.name];
                      const fileInputId = `file-input-${field.name}`;
                      
                      return (
                        <Reveal key={field.name}>
                          <div className="space-y-2">
                            {selectedFile ? (
                              <div className={`flex items-center gap-3 rounded-xl sm:rounded-2xl border ${errors[field.name] ? "border-red-400" : "border-[#c4a35a]"} bg-[#f8f9fa] px-3 sm:px-4 py-2.5 sm:py-3`}>
                                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a] shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-[12px] sm:text-[13px] text-[#6b7280] font-medium" style={{ fontFamily: "'Figtree', sans-serif" }}>
                                    File selected:
                                  </p>
                                  <p className="text-[14px] sm:text-[15px] text-[#1E1E1E] font-medium truncate" style={{ fontFamily: "'Figtree', sans-serif" }} title={selectedFile.name}>
                                    {selectedFile.name}
                                  </p>
                                  <p className="text-[11px] sm:text-[12px] text-[#6b7280]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                                    {(selectedFile.size / 1024).toFixed(1)} KB
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const input = document.getElementById(fileInputId) as HTMLInputElement;
                                      input?.click();
                                    }}
                                    className="text-[12px] sm:text-[13px] text-[#c4a35a] font-medium hover:text-[#b8934f] transition underline"
                                    style={{ fontFamily: "'Figtree', sans-serif" }}
                                  >
                                    Replace
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleFileRemove(field.name)}
                                    className="text-[12px] sm:text-[13px] text-red-500 font-medium hover:text-red-700 transition"
                                    aria-label="Remove file"
                                    style={{ fontFamily: "'Figtree', sans-serif" }}
                                  >
                                    ×
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="relative">
                                <IconComponent className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a] z-10" />
                                <label
                                  htmlFor={fileInputId}
                                  className={`flex items-center cursor-pointer w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border ${errors[field.name] ? "border-red-400" : "border-[#d0d6ea]"} bg-white text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus-within:border-[#c4a35a] hover:border-[#c4a35a]`}
                                  style={{ fontFamily: "'Figtree', sans-serif" }}
                                >
                                  <span className="text-[#6b7280]">Choose file</span>
                                  <span className="ml-2 text-[#9ca3af] text-[12px] sm:text-[13px]">(No file chosen)</span>
                                </label>
                              </div>
                            )}
                            <input
                              type="file"
                              id={fileInputId}
                              name={field.name}
                              required={field.required}
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                handleFileChange(field.name, file);
                              }}
                              className="hidden"
                              aria-label={field.placeholder}
                            />
                            {errors[field.name] && (
                              <p className="text-[12px] sm:text-[13px] text-red-500 mt-1" role="alert" id={`${field.name}-error`}>
                                {errors[field.name]}
                              </p>
                            )}
                          </div>
                        </Reveal>
                      );
                    }

                    return (
                      <Reveal key={field.name}>
                        <div className="relative">
                          <IconComponent className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#5d688a]" />
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={typeof formData[field.name] === "string" ? formData[field.name] as string : ""}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border ${errors[field.name] ? "border-red-400" : "border-[#d0d6ea]"} bg-white text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[135%] text-[#1E1E1E] outline-none transition focus:border-[#c4a35a]`}
                            style={{ fontFamily: "'Figtree', sans-serif" }}
                            aria-invalid={!!errors[field.name]}
                            aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                          />
                        </div>
                        {errors[field.name] && (
                          <p className="text-[12px] sm:text-[13px] text-red-500 mt-1" role="alert" id={`${field.name}-error`}>
                            {errors[field.name]}
                          </p>
                        )}
                      </Reveal>
                    );
                  })}
                  
                  {/* Submit Status Messages */}
                  {submitStatus === "success" && (
                    <div className="rounded-xl sm:rounded-2xl bg-green-50 border border-green-200 px-4 py-3" role="alert">
                      <p className="text-[14px] sm:text-[15px] text-green-800 font-medium" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        ✓ {submitMessage}
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="rounded-xl sm:rounded-2xl bg-red-50 border border-red-200 px-4 py-3" role="alert">
                      <p className="text-[14px] sm:text-[15px] text-red-800 font-medium" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        {submitMessage}
                      </p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full rounded-[8px] px-5 sm:px-6 py-2.5 sm:py-3 text-center text-[15px] sm:text-[16px] md:text-[17px] font-medium leading-[135%] text-white transition ${
                      isSubmitting
                        ? "bg-[#9a8a5f] cursor-not-allowed"
                        : "bg-[#c4a35a] hover:bg-[#b8934f]"
                    }`}
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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

