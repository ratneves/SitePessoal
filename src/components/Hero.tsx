"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-primary-dark to-primary text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
        <div>
          <p className="text-sm font-semibold tracking-widest text-white/70 uppercase">
            {t.hero.kicker}
          </p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
            {t.hero.name}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {t.hero.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-sm font-medium"
              >
                {role}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-xl text-lg text-white/85 leading-relaxed">
            {t.hero.tagline}
          </p>
          <p className="mt-3 max-w-xl text-sm text-white/60">
            {t.hero.positioning}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white text-primary-dark px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href="#experience"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              {t.hero.ctaCv}
            </a>
            <a
              href={`${basePath}/cv/CV-Rui-Neves.pdf`}
              download
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t.hero.ctaDownload}
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-white/70">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {t.hero.location}
          </p>
        </div>

        <div className="order-first lg:order-last justify-self-center lg:justify-self-end">
          <div className="relative h-40 w-40 sm:h-72 sm:w-72 rounded-full ring-4 ring-white/25 ring-offset-4 ring-offset-primary-dark overflow-hidden shadow-2xl">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/rui-neves.jpg`}
              alt="Rui Neves"
              fill
              sizes="(min-width: 640px) 288px, 224px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
