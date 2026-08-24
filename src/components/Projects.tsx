"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";

export function Projects() {
  const { t } = useLanguage();
  return (
    <Section id="other-projects" title={t.projects.title} tone="dark">
      <div className="grid gap-6 sm:grid-cols-2">
        {t.projects.items.map((project) => (
          <div
            key={project.name}
            className="group rounded-2xl bg-white/5 border border-white/15 p-7 hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <span className="inline-block rounded-full bg-white/15 text-white/85 text-[11px] font-semibold uppercase tracking-wide px-3 py-1">
              {project.tag}
            </span>
            <h3 className="mt-4 font-bold text-white text-lg leading-snug">
              {project.name}
            </h3>
            <p className="mt-2.5 text-sm text-white/75 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
