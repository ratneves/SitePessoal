"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";

export function About() {
  const { t } = useLanguage();
  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-3xl space-y-5">
        {t.about.paragraphs.map((p, i) => (
          <p key={i} className="text-base sm:text-lg leading-relaxed text-foreground/80">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
