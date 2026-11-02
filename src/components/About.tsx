import { about } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="about"
          index="01"
          eyebrow="About"
          title={
            <>
              From content pipelines <br className="hidden sm:block" />
              <em className="text-bone/50">to the screen.</em>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className={i === 0 ? "text-xl leading-relaxed text-bone/85 sm:text-[22px]" : "text-[16px] leading-relaxed text-mute"}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <h3 className="eyebrow mb-5">What I bring to a team</h3>
            </Reveal>
            <ol className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {about.brings.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.06}>
                  <li className="group grid grid-cols-[2.5rem_1fr] gap-2 py-5">
                    <span className="font-mono text-xs text-signal/80 transition group-hover:text-signal">0{i + 1}</span>
                    <div>
                      <p className="font-medium text-bone">{b.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-mute">{b.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
