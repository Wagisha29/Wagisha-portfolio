import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiFirebase,
  SiSupabase,
  SiOpenai,
  SiGit,
  SiGithub,
  SiVite,
  SiNpm,
} from "react-icons/si";
import { TbApi, TbPlugConnected, TbBrain } from "react-icons/tb";
import { FiCode, FiCpu, FiTool } from "react-icons/fi";
import Reveal from "./Reveal";
import { useScrollReveal } from "../hooks/useScrollReveal";

const LEVEL_SCORE = {
  Advanced: 90,
  Proficient: 75,
  "Working Knowledge": 55,
};

const cardStyles = {
  border: "border-cyan-500/30",
  headerBg: "bg-cyan-500/10",
  iconColor: "text-cyan-400",
  barColor: "bg-cyan-400",
};

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    icon: FiCode,
    items: [
      { name: "React", level: "Advanced", icon: SiReact },
      { name: "TypeScript", level: "Advanced", icon: SiTypescript },
      { name: "Next.js", level: "Proficient", icon: SiNextdotjs },
      { name: "JavaScript", level: "Advanced", icon: SiJavascript },
      { name: "HTML", level: "Proficient", icon: SiHtml5 },
      { name: "CSS", level: "Proficient", icon: SiCss3 },
      { name: "Tailwind CSS", level: "Proficient", icon: SiTailwindcss },
    ],
  },
  {
    id: "backend",
    title: "Backend & AI",
    icon: FiCpu,
    items: [
      { name: "Python", level: "Advanced", icon: SiPython },
      { name: "FastAPI", level: "Proficient", icon: SiFastapi },
      { name: "REST APIs", level: "Proficient", icon: TbApi },
      { name: "WebSockets", level: "Proficient", icon: TbPlugConnected },
      { name: "LLM APIs", level: "Proficient", icon: SiOpenai },
      { name: "Supabase", level: "Proficient", icon: SiSupabase },
      { name: "Firebase", level: "Working Knowledge", icon: SiFirebase },
    ],
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    icon: FiTool,
    items: [
      { name: "Git", level: "Proficient", icon: SiGit },
      { name: "GitHub", level: "Proficient", icon: SiGithub },
      { name: "Vite", level: "Working Knowledge", icon: SiVite },
      { name: "npm", level: "Proficient", icon: SiNpm },
      { name: "CI/CD", level: "Proficient", icon: SiGithub },
      { name: "MCP", level: "Working Knowledge", icon: TbBrain },
    ],
  },
];

function SkillRow({ skill, barColor, rowDelay = 0 }) {
  const Icon = skill.icon;
  const score = LEVEL_SCORE[skill.level];
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="group rounded-xl border border-transparent px-2 py-2.5 transition-all duration-300 hover:translate-x-1 hover:border-cyan-500/20 hover:bg-slate-800/50"
      style={{ transitionDelay: `${rowDelay}ms` }}
    >
      <div className="flex items-center gap-3">
        <span className="shrink-0 text-lg text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300">
          <Icon />
        </span>
        <div className="min-w-0 flex-1">
          <span className="truncate text-sm font-medium text-slate-200 group-hover:text-white">
            {skill.name}
          </span>
          <div className="relative mt-1.5 h-1 overflow-hidden rounded-full bg-slate-800">
            <div
              className={`relative h-full rounded-full ${barColor} transition-all duration-1000 ease-out`}
              style={{ width: isVisible ? `${score}%` : "0%" }}
            >
              <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-slate-800 bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <Reveal>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Skills
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-8 max-w-2xl text-sm text-slate-400">
            Full-stack engineering across UI, APIs, AI integrations, and production
            tooling — hover any skill to highlight.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;

            return (
              <Reveal key={group.id} delay={groupIndex * 120}>
                <article
                  className={`interactive-card overflow-hidden rounded-2xl border ${cardStyles.border} bg-slate-900/60`}
                >
                  <div
                    className={`flex items-center gap-3 border-b border-slate-800 px-5 py-4 ${cardStyles.headerBg}`}
                  >
                    <span className={`text-xl ${cardStyles.iconColor}`}>
                      <GroupIcon />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-100">
                        {group.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {group.items.length} technologies
                      </p>
                    </div>
                  </div>

                  <div className="space-y-0.5 p-2">
                    {group.items.map((skill, i) => (
                      <SkillRow
                        key={skill.name}
                        skill={skill}
                        barColor={cardStyles.barColor}
                        rowDelay={i * 30}
                      />
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
