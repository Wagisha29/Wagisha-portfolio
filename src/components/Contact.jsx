// src/components/Contact.jsx
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
    return (
      <section
        id="contact"
        className="bg-slate-950 text-slate-50 border-t border-slate-800"
      >
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">
            Contact
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Have a project in mind, or just want to say hi? Let&apos;s talk.
          </p>
  
          <div className="grid gap-10 md:grid-cols-[2fr,1.3fr] items-start">
            {/* Contact form */}
            <form
              className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              onSubmit={(e) => e.preventDefault()} // no backend yet
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  placeholder="Your name"
                />
              </div>
  
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  placeholder="you@example.com"
                />
              </div>
  
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-y"
                  placeholder="Tell me a bit about what you have in mind..."
                />
              </div>
  
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
              >
                Send Message
              </button>
  
              {/* Direct email fallback */}
              <p className="text-[11px] text-slate-400">
                Prefer email?{" "}
                <a
                  href="mailto:wagisha29@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
                >
                  wagisha29@gmail.com
                </a>
              </p>
            </form>
  
            {/* Socials / direct links */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-slate-50 mb-3">
                  Connect
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  I&apos;m most active on GitHub and LinkedIn. Feel free to reach out.
                </p>
  
                <div className="space-y-2 text-sm">
                  <a
                    href="mailto:wagisha29@gmail.com"
                    className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <FiMail className="h-4 w-4" />
                      <span>Email</span>
                    </span>
                    <span className="text-xs text-slate-400">
                      wagisha29@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://github.com/Wagisha29"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <FiGithub className="h-4 w-4" />
                      <span>GitHub</span>
                    </span>
                    <span className="text-xs text-slate-400">
                      @Wagisha29
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/wagisha29"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <FiLinkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </span>
                    <span className="text-xs text-slate-400">
                      in/wagisha29
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }