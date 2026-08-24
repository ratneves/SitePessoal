"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Locale } from "@/lib/content";

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: "#about", label: t.nav.about },
    { href: "#leadership", label: t.nav.leadership },
    { href: "#teaching", label: t.nav.teaching },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#education", label: t.nav.education },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  const LangButton = ({ code }: { code: Locale }) => (
    <button
      onClick={() => setLocale(code)}
      className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
        locale === code
          ? "bg-primary text-white"
          : "text-primary-dark hover:bg-primary/10"
      }`}
      aria-pressed={locale === code}
    >
      {code.toUpperCase()}
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      } bg-white/90 backdrop-blur border-b border-border`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-primary-dark tracking-tight">
          Rui Neves
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 bg-surface rounded-full p-1 border border-border">
            <LangButton code="pt" />
            <LangButton code="en" />
          </div>
          <button
            className="lg:hidden p-2 -mr-2 text-primary-dark cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
            aria-expanded={open}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/60 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-1 bg-surface rounded-full p-1 border border-border mt-3 w-fit">
              <LangButton code="pt" />
              <LangButton code="en" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
