"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";

export function Projects() {
  const { t } = useLanguage();
  return (
    <Section id="projects" title={t.projects.title} tone="dark">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project) => (
          <div
            key={project.name}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
          >
            <h3 className="font-bold text-white">{project.name}</h3>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
