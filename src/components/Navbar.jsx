import { useEffect, useState } from "react";
import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const sections = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "skills", label: "Skills", icon: FaCode },
  { id: "projects", label: "Projects", icon: FaProjectDiagram },
  { id: "experience", label: "Experience", icon: FaBriefcase },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = sections
      .map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(id);
          },
          { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
        );

        observer.observe(el);
        return observer;
      })
      .filter(Boolean);

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-800/80 bg-slate-950/95 shadow-lg shadow-black/20"
          : "border-slate-800/50 bg-slate-950/90"
      } backdrop-blur-sm`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="interactive-btn text-sm font-bold tracking-wide text-cyan-400 md:hidden"
        >
          WS
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-2 md:flex">
          {sections.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                title={item.label}
                className={`group relative rounded-full px-3 py-2 transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-400"
                    : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
                }`}
              >
                <Icon className="text-xl" aria-hidden="true" />
                <span className="sr-only">{item.label}</span>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-100 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/Wagisha_Singh_Resume.pdf"
            className="interactive-btn hidden rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 md:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            className="interactive-btn rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FaTimes className="text-xl" aria-hidden="true" />
            ) : (
              <FaBars className="text-xl" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-800 bg-slate-950/95 transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl space-y-1 px-4 pb-4 pt-2">
          {sections.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  active === item.id
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon className="text-lg" aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <a
            href="/Wagisha_Singh_Resume.pdf"
            className="interactive-btn mt-2 flex w-full items-center justify-center rounded-lg bg-cyan-500 px-3 py-3 text-sm font-semibold text-slate-900"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
