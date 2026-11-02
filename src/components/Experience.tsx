"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { education, experience } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

/** Emphasise numbers like "~40%", "10+", "30%" inside a sentence. */
export function Emphasise({ text }: { text: string }) {
  const parts = text.split(/(~?\d+\+?%?(?:ms)?)/g);
  return (
    <>
      {parts.map((p, i) =>
        /^~?\d+\+?%?(ms)?$/.test(p) ? (
          <strong key={i} className="font-medium text-signal-soft">
            {p}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative border-t border-white/[0.06] py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="experience"
          index="03"
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve <em className="text-bone/50">shipped.</em>
            </>
          }
          lede="Production engineering on OTT platforms, backed by an intensive MERN programme and a B.Tech."
        />

        <div ref={ref} className="relative">
          {/* timeline rail */}
          <div aria-hidden className="absolute bottom-2 left-[11px] top-2 w-px bg-white/[0.08] md:left-[calc(15rem+11px)]" />
          <motion.div
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-gradient-to-b from-signal-glow via-signal to-transparent md:left-[calc(15rem+11px)]"
          />

          <ol className="space-y-16">
            {experience.map((job) => (
              <li key={job.company} className="relative grid gap-4 pl-10 md:grid-cols-[15rem_1fr] md:gap-0 md:pl-0">
                <Reveal className="md:pr-10 md:text-right">
                  <p className="font-mono text-xs text-signal">
                    {job.start} — {job.end}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-mute md:justify-end">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </p>
                </Reveal>

                <span aria-hidden className="absolute left-0 top-0.5 grid h-6 w-6 place-items-center rounded-full border border-signal/40 bg-ink-950 md:left-[15rem]">
                  <Briefcase className="h-3 w-3 text-signal" />
                </span>

                <Reveal delay={0.08} className="md:pl-12">
                  <h3 className="text-2xl font-medium tracking-tight">{job.role}</h3>
                  <p className="mt-1 font-serif text-xl italic text-bone/60">{job.company}</p>
                  <p className="mt-3 text-sm text-mute">{job.summary}</p>

                  {job.clients && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="eyebrow mr-1">Clients</span>
                      {job.clients.map((c) => (
                        <span key={c} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-xs text-bone/85">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="mt-6 space-y-3.5">
                    {job.points.map((pt) => (
                      <li key={pt} className="relative pl-5 text-[15px] leading-relaxed text-bone/75">
                        <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-signal/70" />
                        <Emphasise text={pt} />
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                    {job.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}

            <li className="relative grid gap-4 pl-10 md:grid-cols-[15rem_1fr] md:gap-0 md:pl-0">
              <Reveal className="md:pr-10 md:text-right">
                <p className="font-mono text-xs text-signal">
                  {education.start} — {education.end}
                </p>
                <p className="mt-2 text-xs text-mute">Education</p>
              </Reveal>
              <span aria-hidden className="absolute left-0 top-0.5 grid h-6 w-6 place-items-center rounded-full border border-white/20 bg-ink-950 md:left-[15rem]">
                <GraduationCap className="h-3 w-3 text-bone/70" />
              </span>
              <Reveal delay={0.08} className="md:pl-12">
                <h3 className="text-2xl font-medium tracking-tight">{education.degree}</h3>
                <p className="mt-1 font-serif text-xl italic text-bone/60">{education.school}</p>
                <p className="mt-3 font-mono text-xs text-mute">{education.score}</p>
              </Reveal>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
