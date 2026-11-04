"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";
import type { ExperienceItem } from "@/lib/content";

function TimelineCard({ item, badge }: { item: ExperienceItem; badge: string }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/15" />
      <div className="absolute left-[7px] top-6 bottom-[-2rem] w-px bg-border last:hidden" />
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-bold text-primary-dark text-lg">{item.role}</h3>
          {item.deptHead && (
            <span className="rounded-full bg-primary-dark text-white text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1">
              {badge}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm font-medium text-foreground/70">
          {item.company} — {item.location}
        </p>
        <p className="text-sm text-primary font-semibold">{item.period}</p>
        <ul className="mt-4 space-y-2">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-foreground/75 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const { t } = useLanguage();
  return (
    <Section id="experience" title={t.experience.title} intro={t.experience.intro}>
      <div className="space-y-8">
        {t.experience.items.map((item) => (
          <TimelineCard
            key={item.role + item.period}
            item={item}
            badge={t.experience.deptHeadBadge}
          />
        ))}
      </div>

      <div className="mt-14">
        <h3 className="text-lg font-bold text-primary-dark mb-6">
          {t.experience.additionalTitle}
        </h3>
        <div className="grid gap-5 sm:grid-cols-3">
          {t.experience.additional.map((item) => (
            <div
              key={item.role + item.period}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-semibold text-primary-dark text-sm">
                  {item.role}
                </h4>
                {item.deptHead && (
                  <span className="rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                    {t.experience.deptHeadBadge}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs font-medium text-foreground/60">
                {item.company} — {item.location}
              </p>
              <p className="text-xs text-primary font-semibold">{item.period}</p>
              <p className="mt-3 text-xs text-foreground/70 leading-relaxed">
                {item.bullets[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
