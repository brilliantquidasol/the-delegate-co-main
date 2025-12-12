import { Linkedin, Facebook, Instagram } from "lucide-react";

type FooterItem = { label: string; href: string };

function FooterColumn({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
        {title}
      </h4>
      <ul className="mt-3 space-y-2 text-sm text-white/80">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#050a1b] py-6 sm:py-8 md:py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 px-4 sm:px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr,1fr,1fr,1fr]">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="text-lg sm:text-xl font-semibold">the delegate co.</div>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-white/70">
            We are Singapore&apos;s dedicated support powerhouse for
            entrepreneurs, SMEs, and enterprise leaders who value efficiency
            paired with creativity.
          </p>
        </div>
        <FooterColumn
          title="Quick Links"
          items={[
            { label: "About", href: "#" },
            { label: "Hire Our Team", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" },
          ]}
        />
        <FooterColumn
          title="Support"
          items={[
            { label: "Help & FAQ", href: "#faq" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms", href: "#" },
          ]}
        />
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            Social Media
          </h4>
          <div className="flex gap-3 sm:gap-4 text-white/80">
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-6 sm:mt-8 text-center text-[10px] sm:text-xs text-white/50 px-4">
        © {new Date().getFullYear()} The Delegate Co. All rights reserved.
      </p>
    </footer>
  );
}




