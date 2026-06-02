import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
const sections = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "Profile", icon: FaUser },
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
        <header className="sticky top-0 z-50 bg-slate-950/80">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">

                {/* Desktop links */}
                <div className="hidden items-center gap-6 md:flex">
                    {sections.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          aria-label={item.label}
                          className={`group relative text-sm font-medium transition-colors ${
                            active === item.id
                              ? "text-cyan-400"
                              : "text-slate-300 hover:text-white"
                          }`}
                        >
                          <Icon className="text-lg" aria-hidden="true" />
                          <span className="sr-only">{item.label}</span>
                          <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                    </div>
                    <div>
                      <a
                          href="/resume.pdf" // replace with your real resume link
                          className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
                      >
                          Download Resume
                      </a>
                    </div>
                
            </nav>
        </header>
    )
}

export default Navbar;