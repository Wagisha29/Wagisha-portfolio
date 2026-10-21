import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Reveal from "./Reveal";

const socialLinks = [
  { href: "https://github.com/Wagisha29", label: "GitHub", icon: FiGithub },
  { href: "https://www.linkedin.com/in/wagisha29", label: "LinkedIn", icon: FiLinkedin },
  { href: "https://leetcode.com/u/user6617cQ/", label: "LeetCode", icon: SiLeetcode },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Reveal>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-center text-xs text-slate-500 sm:text-left">
              © Wagisha Singh · Full Stack & AI Engineer · Open to Global Opportunities
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="interactive-btn rounded-full border border-slate-800 p-2 text-slate-400 hover:border-cyan-500/40 hover:text-cyan-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
