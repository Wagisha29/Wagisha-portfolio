import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";

const EMAIL = "wagisha29@gmail.com";

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
    <section
      id="contact"
      className="bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-2 sm:text-4xl lg:text-6xl">
          Let&apos;s Connect
        </h2>
        <p className="text-sm text-slate-400 mb-8 max-w-2xl">
          Interested in full-stack engineering, AI integrations, or building
          intelligent products? I&apos;d love to connect.
        </p>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
          <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
          Open to global engineering opportunities.
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="text-sm font-semibold text-slate-50 mb-3">Connect</h3>
          <p className="text-xs text-slate-400 mb-4">
            I&apos;m most active on GitHub and LinkedIn. Email is the fastest
            way to reach me for professional opportunities.
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex flex-col gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
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
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-slate-600 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
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

            <a
              href="https://github.com/Wagisha29"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2.5 text-slate-100 transition-colors hover:border-cyan-400 hover:text-cyan-200 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="flex items-center gap-2">
                <FiGithub className="h-4 w-4 shrink-0" />
                <span>GitHub</span>
              </span>
              <span className="text-xs text-slate-400 sm:text-right">@Wagisha29</span>
            </a>

            <a
              href="https://www.linkedin.com/in/wagisha29"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2.5 text-slate-100 transition-colors hover:border-cyan-400 hover:text-cyan-200 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="flex items-center gap-2">
                <FiLinkedin className="h-4 w-4 shrink-0" />
                <span>LinkedIn</span>
              </span>
              <span className="text-xs text-slate-400 sm:text-right">in/wagisha29</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
