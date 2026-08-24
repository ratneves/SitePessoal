"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <Section id="testimonials" title={t.testimonials.title} compact>
      <div className="grid gap-6 sm:grid-cols-3">
        {t.testimonials.items.map((item) => (
          <figure
            key={item.name}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6"
          >
            <svg
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              className="text-primary/30 mb-3"
            >
              <path
                d="M11.5 0C5.2 2.2 0 8 0 14.6 0 18.8 3 22 7 22s7-3.2 7-7.4c0-3.6-2.4-6.4-5.8-7.2C9 5.4 10.4 3 13.5 1.4L11.5 0Zm14 0c-6.3 2.2-11.5 8-11.5 14.6 0 4.2 3 7.4 7 7.4s7-3.2 7-7.4c0-3.6-2.4-6.4-5.8-7.2C23 5.4 24.4 3 27.5 1.4L25.5 0Z"
                fill="currentColor"
              />
            </svg>
            <blockquote className="flex-1 text-sm text-foreground/80 leading-relaxed">
              {item.quote}
            </blockquote>
            <figcaption className="mt-4">
              <p className="text-sm font-bold text-primary-dark">{item.name}</p>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                {item.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
