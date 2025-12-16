import { FiLinkedin, FiMail, FiGithub, FiTwitter } from "react-icons/fi";

function Hero() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-slate-50 border-b border-slate-800"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center">
          {/* Left: intro / hero text */}
          <div className="flex-1">
            <p className="text-3xl font-bold text-cyan-400 mb-2">
              Hey, I&apos;m Wagisha 👋
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frontend Developer building fast, clean, and scalable web
              experiences.
            </h1>
            <p className="mt-4 text-sm text-slate-300 md:text-base max-w-xl">
              I craft responsive interfaces with React and Tailwind, focusing on
              performance, accessibility, and smooth user experiences. I love
              turning product ideas into polished, production-ready UIs.
            </p>
            <p className="mt-3 text-xs text-slate-400 md:text-sm">
              Tech stack: React, JavaScript/TypeScript, Tailwind CSS, Vite, REST
              APIs.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
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

          {/* Right: photo */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative h-40 w-40 md:h-52 md:w-52">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 opacity-60 blur-2xl" />
              <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/70 shadow-xl overflow-hidden">
                <img
                  src="/wagisha_pic.jpeg"
                  alt="Wagisha"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;