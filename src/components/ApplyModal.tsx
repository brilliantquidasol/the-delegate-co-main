"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Check, X, AlertCircle } from "lucide-react";

type Option = { label: string; value: string };

type ApplyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
};

export default function ApplyModal({ isOpen, onClose, jobTitle }: ApplyModalProps) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthday: "",
    street: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  useEffect(() => {
    if (!isOpen) {
      setErrors({});
      setIsSubmitted(false);
      setCvFile(null);
      const cvInput = document.getElementById("cv-file-input") as HTMLInputElement;
      if (cvInput) cvInput.value = "";
    }
  }, [isOpen]);

  const handleInput = (field: keyof typeof formValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!formValues.phone || formValues.phone.trim() === "") {
      setFormValues((prev) => ({ ...prev, phone: "+65" }));
    }
  };

  const imagePreviews = useMemo(
    () =>
      files.map((file) => ({
        name: file.name,
        sizeLabel: `${(file.size / 1024).toFixed(1)} KB`,
      })),
    [files]
  );

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    const requiredFields: Array<keyof typeof formValues> = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "birthday",
      "street",
    ];

    requiredFields.forEach((field) => {
      if (!formValues[field]) {
        nextErrors[field] = "This field is required.";
      }
    });

    if (formValues.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (files.length > 3) {
      nextErrors.files = "You can upload up to 3 images.";
    }

    setErrors(nextErrors);
    return nextErrors;
  };

  const handleFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const accepted = Array.from(incoming).filter((file) =>
      ["image/jpeg", "image/png", "image/webp"].includes(file.type)
    );
    const limited = accepted.slice(0, 3);
    setFiles(limited);
  };

  const handleCvFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      // Accept PDF, DOC, DOCX, and common text formats
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ];
      if (allowedTypes.includes(file.type) || file.name.endsWith(".pdf") || file.name.endsWith(".doc") || file.name.endsWith(".docx")) {
        setCvFile(file);
        if (errors.cvFile) {
          setErrors((prev) => {
            const next = { ...prev };
            delete next.cvFile;
            return next;
          });
        }
      } else {
        setErrors((prev) => ({ ...prev, cvFile: "Please upload a PDF, DOC, or DOCX file." }));
      }
    }
  };

  const handleCvUploadClick = () => {
    const input = document.getElementById("cv-file-input") as HTMLInputElement;
    input?.click();
  };

  const removeCvFile = () => {
    setCvFile(null);
    const input = document.getElementById("cv-file-input") as HTMLInputElement;
    if (input) input.value = "";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrorMessage("Please fix all errors before submitting.");
      setShowErrorModal(true);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Simulated successful submission.
      setIsSubmitted(true);
      setFormValues({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        birthday: "",
        street: "",
      });
      setFiles([]);
      setCvFile(null);
      const cvInput = document.getElementById("cv-file-input") as HTMLInputElement;
      if (cvInput) cvInput.value = "";
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
      setShowErrorModal(true);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 px-4 py-10 overflow-y-auto" onClick={() => setShowErrorModal(false)}>
          <div
            className="relative w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8 bg-red-50 border-2 border-red-400"
            onClick={(e) => e.stopPropagation()}
            role="alert"
            aria-live="polite"
          >
            <button
              onClick={() => setShowErrorModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-2">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-red-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                Error
              </h3>
              <p className="text-[14px] sm:text-[16px] text-red-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                {errorMessage}
              </p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="mt-4 w-full rounded-lg px-6 py-3 text-center text-[15px] sm:text-[16px] font-semibold text-white bg-red-600 hover:bg-red-700 transition"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

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
          {isSubmitted ? (
            <div
              className="rounded-xl border-2 border-green-400 bg-green-50 px-6 py-8 text-center"
              role="status"
              aria-live="polite"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-[20px] sm:text-[24px] font-bold text-green-800 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Application Submitted Successfully!
              </h4>
              <p className="text-[14px] sm:text-[16px] text-green-700 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Thank you for applying. We&apos;ll be in touch soon.
              </p>
              <div className="flex gap-3">
                <button
                  className="flex-1 rounded-lg px-6 py-3 text-center text-[15px] sm:text-[16px] font-semibold text-white bg-green-600 hover:bg-green-700 transition"
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Close
                </button>
                <button
                  className="flex-1 rounded-lg border-2 border-green-600 px-6 py-3 text-center text-[15px] sm:text-[16px] font-semibold text-green-600 hover:bg-green-50 transition"
                  onClick={() => setIsSubmitted(false)}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              {/* Basic Information Label */}
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Basic Information
              </label>
              
              {/* Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <input
                    placeholder="First Name"
                    className={`input ${errors.firstName ? "input-error" : ""}`}
                    value={formValues.firstName}
                    onChange={handleInput("firstName")}
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="error-text">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Last Name"
                    className={`input ${errors.lastName ? "input-error" : ""}`}
                    value={formValues.lastName}
                    onChange={handleInput("lastName")}
                    aria-invalid={!!errors.lastName}
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="error-text">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <input
                    placeholder="+65 0000 0000"
                    className={`input ${errors.phone ? "input-error" : ""}`}
                    value={formValues.phone}
                    onChange={handleInput("phone")}
                    onFocus={handlePhoneFocus}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="error-text">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Email Address"
                    className={`input ${errors.email ? "input-error" : ""}`}
                    value={formValues.email}
                    onChange={handleInput("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="error-text">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Birthday */}
              <div>
                <label className="block text-[14px] font-medium text-[#1E1E1E] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Birthday
                </label>
                <input
                  type="date"
                  className={`input ${errors.birthday ? "input-error" : ""}`}
                  value={formValues.birthday}
                  onChange={handleInput("birthday")}
                  aria-invalid={!!errors.birthday}
                  aria-describedby={errors.birthday ? "birthday-error" : undefined}
                />
                {errors.birthday && (
                  <p id="birthday-error" className="error-text">
                    {errors.birthday}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-[14px] font-medium text-[#1E1E1E] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Complete Address
                </label>
                <input
                  placeholder="Complete Address"
                  className={`input ${errors.street ? "input-error" : ""}`}
                  value={formValues.street}
                  onChange={handleInput("street")}
                  aria-invalid={!!errors.street}
                  aria-describedby={errors.street ? "street-error" : undefined}
                />
                {errors.street && (
                  <p id="street-error" className="error-text">
                    {errors.street}
                  </p>
                )}
              </div>

              {/* Image upload */}
              <div
                className={`rounded-2xl border border-dashed ${
                  errors.files ? "border-red-300 bg-red-50" : "border-[#c8cedc] bg-[#f8fafd]"
                } p-6 text-center space-y-3`}
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="text-left">
                    <p className="text-[14px] font-medium text-[#1E1E1E]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Upload Valid ID(s) (images only, up to 3)
                    </p>
                    <p className="text-[12px] text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Supported formats: JPG, PNG, WebP
                    </p>
                  </div>
                  <label className="rounded-md border border-[#c4a35a] px-4 py-2 text-[14px] font-semibold text-[#c4a35a] cursor-pointer hover:bg-[#fff3d9]">
                    Choose files
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      multiple
                      className="hidden"
                      onChange={(e) => handleFiles(e.target.files)}
                    />
                  </label>
                </div>
                {imagePreviews.length > 0 && (
                  <ul className="text-left text-[13px] text-[#1E1E1E] space-y-1">
                    {imagePreviews.map((file) => (
                      <li key={file.name} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#c4a35a]" aria-hidden />
                        <span className="truncate">{file.name}</span>
                        <span className="text-[#6b7280]">{file.sizeLabel}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {errors.files && (
                  <p className="error-text text-center" role="alert">
                    {errors.files}
                  </p>
                )}
              </div>

              {/* CV upload */}
              <div>
                <div className={`flex items-center gap-3 rounded-xl border ${errors.cvFile ? "border-red-400" : "border-[#e6e9f2]"} bg-white px-4 py-3`}>
                  <div className="flex-1 min-w-0">
                    {cvFile ? (
                      <div className="flex items-center gap-2">
                        <span className="text-[#1E1E1E] text-[14px] truncate" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {cvFile.name}
                        </span>
                        <span className="text-[12px] text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
                          ({(cvFile.size / 1024).toFixed(1)} KB)
                        </span>
                        <button
                          type="button"
                          onClick={removeCvFile}
                          className="ml-2 text-red-500 hover:text-red-700 text-sm"
                          aria-label="Remove CV file"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <span className="text-[#1E1E1E] text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Attach here your CV
                      </span>
                    )}
                  </div>
                  <input
                    type="file"
                    id="cv-file-input"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleCvFile}
                    className="hidden"
                    aria-label="Upload CV file"
                  />
                  <button
                    type="button"
                    onClick={handleCvUploadClick}
                    className="rounded-md border border-[#c4a35a] px-3 py-2 text-[14px] text-[#c4a35a] hover:bg-[#c4a35a] hover:text-white transition-colors"
                  >
                    {cvFile ? "Change" : "Upload"}
                  </button>
                </div>
                {errors.cvFile && (
                  <p className="error-text mt-1" role="alert" id="cv-file-error">
                    {errors.cvFile}
                  </p>
                )}
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
                  type="button"
                  onClick={onClose}
                  className="rounded-md border border-[#e6e9f2] px-5 py-2 text-[14px] font-medium text-[#1E1E1E] hover:bg-[#f5f7fb]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-[#1E2A44] px-5 py-2 text-[14px] font-semibold text-white hover:bg-[#0f1f2d]"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
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
        .input-error {
          border-color: #f87171;
          background: #fff5f5;
        }
        .error-text {
          margin-top: 6px;
          font-size: 12px;
          color: #b91c1c;
          line-height: 1.4;
        }
      `}</style>
      </div>
    </>
  );
}

