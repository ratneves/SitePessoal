"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Contact() {
  const { t, locale } = useLanguage();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <section id="contact" className="scroll-mt-20 bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {t.contact.title}
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-white/40 mx-auto" />
        <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl mx-auto">
          {t.contact.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${t.contact.email}`}
            className="rounded-full bg-white text-primary-dark px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            {t.contact.email}
          </a>
          <a
            href={`tel:${t.contact.phone.replace(/\s+/g, "")}`}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            {t.contact.phone}
          </a>
          <a
            href={`https://${t.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`${basePath}/cv/CV-Rui-Neves-${locale.toUpperCase()}.pdf`}
            download
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            {t.contact.ctaDownload}
          </a>
        </div>

        <p className="mt-8 text-sm text-white/60">{t.contact.location}</p>
      </div>
    </section>
  );
}
