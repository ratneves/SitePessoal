"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";

export function Teaching() {
  const { t } = useLanguage();
  return (
    <Section id="teaching" title={t.teaching.title} intro={t.teaching.intro}>
      <div className="grid gap-6 sm:grid-cols-2">
        {t.teaching.items.map((item) => (
          <div
            key={item.role + item.institution}
            className="rounded-2xl border border-border bg-surface p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-primary-dark">{item.role}</h3>
                <p className="text-sm text-foreground/60">{item.institution}</p>
              </div>
              <span className="shrink-0 rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1 whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <ul className="mt-4 space-y-1.5">
              {item.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-2 text-sm text-foreground/75"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
