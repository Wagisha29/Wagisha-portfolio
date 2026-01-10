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
      { name: "TypeScript", level: "Advanced", icon: SiHtml5 },
      { name: "HTML", level: "Proficient", icon: SiHtml5 },
      { name: "CSS", level: "Proficient", icon: SiCss3 },
      { name: "JavaScript", level: "Advanced", icon: SiJavascript },
      { name: "React", level: "Advanced", icon: SiReact },
      { name: "Tailwind CSS", level: "Proficient", icon: SiTailwindcss },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Git", level: "Proficient", icon: SiGit },
      { name: "GitHub", level: "Proficient", icon: SiGithub },
      { name: "Vite", level: "Working Knowledge", icon: SiVite },
      { name: "npm", level: "Proficient", icon: SiNpm },
    ],
  },
  {
    category: "APIs & Backend (Supporting)",
    items: [
      { name: "REST APIs", level: "Proficient", icon: TbApi },
      { name: "Firebase", level: "Working Knowledge", icon: SiFirebase },
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
          A focused snapshot of the technologies I use to build scalable, production-ready frontend systems.

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
                          {item.level}
                        </span>
                      </div>
  
                      {/* Progress bar - removed since we're using labels now */}
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