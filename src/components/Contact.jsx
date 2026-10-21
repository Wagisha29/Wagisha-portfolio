import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Reveal from "./Reveal";

const EMAIL = "wagisha29@gmail.com";

const links = [
  {
    href: "https://github.com/Wagisha29",
    label: "GitHub",
    handle: "@Wagisha29",
    icon: FiGithub,
  },
  {
    href: "https://www.linkedin.com/in/wagisha29",
    label: "LinkedIn",
    handle: "in/wagisha29",
    icon: FiLinkedin,
  },
  {
    href: "https://leetcode.com/u/user6617cQ/",
    label: "LeetCode",
    handle: "user6617cQ",
    icon: SiLeetcode,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="border-t border-slate-800 bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s Connect
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-8 max-w-2xl text-sm text-slate-400">
            Interested in full-stack engineering, AI integrations, or building
            intelligent products? I&apos;d love to connect.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <span className="h-2 w-2 shrink-0 animate-pulse-soft rounded-full bg-cyan-400" />
            Open to global engineering opportunities (Canada, UK, Europe, UAE)
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="mb-3 text-sm font-semibold text-slate-50">Connect</h3>
            <p className="mb-4 text-xs text-slate-400">
              Email is the fastest way to reach me. Hover any link for a quick highlight.
            </p>

            <div className="space-y-2 text-sm">
              <div className="interactive-card flex flex-col gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex min-w-0 items-center gap-2 text-slate-100 transition-colors hover:text-cyan-200"
                >
                  <FiMail className="h-4 w-4 shrink-0" />
                  <span className="truncate">{EMAIL}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={copied ? "Email copied" : "Copy email to clipboard"}
                  className="interactive-btn inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-slate-600 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
                >
                  {copied ? (
                    <>
                      <FiCheck className="h-3.5 w-3.5 text-cyan-400" />
                      <span className="text-cyan-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="h-3.5 w-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-card group flex flex-col gap-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2.5 text-slate-100 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                      <span>{link.label}</span>
                    </span>
                    <span className="text-xs text-slate-400 transition-colors group-hover:text-cyan-300 sm:text-right">
                      {link.handle}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
