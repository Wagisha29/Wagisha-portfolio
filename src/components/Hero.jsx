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
              Hey, I&apos;m Wagisha 👋
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Full-stack engineer building scalable, user-focused web applications from frontend to backend.
              experiences.
            </h1>
            <p className="mt-4 text-sm text-slate-300 md:text-base max-w-xl">
              I craft responsive interfaces with React and Tailwind, focusing on
              performance, accessibility, and smooth user experiences. I love
              turning product ideas into polished, production-ready UIs.
            </p>
            <p className="mt-3 text-xs text-slate-400 md:text-sm">
              Tech stack: React, Next.js, Tailwind CSS, JavaScript, TypeScript, Node.js, Express, REST APIs, MongoDB, Git, GitHub
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

          {/* Right: Beautiful animated gradient orbs with code */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              {/* Large glowing background orb */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/40 via-purple-500/40 to-pink-500/40 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              
              {/* Central floating orb with code symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-48 w-48 md:h-64 md:w-64">
                  {/* Outer rotating ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-cyan-400" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-purple-400" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-pink-400" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-cyan-300" />
                  </div>
                  
                  {/* Main glowing orb */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/50 via-purple-500/50 to-pink-500/50 backdrop-blur-sm border border-cyan-400/20 shadow-2xl shadow-cyan-500/30 animate-pulse" style={{ animationDuration: '3s' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-cyan-300 text-5xl md:text-6xl font-mono font-bold">
                        {'</>'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Inner shimmer */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-300/20 to-transparent animate-spin" style={{ animationDuration: '8s' }} />
                </div>
              </div>
              
              {/* Floating code brackets around */}
              <div className="absolute top-8 left-8 text-cyan-400 text-4xl font-mono font-bold animate-bounce" style={{ animationDuration: '3s' }}>
                {'{'}
              </div>
              <div className="absolute bottom-8 right-8 text-purple-400 text-4xl font-mono font-bold animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                {'}'}
              </div>
              <div className="absolute top-1/4 right-4 text-pink-400 text-3xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                {'<'}
              </div>
              <div className="absolute bottom-1/4 left-4 text-cyan-300 text-3xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
                {'/>'}
              </div>
              
              {/* Small floating particles */}
              <div className="absolute top-12 right-12 h-2 w-2 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-12 left-12 h-2 w-2 rounded-full bg-purple-400 animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 right-8 h-2 w-2 rounded-full bg-pink-400 animate-ping" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/3 left-8 h-2 w-2 rounded-full bg-cyan-300 animate-ping" style={{ animationDelay: '1.5s' }} />
              
              {/* Tech icons floating */}
              <div className="absolute top-4 right-1/4 text-2xl animate-bounce" style={{ animationDuration: '5s' }}>⚛️</div>
              <div className="absolute bottom-4 left-1/4 text-2xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;