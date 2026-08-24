"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";
import type { TeachingIcon } from "@/lib/content";

function Icon({ name, className }: { name: TeachingIcon; className?: string }) {
  const props = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    className,
  };
  switch (name) {
    case "university":
      return (
        <svg {...props}>
          <path
            d="M12 3l9 5-9 5-9-5 9-5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M6 10.5V16c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5.5M21 8v6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "trainer":
      return (
        <svg {...props}>
          <rect
            x="3"
            y="4"
            width="18"
            height="12"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 20h8M12 16v4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7 12l2.5-3 2 2L16 7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "certificate":
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M9 13.5L8 21l4-2 4 2-1-7.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 9l1.7 1.7L14.5 7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "council":
      return (
        <svg {...props}>
          <circle cx="7" cy="8" r="2.3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="8" r="2.3" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M2.5 19c0-2.8 2-4.5 4.5-4.5S11.5 16.2 11.5 19M12.5 19c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function Teaching() {
  const { t } = useLanguage();
  const featured = t.teaching.items.filter((item) => item.featured);
  const rest = t.teaching.items.filter((item) => !item.featured);

  return (
    <Section id="teaching" title={t.teaching.title} intro={t.teaching.intro}>
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((item) => (
          <div
            key={item.role + item.institution}
            className="rounded-2xl border-2 border-primary/25 bg-gradient-to-br from-surface to-white p-7 hover:border-primary/60 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h3 className="font-bold text-primary-dark text-lg">
                    {item.role}
                  </h3>
                  <p className="text-sm text-foreground/60">{item.institution}</p>
                </div>
              </div>
            </div>
            <span className="mt-4 inline-block rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
              {item.period}
            </span>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
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

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {rest.map((item) => (
          <div
            key={item.role + item.institution}
            className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-primary-dark text-sm">
                  {item.role}
                </h3>
                <span className="text-[11px] font-semibold text-primary/80">
                  {item.period}
                </span>
              </div>
              <p className="text-xs text-foreground/60">{item.institution}</p>
              <p className="mt-1.5 text-xs text-foreground/70 leading-relaxed">
                {item.details[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
