import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Reveal from "./Reveal";

const coreStack = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "LLM Integration",
];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950 text-slate-50 grid-bg"
    >
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 animate-float rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 animate-float rounded-full bg-cyan-600/5 blur-3xl"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center">
          <div className="relative flex-1 space-y-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
                <span className="h-2 w-2 animate-pulse-soft rounded-full bg-cyan-400" />
                Full Stack · AI · Product
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                <span className="text-gradient-animate">FULL STACK & AI </span>
                <span className="text-slate-100">ENGINEER</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="max-w-xl border-l-2 border-cyan-500/80 py-1 pl-4 text-lg font-medium leading-snug text-slate-200 md:text-xl">
                Building scalable, performant web applications and intelligent
                AI-driven systems.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Core stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {coreStack.map((tech, i) => (
                    <span
                      key={tech}
                      className="interactive-pill rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/Wagisha_Singh_Resume.pdf"
                  className="interactive-btn inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400"
                >
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="interactive-btn inline-flex items-center justify-center rounded-full border border-cyan-500/50 bg-cyan-500/10 px-6 py-2.5 text-sm font-semibold text-cyan-200 hover:border-cyan-400 hover:bg-cyan-500/20"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="interactive-btn inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-300"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} direction="right" className="flex flex-1 justify-center md:justify-end">
            <div className="interactive-card group w-full max-w-[260px] overflow-hidden rounded-2xl border border-slate-700 bg-white p-4 shadow-lg shadow-cyan-500/5 text-slate-900">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/wagisha_new.jpeg"
                  alt="Wagisha"
                  className="w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="mt-4 flex flex-col items-center text-center">
                <h2 className="text-xl font-bold tracking-tight text-slate-900">Wagisha</h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-600">
                  Full Stack & AI Engineer
                </p>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-slate-600">
                  Building full-stack web apps and AI agents with Python and React.
                </p>
                <div className="mt-4 flex items-center justify-center gap-2.5">
                  {[
                    { href: "mailto:wagisha29@gmail.com", icon: FiMail, label: "Email" },
                    { href: "https://www.linkedin.com/in/wagisha29", icon: FiLinkedin, label: "LinkedIn" },
                    { href: "https://github.com/Wagisha29", icon: FiGithub, label: "GitHub" },
                    { href: "https://leetcode.com/u/user6617cQ/", icon: SiLeetcode, label: "LeetCode" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noreferrer"
                      aria-label={label}
                      className="interactive-btn rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-cyan-100 hover:text-cyan-600"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;
