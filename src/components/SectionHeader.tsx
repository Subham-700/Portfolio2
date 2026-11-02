import { Reveal } from "./Reveal";

type Props = { index: string; eyebrow: string; title: React.ReactNode; lede?: React.ReactNode; id: string };

export function SectionHeader({ index, eyebrow, title, lede, id }: Props) {
  return (
    <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-end">
      <div>
        <p className="eyebrow flex items-center gap-3">
          <span className="text-signal">{index}</span>
          <span className="h-px w-8 bg-white/15" aria-hidden />
          {eyebrow}
        </p>
        <h2 id={`${id}-title`} className="mt-4 font-serif text-[2.6rem] leading-[1.02] tracking-[-0.01em] text-bone sm:text-6xl">
          {title}
        </h2>
      </div>
      {lede ? <p className="max-w-md text-[15px] leading-relaxed text-mute md:justify-self-end">{lede}</p> : null}
    </Reveal>
  );
}
