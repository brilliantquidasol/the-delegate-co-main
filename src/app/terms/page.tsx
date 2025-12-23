"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Reveal } from "../../components/Reveal";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#142148]" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030c32] to-[#050a1b] text-white self-stretch pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 md:pt-24 md:pb-16 md:px-6 lg:pt-[96px] lg:pb-[50px] lg:px-12 xl:px-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 sm:gap-6 md:gap-[50px] self-stretch max-w-7xl mx-auto">
            <Reveal className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-1 w-full">
            <h1 className="text-[22px] sm:text-[28px] md:text-[40px] lg:text-[64px] font-bold leading-tight md:leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Terms and Conditions
            </h1>
            <p className="text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
              The Delegate Co.
            </p>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-[135%] text-white/80" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Effective Date: [Insert Date]
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="/the-delegate-co-logo.png"
              alt="The Delegate Co. logo"
              className="hidden md:block w-[120px] sm:w-[140px] h-auto md:w-[180px] lg:w-[264px] lg:h-[269px] object-contain"
              style={{ aspectRatio: '264/269' }}
            />
          </Reveal>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            
            {/* Section 1 */}
            <Reveal>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  1. Scope of Relationship
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] max-w-none" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  The Delegate Co. acts as an independent contractor. Nothing in these Terms creates a partnership, joint venture, or employer-employee relationship. We maintain full control over the means and methods by which services are performed.
                </p>
              </div>
            </Reveal>

            {/* Section 2 */}
            <Reveal delay={60}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  2. Client Responsibilities & Authority
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] mb-3 sm:mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  To perform our services effectively, the Client must:
                </p>
                <ul className="space-y-2 sm:space-y-3 ml-0 pl-6 sm:pl-8 md:pl-10">
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Provide Timely Access:</strong> Supply all necessary passwords, software access, and information required.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Accuracy of Data:</strong> The Client is responsible for the accuracy and legality of all data provided to us. We are not liable for errors resulting from incorrect information provided by the Client.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Third-Party Terms:</strong> If we manage accounts on your behalf (e.g., social media, CRM), you are responsible for ensuring our actions comply with those platforms&apos; specific Terms of Service.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 3 */}
            <Reveal delay={120}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  3. Payment, Late Fees, and &quot;Stop Work&quot;
                </h2>
                <ul className="space-y-2 sm:space-y-3 ml-0 pl-6 sm:pl-8 md:pl-10">
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Late Payments:</strong> Invoices not paid within [X] days of the due date will incur a late fee of [1.5% or 5%] per month on the outstanding balance.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Right to Suspend:</strong> If any payment is overdue, The Delegate Co. reserves the right to immediately suspend all services and withhold deliverables until the account is paid in full. We are not liable for any business disruption caused by such suspension.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 4 */}
            <Reveal delay={180}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  4. Intellectual Property Ownership
                </h2>
                <ul className="space-y-2 sm:space-y-3 ml-0 pl-6 sm:pl-8 md:pl-10">
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Work Product:</strong> Upon receipt of full payment, all custom work produced for the Client (&quot;Work Product&quot;) shall be owned by the Client.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Pre-existing Material:</strong> The Delegate Co. retains ownership of its proprietary tools, templates, workflows, and methods used to perform the services.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 5 */}
            <Reveal delay={240}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  5. Robust Indemnification
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  The Client agrees to indemnify, defend, and hold harmless The Delegate Co. and its contractors from any claims, losses, or legal fees arising out of:
                </p>
                <ul className="space-y-2 sm:space-y-3 ml-0 pl-6 sm:pl-8 md:pl-10">
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    The Client&apos;s breach of these Terms.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    The Client&apos;s instructions or the content provided by the Client.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Any third-party claims resulting from the Client&apos;s business operations.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 6 */}
            <Reveal delay={300}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  6. Strict Limitation of Liability
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] mb-3 sm:mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  To the maximum extent permitted by law:
                </p>
                <ul className="space-y-2 sm:space-y-3 ml-0 pl-6 sm:pl-8 md:pl-10">
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>No Indirect Damages:</strong> The Delegate Co. is not liable for lost profits, lost data, or any indirect, incidental, or consequential damages.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Liability Cap:</strong> Our total liability for any claim arising out of these Terms shall not exceed the total amount paid by the Client to The Delegate Co. in the three (3) months preceding the claim.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 7 */}
            <Reveal delay={360}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  7. Non-Solicitation
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  During the term of our agreement and for twelve (12) months thereafter, the Client agrees not to solicit, hire, or attempt to hire any employee or independent contractor of The Delegate Co. without written consent and payment of a placement fee.
                </p>
              </div>
            </Reveal>

            {/* Section 8 */}
            <Reveal delay={420}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  8. Confidentiality & Data Security
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  We implement industry-standard security measures (e.g., password managers). However, the Client acknowledges that no data transmission over the internet is 100% secure. The Delegate Co. is not responsible for data breaches caused by third-party software or &quot;force majeure&quot; events.
                </p>
              </div>
            </Reveal>

            {/* Section 9 */}
            <Reveal delay={480}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  9. Dispute Resolution & Jurisdiction
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  In the event of a dispute, both parties agree to first attempt good-faith mediation. If mediation fails, any legal action shall be brought exclusively in the courts of [Insert Your City/State/Country]. The prevailing party shall be entitled to recover reasonable attorney fees.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

