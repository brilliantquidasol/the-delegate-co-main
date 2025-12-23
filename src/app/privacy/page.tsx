"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Reveal } from "../../components/Reveal";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#142148]" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030c32] to-[#050a1b] text-white self-stretch pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 md:pt-24 md:pb-16 md:px-6 lg:pt-[96px] lg:pb-[50px] lg:px-12 xl:px-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 sm:gap-6 md:gap-[50px] self-stretch max-w-7xl mx-auto">
            <Reveal className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-1 w-full">
            <h1 className="text-[22px] sm:text-[28px] md:text-[40px] lg:text-[64px] font-bold leading-tight md:leading-none text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Privacy Policy
            </h1>
            <p className="text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[135%] text-white/90" style={{ fontFamily: "'Figtree', sans-serif" }}>
              The Delegate Co.
            </p>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-[135%] text-white/80" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Last Updated: December 22, 2025
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

      {/* Privacy Policy Content Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            
            {/* Introduction */}
            <Reveal>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  At The Delegate Co. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we respect your privacy and are committed to protecting the personal data of our clients and website visitors. This policy outlines how we collect, use, and safeguard your information.
                </p>
              </div>
            </Reveal>

            {/* Section 1 */}
            <Reveal delay={60}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  1. Information We Collect
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] mb-3 sm:mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  We collect information that identifies, relates to, or could reasonably be linked to you (&quot;Personal Data&quot;). This includes:
                </p>
                <ul className="space-y-2 sm:space-y-3 ml-0 pl-6 sm:pl-8 md:pl-10">
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Contact Data:</strong> Name, email address, phone number, and billing address.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Account Credentials:</strong> Usernames and passwords for third-party platforms you authorize us to manage (collected via secure vaults like 1Password or LastPass).
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Financial Data:</strong> Credit card or bank details for processing payments (handled by secure third-party processors like Stripe).
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Technical Data:</strong> IP address, browser type, and usage data collected via cookies when you visit our Site.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 2 */}
            <Reveal delay={120}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  2. How We Use Your Information
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] mb-3 sm:mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  We use your data strictly to provide our services, including:
                </p>
                <ul className="space-y-2 sm:space-y-3 ml-0 pl-6 sm:pl-8 md:pl-10">
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Performing the tasks outlined in our Service Agreement.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Processing payments and preventing fraudulent transactions.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Communicating with you regarding project updates or administrative changes.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    Complying with legal obligations (e.g., tax reporting).
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 3 */}
            <Reveal delay={180}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  3. Data Sharing & Third Parties
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] mb-3 sm:mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  We do not sell your personal data. We only share information with:
                </p>
                <ul className="space-y-2 sm:space-y-3 ml-0 pl-6 sm:pl-8 md:pl-10">
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Service Providers:</strong> Contractors or employees of The Delegate Co. who require access to perform your tasks (all of whom are bound by strict NDAs).
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Software Tools:</strong> Secure third-party tools used for project management, communication, and billing (e.g., Slack, Asana, Stripe).
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Legal Necessity:</strong> When required by law or to protect our legal rights.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 4 */}
            <Reveal delay={240}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  4. International Data Transfers (GDPR/CCPA)
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  If you are located in the EU or UK, please note that we may transfer and process your data in countries outside the EEA. We ensure &quot;Standard Contractual Clauses&quot; or equivalent protections are in place to keep your data secure according to GDPR standards.
                </p>
              </div>
            </Reveal>

            {/* Section 5 */}
            <Reveal delay={300}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  5. Data Security
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] mb-3 sm:mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  We implement industry-standard security protocols, including:
                </p>
                <ul className="space-y-2 sm:space-y-3 ml-0 pl-6 sm:pl-8 md:pl-10">
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Encryption:</strong> Use of SSL/TLS encryption for data transmission.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Access Control:</strong> &quot;Need-to-know&quot; access for our team members.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Credential Management:</strong> We never store passwords in plain text; we use encrypted password managers.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 6 */}
            <Reveal delay={360}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  6. Your Rights
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] mb-3 sm:mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  Depending on your location, you may have the right to:
                </p>
                <ul className="space-y-2 sm:space-y-3 ml-0 pl-6 sm:pl-8 md:pl-10">
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Access:</strong> Request a copy of the data we hold about you.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Erasure:</strong> Request that we delete your personal data (the &quot;Right to be Forgotten&quot;).
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Correction:</strong> Ask us to update inaccurate information.
                  </li>
                  <li className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] list-disc" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Opt-Out:</strong> Unsubscribe from any marketing communications at any time.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 7 */}
            <Reveal delay={420}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  7. Data Retention
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  We retain your information only as long as necessary to provide our services or as required by law. Upon termination of our agreement, we will securely delete or return your credentials and sensitive files within [30/60] days.
                </p>
              </div>
            </Reveal>

            {/* Section 8 */}
            <Reveal delay={480}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1E2A44] leading-tight" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  8. Contact Us
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E] mb-3 sm:mb-4" style={{ fontFamily: "'Figtree', sans-serif" }}>
                  For any privacy-related questions or to exercise your rights, please contact our Data Protection Lead at:
                </p>
                <div className="space-y-2 sm:space-y-3 ml-0 pl-0">
                  <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Email:</strong> <a href="mailto:hr@thedelegateco.com" className="text-[#c4a35a] hover:text-[#b8934f] underline">hr@thedelegateco.com</a>
                  </p>
                  <p className="text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[150%] text-[#1E1E1E]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    <strong>Address:</strong> 62 Ubi Road 1, Oxley BizHub 2, Singapore 408734
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

