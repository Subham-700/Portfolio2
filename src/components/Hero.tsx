"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { profile, site } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Ambient backdrop */}
      <div aria-hidden className="backdrop-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #ff8a3d, transparent)" }}
      />

      <div className="shell relative grid gap-14 pb-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10 lg:pb-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-xs text-signal-soft">
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-signal" />
              Open to full-stack roles
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-mute">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
          </motion.div>

          <motion.p variants={item} className="mt-8 font-mono text-sm text-mute">
            {profile.name} <span className="text-white/20">/</span> {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 font-serif text-[3.1rem] leading-[0.98] tracking-[-0.02em] sm:text-7xl lg:text-[5.4rem]"
          >
            I build the systems behind <em className="text-gradient pr-1">streaming</em> platforms.
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-[17px] leading-relaxed text-bone/70">
            Full-stack developer with 1+ year of production experience at{" "}
            <span className="text-bone">Accedo Technologies</span>, shipping CMS and audience-management systems for{" "}
            <span className="text-bone">Tata Play Binge</span> and <span className="text-bone">SBS CTV</span> — with
            TypeScript, React, Next.js, Node.js and MongoDB.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 text-sm font-medium text-ink-950 transition hover:bg-white"
            >
              View projects
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium transition hover:border-signal/60 hover:text-signal-soft"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-10 flex items-center gap-2" aria-label="Social links">
            {[
              { href: profile.github, label: "GitHub", Icon: GithubIcon },
              { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-mute transition hover:-translate-y-0.5 hover:border-white/25 hover:text-bone"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          style={{ transformPerspective: 1200 }}
        >
          <ApiCard />
        </motion.div>
      </div>

      <ClientStrip />
    </section>
  );
}

/* ---------- "API response" profile card ---------- */

const request = "GET /api/engineers/subham-gupta";

type Tok = { t: string; c?: string };
const K = "text-[#9ecbff]"; // keys
const S = "text-[#ffd8a8]"; // strings
const N = "text-signal"; // numbers / literals
const P = "text-white/35"; // punctuation

const lines: Tok[][] = [
  [{ t: "{", c: P }],
  [{ t: '  "role"', c: K }, { t: ": ", c: P }, { t: '"Full-Stack Developer"', c: S }, { t: ",", c: P }],
  [{ t: '  "experience"', c: K }, { t: ": ", c: P }, { t: '"1+ yr production"', c: S }, { t: ",", c: P }],
  [{ t: '  "lastShipped"', c: K }, { t: ": ", c: P }, { t: "[", c: P }],
  [{ t: '    "Tata Play Binge"', c: S }, { t: ", ", c: P }, { t: '"SBS CTV"', c: S }],
  [{ t: "  ],", c: P }],
  [{ t: '  "stack"', c: K }, { t: ": ", c: P }, { t: "[", c: P }],
  [{ t: '    "TypeScript"', c: S }, { t: ", ", c: P }, { t: '"Next.js"', c: S }, { t: ",", c: P }],
  [{ t: '    "Node.js"', c: S }, { t: ", ", c: P }, { t: '"MongoDB"', c: S }],
  [{ t: "  ],", c: P }],
  [{ t: '  "secures"', c: K }, { t: ": ", c: P }, { t: '"JWT + RBAC"', c: S }, { t: ",", c: P }],
  [{ t: '  "available"', c: K }, { t: ": ", c: P }, { t: "true", c: N }],
  [{ t: "}", c: P }],
];

function ApiCard() {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? request.length : 0);

  useEffect(() => {
    if (reduce) return setTyped(request.length);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setTyped(i);
      if (i < request.length) timer = setTimeout(tick, 38);
    };
    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, [reduce]);

  const done = typed >= request.length;

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-px rounded-[22px] opacity-70"
        style={{ background: "linear-gradient(140deg, rgba(255,138,61,.45), rgba(255,255,255,.04) 40%, rgba(255,255,255,.02) 70%, rgba(255,209,102,.25))" }}
      />
      <figure
        className="relative overflow-hidden rounded-[21px] bg-ink-900 font-mono text-[12.5px] leading-[1.75] sm:text-[13px]"
        aria-label="Profile summary formatted as an API response"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[11px] text-mute">profile.json</span>
        </div>

        <div className="px-5 pb-6 pt-5">
          <p className="text-bone/90">
            <span className="text-signal">$ </span>
            {request.slice(0, typed)}
            {!done && <span className="ml-0.5 inline-block h-4 w-2 translate-y-[3px] animate-blink bg-signal" />}
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={done ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            className="mt-1 text-[11.5px] text-emerald-400/80"
          >
            200 OK <span className="text-mute">· application/json</span>
          </motion.p>

          <motion.pre
            initial="hidden"
            animate={done ? "show" : "hidden"}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: 0.15 } } }}
            className="mt-3 overflow-x-auto whitespace-pre"
          >
            {lines.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                variants={{ hidden: { opacity: 0, x: -6 }, show: { opacity: 1, x: 0, transition: { duration: 0.35 } } }}
              >
                {line.map((tok, j) => (
                  <span key={j} className={tok.c}>
                    {tok.t}
                  </span>
                ))}
              </motion.span>
            ))}
          </motion.pre>
        </div>
      </figure>
    </div>
  );
}

/* ---------- Clients marquee-style strip ---------- */

function ClientStrip() {
  const items = ["Tata Play Binge", "SBS CTV", "Accedo Technologies", "AccedoAssemble", "Magnaquest integration"];
  return (
    <div className="relative border-y border-white/[0.06] bg-ink-900/40">
      <div className="shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-8">
        <p className="eyebrow shrink-0">Production work on</p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {items.map((c, i) => (
            <li key={c} className="flex items-center gap-6 font-serif text-xl italic text-bone/60">
              {c}
              {i < items.length - 1 && <span aria-hidden className="h-1 w-1 rounded-full bg-white/20" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
