"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Download, Mail, Phone } from "lucide-react";
import { profile, site } from "@/data/profile";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { href: profile.linkedin, label: "LinkedIn", handle: `in/${profile.linkedinHandle}`, Icon: LinkedinIcon },
    { href: profile.github, label: "GitHub", handle: `@${profile.githubHandle}`, Icon: GithubIcon },
    { href: profile.phoneHref, label: "Phone", handle: profile.phone, Icon: Phone },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line-subtle py-24 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-64 left-1/2 h-[560px] w-[1000px] -translate-x-1/2 rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #ff8a3d, transparent)" }}
      />
      <div className="shell relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-signal">06</span>
            <span className="h-px w-8 bg-line/15" aria-hidden />
            Contact
          </p>
          <h2 id="contact-title" className="mt-5 max-w-4xl font-serif text-[3rem] leading-[0.98] tracking-[-0.02em] sm:text-7xl lg:text-[6rem]">
            Hiring a full-stack developer? <em className="text-gradient">Let&apos;s talk.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-bone/70">
            I&apos;m open to full-stack and frontend-heavy roles where TypeScript, React/Next.js and Node.js matter. The
            fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Subham Gupta")}`}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-signal px-7 py-4 text-[15px] font-medium text-ink-950 transition hover:bg-signal-soft"
          >
            <Mail className="h-4 w-4" /> Email me
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-line/15 px-6 py-4 font-mono text-[13px] text-bone/85 transition hover:border-line/30"
            aria-label={`Copy email address ${profile.email}`}
          >
            <span className="truncate">{profile.email}</span>
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span key="ok" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                  <Check className="h-4 w-4 text-emerald-400" />
                </motion.span>
              ) : (
                <motion.span key="cp" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                  <Copy className="h-4 w-4 text-mute" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <span role="status" className="sr-only">
            {copied ? "Email address copied" : ""}
          </span>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line-subtle bg-line-subtle sm:grid-cols-2 lg:grid-cols-4">
            {links.map(({ href, label, handle, Icon }) => (
              <li key={label} className="bg-ink-950">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between gap-4 p-6 transition hover:bg-ink-900"
                >
                  <span>
                    <span className="eyebrow block">{label}</span>
                    <span className="mt-2 block break-all text-[15px] text-bone/90">{handle}</span>
                  </span>
                  <Icon className="h-5 w-5 shrink-0 text-mute transition group-hover:text-signal" />
                </a>
              </li>
            ))}
            <li className="bg-ink-950">
              <a href={site.resume} download className="group flex h-full items-center justify-between gap-4 p-6 transition hover:bg-ink-900">
                <span>
                  <span className="eyebrow block">Resume</span>
                  <span className="mt-2 block text-[15px] text-bone/90">Download PDF</span>
                </span>
                <Download className="h-5 w-5 shrink-0 text-mute transition group-hover:text-signal" />
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
