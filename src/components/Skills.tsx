"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";

export function Skills() {
  const { t } = useLanguage();
  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-white p-5"
          >
            <h3 className="font-semibold text-primary-dark text-sm">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-primary/8 text-primary-dark text-xs font-medium px-2.5 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-bold text-primary-dark mb-5">
          {t.sectors.title}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.sectors.items.map((sector) => (
            <div
              key={sector.title}
              className="rounded-xl bg-surface border border-border p-5"
            >
              <h4 className="font-semibold text-primary-dark text-sm">
                {sector.title}
              </h4>
              <p className="mt-1.5 text-xs text-foreground/65 leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
