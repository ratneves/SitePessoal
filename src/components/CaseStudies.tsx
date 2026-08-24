"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Section } from "./Section";
import type { CaseStudy } from "@/lib/content";

function FlowDiagram({
  stages,
  branch,
}: {
  stages: string[];
  branch?: { label: string; intoIndex: number };
}) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-3">
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center gap-1.5">
          <div className="min-w-[92px] rounded-lg bg-primary/8 border border-primary/20 px-3 py-2.5 text-center text-xs font-semibold text-primary-dark">
            {stage}
          </div>
          {i < stages.length - 1 && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0 text-primary/40"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {branch && branch.intoIndex === i && (
            <div className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-primary/40"
              >
                <path
                  d="M12 19V5M6 11l6-6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="rounded-lg border border-dashed border-primary/30 bg-surface px-3 py-2 text-center text-[11px] font-medium text-foreground/60">
                {branch.label}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function CaseStudyCard({
  item,
  modulesLabel,
  integrationLabel,
  detailsLabel,
  hideDetailsLabel,
}: {
  item: CaseStudy;
  modulesLabel: string;
  integrationLabel: string;
  detailsLabel: string;
  hideDetailsLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
      <div className="p-7 sm:p-9">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-dark">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-foreground/60">
          {item.client}
        </p>
        <p className="text-xs font-semibold text-primary uppercase tracking-wide">
          {item.period}
        </p>

        <p className="mt-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
          {item.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {item.scale.map((s) => (
            <span
              key={s}
              className="rounded-lg bg-primary/8 text-primary-dark text-sm font-bold px-3.5 py-2"
            >
              {s}
            </span>
          ))}
        </div>

        {item.results && (
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 rounded-xl bg-surface border border-border p-5 sm:grid-cols-3">
            {item.results.map((r) => (
              <div key={r.label}>
                <p className="text-xl sm:text-2xl font-extrabold text-primary">
                  {r.value}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-foreground/60">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <FlowDiagram stages={item.diagramStages} branch={item.diagramBranch} />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors cursor-pointer"
          aria-expanded={open}
        >
          {open ? hideDetailsLabel : detailsLabel}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-wide mb-2">
                  {modulesLabel}
                </h4>
                <ul className="space-y-1.5">
                  {item.modules.map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2 text-sm text-foreground/75"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-wide mb-2">
                  {integrationLabel}
                </h4>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  {item.integration}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-surface border border-border text-xs font-medium text-foreground/70 px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="bg-primary-dark px-7 sm:px-9 py-6">
        <ul className="space-y-2.5">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-white/90">
              <svg
                className="mt-0.5 shrink-0"
                width="18"
                height="18"
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
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CaseStudies() {
  const { t } = useLanguage();
  return (
    <Section id="projects" title={t.caseStudies.title} intro={t.caseStudies.intro}>
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {t.caseStudies.items.map((item) => (
          <CaseStudyCard
            key={item.title}
            item={item}
            modulesLabel={t.caseStudies.modulesLabel}
            integrationLabel={t.caseStudies.integrationLabel}
            detailsLabel={t.caseStudies.detailsLabel}
            hideDetailsLabel={t.caseStudies.hideDetailsLabel}
          />
        ))}
      </div>
    </Section>
  );
}
