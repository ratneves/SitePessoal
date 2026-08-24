"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Stats() {
  const { t } = useLanguage();
  return (
    <div className="relative z-10 -mt-10 sm:-mt-16 px-6">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 grid grid-cols-2 sm:grid-cols-4 divide-y divide-x divide-border sm:divide-y-0 overflow-hidden">
        {t.stats.map((stat) => (
          <div
            key={stat.label}
            className="px-4 py-7 sm:py-9 text-center"
          >
            <p className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
              {stat.value}
            </p>
            <p className="mt-2 text-xs sm:text-sm font-semibold text-foreground/60 uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
