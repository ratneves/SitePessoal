"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const COUNTER_URL = "https://abacus.jasoncameron.dev";
const COUNTER_PATH = "raneves.pt/visitas";

function useVisitCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    let counted = false;
    try {
      counted = sessionStorage.getItem("visit-counted") === "1";
    } catch {}

    // Conta uma vez por sessão; fora disso só lê. Em localhost só lê.
    const action = counted || isLocal ? "get" : "hit";
    let cancelled = false;

    // O serviço gratuito falha de vez em quando: tenta até 3 vezes.
    (async () => {
      for (let attempt = 0; attempt < 3 && !cancelled; attempt++) {
        try {
          const r = await fetch(`${COUNTER_URL}/${action}/${COUNTER_PATH}`);
          if (r.ok) {
            const d = await r.json();
            if (typeof d.value === "number") {
              if (!cancelled) setCount(d.value);
              if (action === "hit") {
                try {
                  sessionStorage.setItem("visit-counted", "1");
                } catch {}
              }
              return;
            }
          }
        } catch {}
        await new Promise((res) => setTimeout(res, 800 * (attempt + 1)));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return count;
}

export function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();
  const count = useVisitCount();
  return (
    <footer className="bg-white border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-foreground/50">
        <span>Rui Neves — {year}</span>
        {count !== null && (
          <span>
            {t.footer.visits}: {count.toLocaleString(locale === "pt" ? "pt-PT" : "en-GB")}
          </span>
        )}
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
}
