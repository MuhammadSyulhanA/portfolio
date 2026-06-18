import { skills } from "../data/portfolio";
import { SectionHeader } from "../components/ui";

const categoryIcons: Record<string, string> = {
  "iOS / Mobile": "📱",
  "Web / Frontend": "🌐",
  "Backend / Tools": "⚙️",
  "Analytics / Growth": "📊",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Technical Stack"
          title="Skills"
          subtitle="Technologies and tools I've worked with professionally across mobile, web, and product domains."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-400/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{categoryIcons[group.category] ?? "🔧"}</span>
                <h2 className="text-slate-100 font-semibold">{group.category}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700 hover:bg-sky-400/10 hover:text-sky-300 hover:border-sky-400/40 transition-all duration-150 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Overall summary */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { count: "13+", label: "iOS Frameworks" },
            { count: "8+", label: "Frontend Tools" },
            { count: "7+", label: "Backend & DevOps" },
            { count: "3", label: "Analytics Platforms" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4"
            >
              <p className="text-xl font-bold text-sky-400">{item.count}</p>
              <p className="text-xs text-slate-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
