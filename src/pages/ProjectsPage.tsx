import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { SectionHeader } from "../components/ui";
import type { Project, Platform } from "../data/projects";

const platforms = ["All", "iOS", "Web", "Flutter", "Mobile"];
const statusColors: Record<Project["status"], string> = {
  Live: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  "In Development": "bg-amber-400/10 text-amber-400 border-amber-400/20",
  Archived: "bg-slate-700 text-slate-400 border-slate-600",
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((project) =>
        project.platforms.includes(filter as Platform)
      );

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects"
          subtitle="Apps, platforms, and research I've shipped — from the App Store to enterprise web systems."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {platforms.map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                filter === p
                  ? "bg-sky-400/10 text-sky-400 border-sky-400/40"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-300"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-400/5 flex flex-col"
            >
              {/* Cover image */}
              <div className="relative h-44 overflow-hidden bg-slate-800">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Platform badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {project.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-950/80 text-slate-300 backdrop-blur-sm border border-slate-700"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                
                {/* Status badge */}
                <span
                  className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-medium border backdrop-blur-sm ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="text-slate-100 font-semibold text-base group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-xs font-mono text-slate-600 mt-0.5 whitespace-nowrap">
                    {project.year}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.shortDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-500 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-xs font-mono text-slate-600">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-sky-400 text-sm font-medium">
                  View details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-600">
            No projects found for this filter.
          </div>
        )}
      </div>
    </main>
  );
}
