"use client";

import { useEffect } from "react";

type Option = { label: string; value: string };

type ApplyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
};

const genderOptions: Option[] = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Non-binary", value: "non-binary" },
  { label: "Prefer not to say", value: "na" },
];

const experienceOptions: Option[] = [
  { label: "Experienced Agent", value: "experienced" },
  { label: "Mid-level", value: "mid" },
  { label: "Entry-level", value: "entry" },
];

export default function ApplyModal({ isOpen, onClose, jobTitle }: ApplyModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/50 px-4 py-10 overflow-y-auto">
      <div
        className="w-full max-w-[1000px] rounded-[16px] bg-white shadow-2xl p-[10px] md:p-[24px]"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e6e9f2]">
          <h3 className="text-[18px] font-semibold text-[#1E1E1E]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Job Form {jobTitle ? `- ${jobTitle}` : ""}
          </h3>
          <button
            onClick={onClose}
            className="text-[#1E1E1E] hover:text-[#c4a35a] text-sm font-medium"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        <div className="px-6 py-6 space-y-4">
          {/* Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input placeholder="First Name" className="input" />
            <input placeholder="Last Name" className="input" />
          </div>

          {/* Phone / Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input placeholder="+65 0000 0000" className="input" />
            <input placeholder="Email Address" className="input" />
          </div>

          {/* DOB / Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="grid grid-cols-3 gap-2">
              <input placeholder="DD" className="input" />
              <input placeholder="MM" className="input" />
              <input placeholder="YY" className="input" />
            </div>
            <select className="input">
              {genderOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Citizenship / Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input placeholder="Citizenship" className="input" />
            <select className="input">
              {experienceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <input placeholder="Street" className="input" />

          {/* ID upload */}
          <div className="rounded-2xl border border-dashed border-[#c8cedc] bg-[#f8fafd] p-6 text-center space-y-3">
            <p className="text-[14px] font-medium text-[#1E1E1E]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Upload Valid ID(s) (Back and Forth ID picture)
            </p>
            <div className="flex flex-col items-center gap-2 py-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-inner text-[#1E2A44] text-xl font-bold">
                +
              </div>
              <p className="text-[14px] text-[#1E1E1E]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Click here or drag file to upload
              </p>
              <p className="text-[12px] text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Supported formats: JPG, PNG, or PDF
              </p>
            </div>
          </div>

          {/* CV upload */}
          <div className="flex items-center gap-3 rounded-xl border border-[#e6e9f2] bg-white px-4 py-3">
            <span className="text-[#1E1E1E] text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Attach here your CV
            </span>
            <button className="ml-auto rounded-md border border-[#c4a35a] px-3 py-2 text-[14px] text-[#c4a35a]">
              Upload
            </button>
          </div>

          {/* Consent */}
          <p className="text-[12px] leading-[150%] text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
            By submitting your application and any personal data or information, you agree that The Delegate Co. may collect, use,
            and disclose your personal data for the purposes of assessing your job application and (if applicable) obtained by our
            organisation as a result of your application, for the following purposes in accordance with the Personal Data Protection
            Act 2012 and our data protection policy (available at our website https://www.delegate.com/privacy-policy/)
          </p>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="rounded-md border border-[#e6e9f2] px-5 py-2 text-[14px] font-medium text-[#1E1E1E] hover:bg-[#f5f7fb]"
            >
              Cancel
            </button>
            <button className="rounded-md bg-[#1E2A44] px-5 py-2 text-[14px] font-semibold text-white hover:bg-[#0f1f2d]">
              Submit
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 12px;
          border: 1px solid #e6e9f2;
          background: #f9fbff;
          padding: 12px 14px;
          font-size: 14px;
          color: #1e1e1e;
          outline: none;
        }
        .input:focus {
          border-color: #c4a35a;
          background: #fff;
        }
      `}</style>
    </div>
  );
}

