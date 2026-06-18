import { profile } from "../data/portfolio";
import { SectionHeader } from "../components/ui";
import { Mail, Phone, MapPin, Github, Gitlab, Linkedin, ExternalLink } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    value: "MuhammadSyulhanA",
    href: profile.github,
  },
  {
    icon: Gitlab,
    label: "GitLab",
    value: "MuhammadSyulhan",
    href: profile.gitlab,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammad-syulhan",
    href: profile.linkedin,
  },
  {
    icon: ExternalLink,
    label: "Medium",
    value: "@muh.syulhan",
    href: profile.medium,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact"
          subtitle="Feel free to reach out for collaborations, opportunities, or just a chat about tech and product development."
        />

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* Contact info */}
          <div className="space-y-4">
            <h2 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">
              Direct Contact
            </h2>
            {contacts.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-sky-400/40 transition-colors duration-200"
              >
                <div className="p-2 rounded-lg bg-sky-400/10 text-sky-400">
                  <c.icon size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-slate-300 text-sm hover:text-sky-400 transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-slate-300 text-sm">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div>
            <h2 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">
              Online Profiles
            </h2>
            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-sky-400/40 hover:bg-sky-400/5 transition-all duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-sky-400/10 text-sky-400 group-hover:bg-sky-400/20 transition-colors">
                    <s.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{s.label}</p>
                    <p className="text-slate-300 text-sm group-hover:text-sky-400 transition-colors">
                      {s.value}
                    </p>
                  </div>
                  <ExternalLink
                    size={13}
                    className="ml-auto text-slate-600 group-hover:text-sky-400 transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Open to work banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-400/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-400 font-medium text-sm">Open to Opportunities</span>
          </div>
          <p className="text-slate-400 text-sm">
            Looking for Frontend Engineer or Product-Oriented Software Engineer roles — remote or
            hybrid.
          </p>
        </div>
      </div>
    </main>
  );
}
