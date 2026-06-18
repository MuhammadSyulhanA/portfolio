interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="text-sky-400 font-mono text-xs tracking-widest uppercase mb-2">{eyebrow}</p>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-100">{title}</h1>
      {subtitle && <p className="mt-3 text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
    </div>
  );
}

interface TimelineCardProps {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  accent?: string;
}

export function TimelineCard({
  role,
  organization,
  location,
  period,
  highlights,
}: TimelineCardProps) {
  return (
    <div className="relative pl-6 border-l border-slate-800 group">
      {/* Dot */}
      <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors duration-200" />

      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
          <h2 className="text-lg font-semibold text-slate-100">{role}</h2>
          <span className="text-xs font-mono text-sky-400 bg-sky-400/10 px-2 py-1 rounded whitespace-nowrap">
            {period}
          </span>
        </div>
        <p className="text-slate-400 text-sm mb-4">
          {organization} · {location}
        </p>
        <ul className="space-y-2">
          {highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
              <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-sky-400/60" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
