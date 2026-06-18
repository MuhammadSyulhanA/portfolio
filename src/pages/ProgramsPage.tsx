import { programs } from "../data/portfolio";
import { SectionHeader, TimelineCard } from "../components/ui";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Certifications & Programs"
          title="Professional Programs"
          subtitle="Competitive incubation programs where I developed products from zero to launch alongside Apple mentors and multidisciplinary teams."
        />

        <div>
          {programs.map((prog, i) => (
            <TimelineCard
              key={i}
              role={prog.role}
              organization={prog.organization}
              location={prog.location}
              period={prog.period}
              highlights={prog.highlights}
            />
          ))}
        </div>

        {/* Apple badge note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
          <span className="text-2xl">🍎</span>
          <div>
            <p className="text-slate-300 font-medium text-sm">Apple Developer Academy Alumni</p>
            <p className="text-slate-500 text-xs mt-1">
              Completed two Apple Developer Academy programs — the foundational program at Infinite
              Learning (Batam) and the advanced Catalyst incubation program (Jakarta). Published Folka
              to the App Store as part of both programs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
