import { education, publication, additional } from "../data/portfolio";
import { SectionHeader } from "../components/ui";
import { ExternalLink, BookOpen, Award, GraduationCap } from "lucide-react";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Academic Background"
          title="Education"
          subtitle="Formal education, published research, and academic contributions."
        />

        {/* Degree */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6 hover:border-sky-400/40 transition-colors duration-300">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-sky-400/10 text-sky-400">
              <GraduationCap size={22} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                <h2 className="text-slate-100 font-semibold">{education.institution}</h2>
                <span className="text-xs font-mono text-sky-400 bg-sky-400/10 px-2 py-1 rounded whitespace-nowrap">
                  {education.period}
                </span>
              </div>
              <p className="text-slate-400 text-sm">{education.location}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="text-sm text-slate-300">{education.degree}</span>
                <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                  <Award size={11} /> GPA {education.gpa}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Publication */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6 hover:border-sky-400/40 transition-colors duration-300">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-sky-400/10 text-sky-400">
              <BookOpen size={22} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-sky-400 font-mono tracking-widest uppercase mb-2">
                Research Publication
              </p>
              <h2 className="text-slate-100 font-semibold mb-1">{publication.title}</h2>
              <p className="text-slate-400 text-sm mb-4">{publication.event}</p>
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:text-sky-300 transition-colors"
              >
                View paper <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Teaching Assistant */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-400/40 transition-colors duration-300">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-sky-400/10 text-sky-400">
              <BookOpen size={22} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                <h2 className="text-slate-100 font-semibold">{additional.role}</h2>
                <span className="text-xs font-mono text-sky-400 bg-sky-400/10 px-2 py-1 rounded whitespace-nowrap">
                  {additional.period}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-4">{additional.organization}</p>
              <ul className="space-y-2">
                {additional.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-sky-400/60" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
