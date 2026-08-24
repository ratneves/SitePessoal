import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  compact?: boolean;
  className?: string;
}

export function Section({
  id,
  title,
  intro,
  children,
  tone = "light",
  compact = false,
  className = "",
}: SectionProps) {
  const dark = tone === "dark";
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${compact ? "py-10 sm:py-14" : "py-16 sm:py-24"} ${
        dark ? "bg-primary-dark text-white" : "bg-background text-foreground"
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className={`${compact ? "mb-6 sm:mb-8" : "mb-10 sm:mb-14"} max-w-3xl`}>
          <h2
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              dark ? "text-white" : "text-primary-dark"
            }`}
          >
            {title}
          </h2>
          <div
            className={`mt-3 h-1 w-16 rounded-full ${
              dark ? "bg-white/40" : "bg-primary"
            }`}
          />
          {intro && (
            <p
              className={`mt-5 text-base sm:text-lg leading-relaxed ${
                dark ? "text-white/80" : "text-foreground/70"
              }`}
            >
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
