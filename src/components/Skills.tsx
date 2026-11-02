"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Boxes, Cloud, Code2, Database, FlaskConical, Server, Wrench } from "lucide-react";
import { skillGroups } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";
import { Spotlight } from "./Spotlight";
import { Reveal } from "./Reveal";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: Boxes,
  backend: Server,
  data: Database,
  testing: FlaskConical,
  cloud: Cloud,
  languages: Code2,
  tools: Wrench,
};

// Bento spans for large screens
const spans: Record<string, string> = {
  frontend: "lg:col-span-3",
  backend: "lg:col-span-3",
  data: "lg:col-span-2",
  testing: "lg:col-span-2",
  languages: "lg:col-span-2",
  cloud: "lg:col-span-4",
  tools: "lg:col-span-2",
};

export function Skills() {
  const [prodOnly, setProdOnly] = useState(false);

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative border-t border-line-subtle py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="skills"
          index="02"
          eyebrow="Technical skills"
          title={
            <>
              A full-stack toolkit, <em className="text-bone/50">TypeScript-first.</em>
            </>
          }
          lede="Grouped by where they sit in the stack. Highlighted skills are ones I've used in production at Accedo."
        />

        <Reveal className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-mute">
            <span className="h-2 w-2 rounded-full bg-signal" /> Used in production
            <span className="ml-3 h-2 w-2 rounded-full border border-line/25" /> Projects &amp; training
          </div>
          <div role="group" aria-label="Filter skills" className="flex rounded-full border border-line/10 p-1 text-xs">
            {[
              { v: false, l: "All skills" },
              { v: true, l: "Production only" },
            ].map((o) => (
              <button
                key={o.l}
                type="button"
                aria-pressed={prodOnly === o.v}
                onClick={() => setProdOnly(o.v)}
                className={clsx(
                  "relative rounded-full px-3.5 py-1.5 transition-colors",
                  prodOnly === o.v ? "text-ink-950 font-medium" : "text-mute hover:text-bone",
                )}
              >
                {prodOnly === o.v && (
                  <motion.span layoutId="skill-filter" className="absolute inset-0 rounded-full bg-bone" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                )}
                <span className="relative">{o.l}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.id] ?? Boxes;
            const visible = prodOnly ? g.skills.filter((s) => s.prod) : g.skills;
            return (
              <Reveal key={g.id} delay={(i % 3) * 0.06} className={spans[g.id]}>
                <Spotlight className="h-full p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{g.title}</h3>
                      <p className="mt-1 text-sm text-mute">{g.caption}</p>
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-line/10 bg-ink-850 text-bone/70 transition group-hover:text-signal">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    <AnimatePresence mode="popLayout" initial={false}>
                      {visible.length === 0 ? (
                        <motion.li key="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs text-mute/70">
                          Projects &amp; training only
                        </motion.li>
                      ) : (
                        visible.map((s) => (
                          <motion.li
                            layout
                            key={s.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className={clsx("chip", s.prod && "border-signal/35 bg-signal/[0.08] text-bone")}
                          >
                            {s.prod && <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />}
                            {s.name}
                            {s.prod && <span className="sr-only"> (used in production)</span>}
                          </motion.li>
                        ))
                      )}
                    </AnimatePresence>
                  </ul>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
