import { FiLinkedin, FiMail, FiGithub, FiTwitter } from "react-icons/fi";

const coreStack = [
  "Python",
  "FastAPI",
  "Django",
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "Material UI",
];

const supportingStack = [
  "Node.js",
  "REST APIs",
  "MongoDB",
  "Git",
  "Express",
  "GitHub",
];

function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-950 text-slate-50 border-b border-slate-800"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center">
          {/* Left: intro / hero text */}
          <div className="relative flex-1 space-y-6">
            <div
              className="pointer-events-none absolute -left-8 top-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"
              aria-hidden="true"
            />

            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
              Full Stack · AI · Product
            </span>

            <div className="space-y-1">
              <h1 className="text-5xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-7xl">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                  FULL STACK
                </span>
              </h1>
              <h1 className="text-4xl font-extrabold leading-none tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
                ENGINEER
              </h1>
            </div>

            <p className="max-w-xl border-l-2 border-cyan-500/80 py-1 pl-4 text-lg font-medium leading-snug text-slate-200 md:text-xl">
              Writing code that scales with people and problems
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              From APIs to interfaces, I build products that are fast, intuitive,
              and built to scale, with a focus on clean code and real-world
              impact.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Core stack
              </p>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Also worked with
              </p>
              <div className="flex flex-wrap gap-2">
                {supportingStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              
              <a
                href="/Wagisha_Singh_Resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition-colors hover:bg-cyan-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Beautiful animated gradient orbs with code */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white p-4 shadow-lg text-slate-900">
              <img
                src="/wagisha_new.jpeg"
                alt="Wagisha"
                className="w-full rounded-xl object-cover"
              />
              <div className="mt-4 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Wagisha
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-600">
                  AI Engineer
                </p>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-slate-600">
                  AI engineer who thinks she can build anything using Python.
                </p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  <a
                    href="mailto:wagisha29@gmail.com"
                    className="rounded-full bg-slate-100 p-2.5 text-slate-600 transition-colors hover:bg-cyan-100 hover:text-cyan-600"
                    aria-label="Email"
                  >
                    <FiMail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wagisha29"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-slate-100 p-2.5 text-slate-600 transition-colors hover:bg-cyan-100 hover:text-cyan-600"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/Wagisha29"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-slate-100 p-2.5 text-slate-600 transition-colors hover:bg-cyan-100 hover:text-cyan-600"
                    aria-label="GitHub"
                  >
                    <FiGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-slate-100 p-2.5 text-slate-600 transition-colors hover:bg-cyan-100 hover:text-cyan-600"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;