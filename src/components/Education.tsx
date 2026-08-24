"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";

export function Education() {
  const { t } = useLanguage();
  return (
    <Section id="education" title={t.education.title}>
      <div className="grid gap-5 sm:grid-cols-2">
        {t.education.items.map((edu) => (
          <div
            key={edu.title}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-wide">
              {edu.period}
            </p>
            <h3 className="mt-1 font-bold text-primary-dark leading-snug">
              {edu.title}
            </h3>
            <p className="mt-1 text-sm text-foreground/65">{edu.institution}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="text-lg font-bold text-primary-dark mb-4">
            {t.languages.title}
          </h3>
          <ul className="space-y-2">
            {t.languages.items.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between rounded-lg bg-surface border border-border px-4 py-2.5 text-sm"
              >
                <span className="font-medium text-foreground/80">{lang.name}</span>
                <span className="text-primary font-semibold">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary-dark mb-4">
            {t.extra.title}
          </h3>
          <ul className="space-y-2">
            {t.extra.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
