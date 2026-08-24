"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";

export function Events() {
  const { t } = useLanguage();
  return (
    <Section id="events" title={t.events.title} intro={t.events.intro}>
      <div className="flex flex-wrap gap-4">
        {t.events.items.map((event) => (
          <div
            key={event.name}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface pl-4 pr-2 py-2"
          >
            <span className="text-sm font-semibold text-primary-dark">
              {event.name}
            </span>
            <div className="flex gap-1">
              {event.years.map((year) => (
                <span
                  key={year}
                  className="rounded-full bg-primary text-white text-xs font-bold px-2.5 py-1"
                >
                  {year}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
