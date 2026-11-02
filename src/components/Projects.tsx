"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import clsx from "clsx";
import { projects, type Project } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { GithubIcon } from "./Icons";
import { Emphasise } from "./Experience";
import { ChatPreview, ShortenerPreview, WashProPreview } from "./ProjectPreviews";

const previews: Record<Project["slug"], React.ComponentType> = {
  washpro: WashProPreview,
  chat: ChatPreview,
  shortener: ShortenerPreview,
};

function TiltFrame({ children }: { children: React.ReactNode }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  return (
    <motion.div
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const Preview = previews[project.slug];
  const flip = index % 2 === 1;
  return (
    <article
      aria-labelledby={`p-${project.slug}`}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <Reveal className={clsx(flip && "lg:order-2")}>
        <TiltFrame>
          <figure className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-2xl"
              style={{ background: "radial-gradient(closest-side, rgba(255,138,61,.35), transparent)" }}
            />
            <div className="card aspect-square overflow-hidden sm:aspect-[4/3] bg-gradient-to-b from-ink-850 to-ink-900">
              <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-2.5" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="ml-3 font-mono text-[10px] text-mute">{project.github.replace("https://", "")}</span>
              </div>
              <div className="h-[calc(100%-2.25rem)]">
                <Preview />
              </div>
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-mute/70">
              Illustrated preview · {project.tagline}
            </figcaption>
          </figure>
        </TiltFrame>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex items-center gap-3 font-mono text-xs text-mute">
          <span className="text-signal">0{index + 1}</span>
          <span className="h-px w-6 bg-white/15" aria-hidden />
          <span>{project.period}</span>
        </div>
        <h3 id={`p-${project.slug}`} className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-mute">{project.tagline}</p>

        <dl className="mt-7 space-y-6">
          <div>
            <dt className="eyebrow">Problem</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-bone/80">{project.problem}</dd>
          </div>
          <div>
            <dt className="eyebrow">Key features</dt>
            <dd>
              <ul className="mt-3 space-y-2.5">
                {project.features.map((f) => (
                  <li key={f} className="relative pl-5 text-[15px] leading-relaxed text-bone/75">
                    <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-signal/70" />
                    <Emphasise text={f} />
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">My contribution</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-bone/80">{project.contribution}</dd>
          </div>
        </dl>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-white/30 hover:bg-white/[0.04]"
          >
            <GithubIcon className="h-4 w-4" /> View code
            <ArrowUpRight className="h-3.5 w-3.5 text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bone" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-ink-950 transition hover:bg-white"
            >
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative overflow-x-clip border-t border-white/[0.06] py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="projects"
          index="04"
          eyebrow="Featured projects"
          title={
            <>
              Built for speed, <em className="text-bone/50">and for scale.</em>
            </>
          }
          lede="Three full-stack builds — each one centred on a real performance or real-time problem: caching, live messaging and fast redirects."
        />
        <div className="space-y-28 sm:space-y-36">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
