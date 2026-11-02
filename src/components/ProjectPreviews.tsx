"use client";

import { motion } from "framer-motion";
import { Check, CornerDownRight, Database, Link2, Zap } from "lucide-react";

/*
 * Illustrative, code-drawn previews of each project's core idea.
 * They are not screenshots — swap in real screenshots via <Image> when available.
 */

const loop = { repeat: Infinity, ease: "easeInOut" as const };

export function WashProPreview() {
  const stages = ["Received", "Washing", "Ironing", "Ready"];
  const orders = [
    { id: "#A-12", stage: 0, price: "₹240" },
    { id: "#A-09", stage: 1, price: "₹410" },
    { id: "#A-07", stage: 2, price: "₹180" },
    { id: "#A-03", stage: 3, price: "₹320" },
    { id: "#A-11", stage: 1, price: "₹150" },
  ];
  return (
    <div className="flex h-full flex-col p-4 font-mono text-[10px] sm:p-5 sm:text-[11px]">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-bone/80">washpro / orders</span>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300">
          <Zap className="h-3 w-3" /> redis cache
        </span>
      </div>
      <div className="grid flex-1 grid-cols-4 gap-1.5 sm:gap-2">
        {stages.map((s, si) => (
          <div key={s} className="flex min-w-0 flex-col gap-2 rounded-lg border border-line-subtle bg-ink-950/60 p-1.5 sm:p-2">
            <span className="truncate text-[9px] uppercase tracking-wider text-mute sm:text-[10px]">{s}</span>
            {orders
              .filter((o) => o.stage === si)
              .map((o, k) => (
                <motion.div
                  key={o.id}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * si + k * 0.1 }}
                  className="rounded-md border border-line-subtle bg-ink-800 p-1.5 sm:p-2"
                >
                  <div className="flex justify-between text-bone/90">
                    <span>{o.id}</span>
                    {si === 3 && <Check className="hidden h-3 w-3 shrink-0 text-emerald-400 sm:block" />}
                  </div>
                  <div className="mt-1 flex justify-between text-mute">
                    <span className="hidden sm:inline">R{si + 2}</span>
                    <span className="text-signal-soft">{o.price}</span>
                  </div>
                </motion.div>
              ))}
            {si === 0 && (
              <motion.div
                aria-hidden
                animate={{ x: ["0%", "0%", "105%"], opacity: [0, 1, 0] }}
                transition={{ duration: 3.2, ...loop, repeatDelay: 0.8 }}
                className="rounded-md border border-dashed border-signal/50 bg-signal/10 p-1.5 text-signal-soft sm:p-2"
              >
                new order
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChatPreview() {
  return (
    <div className="flex h-full flex-col p-5 text-[12.5px]">
      <div className="mb-4 flex items-center gap-3 border-b border-line-subtle pb-3">
        <div className="relative">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-700 text-xs text-bone">AK</span>
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.8, ...loop }}
            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-ink-900 bg-emerald-400"
          />
        </div>
        <div>
          <p className="text-bone/90">Group · Talk-A-Tive</p>
          <p className="font-mono text-[10px] text-emerald-300/80">online · socket connected</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-2">
        {[
          { me: false, t: "Is the build out?" },
          { me: true, t: "Deploying now 🚀" },
          { me: false, t: "Nice, seeing it live." },
        ].map((m, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.35 }}
            className={
              m.me
                ? "max-w-[75%] self-end rounded-2xl rounded-br-md bg-signal px-3.5 py-2 text-ink-950"
                : "max-w-[75%] self-start rounded-2xl rounded-bl-md bg-ink-700 px-3.5 py-2 text-bone/90"
            }
          >
            {m.t}
          </motion.p>
        ))}
        <div className="flex w-14 items-center justify-center gap-1 self-start rounded-2xl rounded-bl-md bg-ink-700 px-3 py-3" aria-hidden>
          {[0, 1, 2].map((d) => (
            <motion.span
              key={d}
              animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 0.9, ...loop, delay: d * 0.15 }}
              className="h-1.5 w-1.5 rounded-full bg-bone/70"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ShortenerPreview() {
  return (
    <div className="flex h-full flex-col justify-center gap-4 p-5 font-mono text-[11.5px]">
      <div className="flex items-center gap-2 rounded-lg border border-line-subtle bg-ink-950/60 px-3 py-2.5">
        <Link2 className="h-3.5 w-3.5 text-signal" />
        <span className="text-bone/90">sho.rt/</span>
        <span className="text-signal-soft">x7Kp2</span>
      </div>
      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/[0.07] p-3">
          <div className="flex items-center gap-1.5 text-emerald-300">
            <Zap className="h-3.5 w-3.5" /> Redis
          </div>
          <p className="mt-1 text-[10px] text-mute">cache hit</p>
        </div>
        <div className="relative h-px w-10 bg-line/15">
          <motion.span
            aria-hidden
            animate={{ x: [0, 36] }}
            transition={{ duration: 1, ...loop, repeatDelay: 0.4 }}
            className="absolute -top-[3px] left-0 h-[7px] w-[7px] rounded-full bg-signal shadow-[0_0_12px_#ff8a3d]"
          />
        </div>
        <div className="rounded-lg border border-line-subtle bg-ink-800 p-3">
          <div className="flex items-center gap-1.5 text-bone/80">
            <Database className="h-3.5 w-3.5" /> MongoDB
          </div>
          <p className="mt-1 text-[10px] text-mute">on miss</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-mute">
        <CornerDownRight className="h-3.5 w-3.5 text-signal" />
        <span>301 → original URL</span>
      </div>
    </div>
  );
}
