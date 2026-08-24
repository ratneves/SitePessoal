"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";

export function Leadership() {
  const { t } = useLanguage();
  return (
    <Section
      id="leadership"
      title={t.leadership.title}
      intro={t.leadership.intro}
      tone="dark"
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {t.leadership.skills.map((skill) => (
          <li
            key={skill}
            className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4"
          >
            <svg
              className="mt-0.5 shrink-0"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.15" />
              <path
                d="M8 12.5l2.5 2.5L16 9"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm sm:text-base text-white/90 leading-relaxed">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
