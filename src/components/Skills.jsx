// src/components/Skills.jsx
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVite,
  SiNpm,
  SiFirebase,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 90, icon: SiHtml5 },
      { name: "CSS", level: 85, icon: SiCss3 },
      { name: "JavaScript", level: 80, icon: SiJavascript },
      { name: "React", level: 80, icon: SiReact },
      { name: "Tailwind CSS", level: 75, icon: SiTailwindcss },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 80, icon: SiGit },
      { name: "GitHub", level: 80, icon: SiGithub },
      { name: "Vite", level: 70, icon: SiVite },
      { name: "npm", level: 75, icon: SiNpm },
    ],
  },
  {
    category: "Backend & APIs (Basics)",
    items: [
      { name: "REST APIs", level: 65, icon: TbApi },
      { name: "Firebase", level: 60, icon: SiFirebase },
    ],
  },
];

export default function Skills() {
    return (
      <section
        id="skills"
        className="bg-slate-950 text-slate-50 border-t border-slate-800"
      >
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">
            Skills
          </h2>
          <p className="text-sm text-slate-400 mb-8">
            A quick view of the technologies and tools I use most often.
          </p>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <h3 className="text-base font-semibold text-slate-100 mb-5">
                  {group.category}
                </h3>
  
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-cyan-400">
                            <item.icon />
                          </span>
                          <span className="text-sm md:text-base text-slate-200">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[11px] md:text-xs text-slate-400">
                          {item.level}%
                        </span>
                      </div>
  
                      {/* Progress bar */}
                      <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }