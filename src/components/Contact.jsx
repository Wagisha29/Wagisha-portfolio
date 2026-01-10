// src/components/Contact.jsx
import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

export default function Contact() {
    return (
      <section
        id="contact"
        className="bg-slate-950 text-slate-50 border-t border-slate-800"
      >
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">
          Let’s Connect
          </h2>
          <p className="text-sm text-slate-400 mb-6">
          Interested in frontend engineering opportunities, collaborations, or discussions around building scalable products? I’d love to connect.
          </p>
          <p className="text-sm text-slate-400 mb-6">
          Open to relocation and global frontend engineering opportunities (Canada, UK, Europe, UAE).
          </p>
  
          {/* Socials / direct links - full width box */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-50 mb-3">
                Connect
              </h3>
              <p className="text-xs text-slate-400 mb-4">
              I'm most active on GitHub and LinkedIn. These are the best ways to reach me for professional opportunities.
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
      </section>
    );
  }