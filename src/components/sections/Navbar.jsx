import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import { BrutalistButton } from "../common/BrutalistButton";
import { useLanguage } from "../../context/LanguageContext";

export const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.journals"), href: "#journals" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-bg border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Name with colorful badge */}
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-display font-black text-xl sm:text-2xl tracking-tight text-ink hover:text-brand-blue transition-colors select-none whitespace-nowrap shrink-0 group"
        >
          <span>DWI PASHA</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="px-3 py-1.5 rounded-lg font-display font-bold text-sm text-ink hover:bg-accent hover:border-2 hover:border-ink hover:shadow-[2px_2px_0_#111111] border-2 border-transparent whitespace-nowrap transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <LanguageSwitcher className="shrink-0" />
          <BrutalistButton
            variant="yellow"
            size="sm"
            href="#contact"
            className="whitespace-nowrap shrink-0"
          >
            {t("nav.getInTouch")}
          </BrutalistButton>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-surface border-2 border-ink shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-ink" />
            ) : (
              <Menu className="w-5 h-5 text-ink" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t-2 border-ink bg-surface p-4 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-2 mb-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-lg font-display font-bold text-base text-ink hover:bg-bg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <BrutalistButton
            variant="yellow"
            size="md"
            href="#contact"
            className="w-full"
            onClick={() => setIsOpen(false)}
          >
            {t("nav.getInTouch")}
          </BrutalistButton>
        </div>
      )}
    </header>
  );
};
