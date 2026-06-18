import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Smartphone, AppWindow, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";

const statusColors: Record<string, string> = {
  Live: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  "In Development": "bg-amber-400/10 text-amber-400 border-amber-400/20",
  Archived: "bg-slate-700 text-slate-400 border-slate-600",
};

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Project not found.</p>
          <Link to="/projects" className="text-sky-400 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors text-sm"
        >
          <ArrowLeft size={15} /> Back to Projects
        </button>
      </div>

      {/* Cover image */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden bg-slate-800">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          {/* Badges on cover */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-950/80 text-slate-300 backdrop-blur-sm border border-slate-700">
              {project.platform}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${statusColors[project.status]}`}
            >
              {project.status}
            </span>
          </div>

          <span className="absolute bottom-4 right-4 text-xs font-mono text-slate-400">
            {project.year}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-slate-100 mb-3">{project.title}</h1>
            <p className="text-slate-400 leading-relaxed mb-8">{project.fullDesc}</p>

            {/* Tags */}
            <div className="mb-10">
              <p className="text-xs text-sky-400 font-mono tracking-widest uppercase mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700 hover:bg-sky-400/10 hover:text-sky-300 hover:border-sky-400/40 transition-all duration-150"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshots — horizontal scroll */}
            {project.screenshots.length > 0 && (
              <div className="mb-10">
                <p className="text-xs text-sky-400 font-mono tracking-widest uppercase mb-3">
                  Screenshots
                </p>
                <div className="flex gap-3 overflow-x-auto pb-3 -mx-1 px-1 scrollbar-hide snap-x snap-mandatory">
                  {project.screenshots.map((src, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-48 sm:w-64 h-36 sm:h-44 rounded-xl overflow-hidden bg-slate-800 snap-start border border-slate-700 hover:border-sky-400/40 transition-colors"
                    >
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-600 mt-2">← scroll untuk lihat lebih banyak</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Links */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-xs text-sky-400 font-mono tracking-widest uppercase mb-4">
                Links
              </p>
              <div className="space-y-2">
                {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 hover:bg-sky-400/10 border border-slate-700 hover:border-sky-400/40 transition-all group"
                  >
                    <Smartphone size={15} className="text-sky-400" />
                    <span className="text-slate-300 text-sm group-hover:text-sky-400 transition-colors">
                      App Store
                    </span>
                    <ExternalLink size={12} className="ml-auto text-slate-600 group-hover:text-sky-400" />
                  </a>
                )}
                {project.links.testflight && (
                  <a
                    href={project.links.testflight}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 hover:bg-sky-400/10 border border-slate-700 hover:border-sky-400/40 transition-all group"
                  >
                    <Smartphone size={15} className="text-sky-400" />
                    <span className="text-slate-300 text-sm group-hover:text-sky-400 transition-colors">
                      TestFlight
                    </span>
                    <ExternalLink size={12} className="ml-auto text-slate-600 group-hover:text-sky-400" />
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 hover:bg-sky-400/10 border border-slate-700 hover:border-sky-400/40 transition-all group"
                  >
                    <AppWindow size={15} className="text-sky-400" />
                    <span className="text-slate-300 text-sm group-hover:text-sky-400 transition-colors">
                      Live Site
                    </span>
                    <ExternalLink size={12} className="ml-auto text-slate-600 group-hover:text-sky-400" />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 hover:bg-sky-400/10 border border-slate-700 hover:border-sky-400/40 transition-all group"
                  >
                    <Github size={15} className="text-sky-400" />
                    <span className="text-slate-300 text-sm group-hover:text-sky-400 transition-colors">
                      GitHub
                    </span>
                    <ExternalLink size={12} className="ml-auto text-slate-600 group-hover:text-sky-400" />
                  </a>
                )}
                {Object.values(project.links).every((v) => !v) && (
                  <p className="text-slate-600 text-sm text-center py-2">No public links available</p>
                )}
              </div>
            </div>

            {/* Other projects */}
            {otherProjects.length > 0 && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <p className="text-xs text-sky-400 font-mono tracking-widest uppercase mb-4">
                  Other Projects
                </p>
                <div className="space-y-3">
                  {otherProjects.map((p) => (
                    <Link
                      key={p.id}
                      to={`/projects/${p.id}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">
                        <img
                          src={p.coverImage}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-slate-300 text-sm font-medium truncate group-hover:text-sky-400 transition-colors">
                          {p.title}
                        </p>
                        <p className="text-slate-600 text-xs">{p.platform} · {p.year}</p>
                      </div>
                      <ChevronRight size={14} className="text-slate-700 group-hover:text-sky-400 transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
