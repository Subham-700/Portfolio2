"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { certifications, education, impact } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Spotlight } from "./Spotlight";

/** Counts up the numeric part of values like "~40%" or "10+" when visible. */
function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const target = m ? Number(m[2]) : 0;
  const [n, setN] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!m || !inView || reduce) return;
    const c = animate(0, target, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, target]);

  if (!m) return <span>{value}</span>;
  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden>
        {m[1]}
        {n}
        {m[3]}
      </span>
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="relative border-t border-line-subtle py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="achievements"
          index="05"
          eyebrow="Achievements"
          title={
            <>
              Measured <em className="text-bone/50">impact.</em>
            </>
          }
          lede="Outcomes from production work at Accedo Technologies, as recorded on my resume."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <Spotlight as="div" className="h-full p-6">
                <p className="font-serif text-6xl leading-none tracking-tight text-gradient">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-5 text-[15px] font-medium text-bone">{s.label}</p>
                <p className="mt-1 text-sm text-mute">{s.context}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="card flex h-full items-start gap-4 p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line/10 bg-ink-850">
                <GraduationCap className="h-[18px] w-[18px] text-signal" />
              </span>
              <div>
                <p className="font-medium">{education.degree}</p>
                <p className="text-sm text-mute">
                  {education.school} · {education.start} – {education.end}
                </p>
                <p className="mt-2 font-mono text-xs text-bone/70">{education.score}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.07}>
            <div className="card flex h-full items-start gap-4 p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line/10 bg-ink-850">
                <Award className="h-[18px] w-[18px] text-signal" />
              </span>
              <div>
                <p className="font-medium">Production-grade from year one</p>
                <p className="mt-1 text-sm leading-relaxed text-mute">
                  Delivered client-specific integrations and features for two OTT platforms within my first year as an engineer.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {certifications.length > 0 && (
          <Reveal className="mt-10">
            <h3 className="eyebrow mb-4">Certifications</h3>
            <ul className="divide-y divide-line-subtle border-y border-line-subtle">
              {certifications.map((c) => (
                <li key={c.title} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-medium">{c.title}</p>
                    <p className="text-sm text-mute">
                      {c.issuer}
                      {c.year ? ` · ${c.year}` : ""}
                    </p>
                  </div>
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-mute hover:text-bone" aria-label={`Verify ${c.title}`}>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
