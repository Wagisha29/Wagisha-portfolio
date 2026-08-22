import { useState } from "react";
import {
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const sections = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "skills", label: "Skills", icon: FaTools },
  { id: "projects", label: "Projects", icon: FaProjectDiagram },
  { id: "experience", label: "Experience", icon: FaBriefcase },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:py-5">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="text-sm font-bold tracking-wide text-cyan-400 md:hidden"
        >
          WS
        </button>

        <div className="hidden items-center gap-6 rounded-full border border-slate-800 px-4 py-2 md:flex">
          {sections.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-label={item.label}
                title={item.label}
                className={`group relative text-sm font-medium transition-colors ${
                  active === item.id
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Icon className="text-2xl" aria-hidden="true" />
                <span className="sr-only">{item.label}</span>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-100 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
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
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 pb-4 md:hidden">
          <div className="mx-auto max-w-5xl space-y-1 pt-2">
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
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
