import { experiences } from "../data/portfolio";
import { SectionHeader, TimelineCard } from "../components/ui";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Work History"
          title="Experience"
          subtitle="Professional roles where I shipped real products and collaborated with cross-functional teams."
        />

        <div>
          {experiences.map((exp, i) => (
            <TimelineCard
              key={i}
              role={exp.role}
              organization={exp.company}
              location={exp.location}
              period={exp.period}
              highlights={exp.highlights}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
