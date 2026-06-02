import { FiLinkedin, FiMail, FiGithub, FiTwitter } from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-950 text-slate-50 border-b border-slate-800"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center">
          {/* Left: intro / hero text */}
          <div className="flex-1">
            <p className="text-3xl font-bold text-cyan-400 mb-2">
              Hey, I&apos;m Wagisha
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Writing code that scales with people and problems

            </h1>
            <p className="mt-4 text-sm text-slate-300 md:text-base max-w-xl">
            {/* I build data-driven, user-focused interfaces using React and TypeScript,
with a strong emphasis on performance, accessibility, and clean UI
architecture. I work closely with product managers, designers, and
backend engineers to deliver production-ready features used at scale. */}
              From APIs to interfaces, I build products that are fast, intuitive, and built to scale,
              with a focus on clean code and real-world impact.
            </p>
            <p className="mt-3 text-xs text-slate-400 md:text-sm">
            Core stack: Python, Fast API, Django, React, TypeScript, JavaScript, Next.js, Tailwind CSS, Material UI, Antd Design  
            </p>
            <p className="mt-3 text-xs text-slate-400 md:text-sm">
                Supporting: Node.js, REST APIs, MongoDB, Git, Express, REST APIs, MongoDB, Git, GitHub
            </p>

            {/* CTAs */}

            
            <div className="mt-6 flex flex-wrap items-center gap-4">

            <a
                href="/Wagisha_Singh_Resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                >
                Download Resume
            </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-5 text-slate-400">
              <a
                href="mailto:wagisha29@gmail.com"
                className="transition-transform hover:scale-110 hover:text-cyan-400"
                aria-label="Email"
              >
                <FiMail className="h-10 w-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/wagisha29"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-10 w-10" />
              </a>
              <a
                href="https://github.com/Wagisha29"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <FiGithub className="h-10 w-10" />
              </a>
              <a
                href="https://twitter.com" 
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110 hover:text-cyan-400"
                aria-label="Twitter"
              >
                <FiTwitter className="h-10 w-10" />
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