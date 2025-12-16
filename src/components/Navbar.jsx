import { useState } from "react";
const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

function Navbar() {

    const [active, setActive] = useState("about");
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
        <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
                <div className="text-lg font-semibold tracking-tight text-slate-50 cursor-pointer">
                    Wagisha
                </div>

                {/* Desktop links */}
                <div className="hidden items-center gap-6 md:flex">
                    {sections.map((item) => (
                        <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`text-sm font-medium transition-colors ${
                          active === item.id
                            ? "text-cyan-400"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
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