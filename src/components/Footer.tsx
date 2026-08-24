"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-foreground/50">
        <span>Rui Neves — {year}</span>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
}
