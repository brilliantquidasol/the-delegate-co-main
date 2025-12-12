"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Hire Our Team", href: "/hire" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full text-white transition-colors duration-300 ${
          isScrolled ? "bg-[#1E2A44]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:py-4 md:px-8">
          <Link 
            href="/" 
            className="flex items-center hover:opacity-90 transition z-50" 
            aria-label="The Delegate Co. home"
            onClick={closeMobileMenu}
          >
            <Image
              src="/navbar-logo.png"
              alt="The Delegate Co."
              width={200}
              height={44}
              priority
              className="h-8 w-auto sm:h-9 md:h-10 lg:h-11"
            />
          </Link>
          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-8 text-sm font-medium md:flex">
              {navLinks.slice(0, -1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href as "/" | "/about" | "/hire" | "/careers" | "/contact"}
                  className="text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="hidden rounded-md border border-white/60 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 md:block"
            >
              Contact Us
            </Link>
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden z-50 p-2 text-white hover:opacity-80 transition"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#1E2A44]/95 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 sm:w-80 max-w-[85vw] bg-[#1E2A44] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-16 sm:pt-20 px-5 sm:px-6 pb-8">
          <nav className="flex flex-col gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as "/" | "/about" | "/hire" | "/careers" | "/contact"}
                onClick={closeMobileMenu}
                className="text-base sm:text-lg font-medium text-white/90 transition hover:text-white border-b border-white/10 pb-3 sm:pb-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-6 sm:mt-8 rounded-md border border-white/60 px-5 sm:px-6 py-2.5 sm:py-3 text-center text-sm sm:text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

