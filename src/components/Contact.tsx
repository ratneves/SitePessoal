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
            href={t.contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white text-primary-dark px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            {t.contact.ctaBook}
          </a>
          <a
            href={`mailto:${t.contact.email}`}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
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

        <a
          href={`${basePath}/cv/CV-Rui-Neves-ATS-${locale.toUpperCase()}.pdf`}
          download
          className="mt-4 inline-block text-xs text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors"
        >
          {t.contact.ctaDownloadAts}
        </a>

        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="rounded-2xl bg-white p-3 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/vcard/vcard-qr.svg`}
              alt="QR code"
              width={128}
              height={128}
              className="h-28 w-28 sm:h-32 sm:w-32"
            />
          </div>
          <p className="text-xs text-white/60 max-w-xs">{t.contact.qrCaption}</p>
          <a
            href={`${basePath}/vcard/Rui-Neves.vcf`}
            download
            className="text-xs text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors"
          >
            {t.contact.ctaVcard}
          </a>
        </div>

        <p className="mt-8 text-sm text-white/60">{t.contact.location}</p>
      </div>
    </section>
  );
}
