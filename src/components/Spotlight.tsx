"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import clsx from "clsx";

/** Card with a soft cursor-following glow. */
export function Spotlight({ className, children, as = "div" }: { className?: string; children: React.ReactNode; as?: "div" | "article" | "li" }) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(255,138,61,0.10), transparent 70%)`;
  const Comp = motion[as];
  return (
    <Comp
      onPointerMove={(e: React.PointerEvent<HTMLElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onPointerLeave={() => {
        x.set(-400);
        y.set(-400);
      }}
      className={clsx("card group relative overflow-hidden", className)}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: bg }} />
      <div className="relative h-full">{children}</div>
    </Comp>
  );
}
