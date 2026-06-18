import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { profile } from "../data/portfolio";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center pt-24 pb-16 px-6">
        <div className="max-w-3xl w-full">
          {/* Greeting chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-400 text-xs font-mono tracking-wide">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 leading-tight tracking-tight mb-4">
            Muhammad Syulhan
            <br />
            <span className="text-sky-400">Al Ghofany</span>
          </h1>

          {/* Title */}
          <p className="text-lg sm:text-xl text-slate-400 font-mono mb-6">
            Frontend Engineer · Product-Oriented
          </p>

          {/* Summary */}
          <p className="text-slate-400 leading-relaxed max-w-2xl mb-10 text-[15px]">
            {profile.summary}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-10">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-sky-400" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Mail size={14} className="text-sky-400" />
              {profile.email}
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm rounded-lg transition-colors duration-200"
            >
              View Experience <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-700 hover:border-sky-400 text-slate-300 hover:text-sky-400 font-medium text-sm rounded-lg transition-colors duration-200"
            >
              Contact Me
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors flex items-center gap-1.5 text-sm"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors flex items-center gap-1.5 text-sm"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={profile.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors flex items-center gap-1.5 text-sm"
            >
              <ExternalLink size={16} /> Medium
            </a>
          </div>
        </div>
      </section>

      {/* Quick stats strip */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "53.8k+", label: "App Downloads" },
            { value: "800k+", label: "User Sessions" },
            { value: "5+", label: "iOS Apps Built" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-sky-400">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
