"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Stats() {
  const { t } = useLanguage();
  return (
    <div className="bg-surface border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {t.stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="text-3xl sm:text-4xl font-extrabold text-primary">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-foreground/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
