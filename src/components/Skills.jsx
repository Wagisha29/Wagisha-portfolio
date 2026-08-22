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

const LEVEL_SCORE = {
  Advanced: 90,
  Proficient: 75,
  "Working Knowledge": 55,
};

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    icon: FiCode,
    accent: "cyan",
    border: "border-cyan-500/30",
    headerBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    barColor: "bg-cyan-400",
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
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
    accent: "violet",
    border: "border-violet-500/30",
    headerBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    barColor: "bg-violet-400",
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
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
    accent: "emerald",
    border: "border-emerald-500/30",
    headerBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    barColor: "bg-emerald-400",
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
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

const stackFlow = [
  { label: "UI Layer", tech: "React · TypeScript · Tailwind" },
  { label: "API Layer", tech: "FastAPI · REST · WebSockets" },
  { label: "AI Layer", tech: "LLM APIs · MCP · Agents" },
  { label: "Data Layer", tech: "Supabase · Firebase" },
];

function SkillRow({ skill, barColor, badge }) {
  const Icon = skill.icon;
  const score = LEVEL_SCORE[skill.level];

  return (
    <div className="group rounded-xl border border-transparent px-2 py-2.5 transition-colors hover:border-slate-700 hover:bg-slate-800/40">
      <div className="flex items-center gap-3">
        <span className="shrink-0 text-lg text-slate-400 transition-colors group-hover:text-slate-200">
          <Icon />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="truncate text-sm font-medium text-slate-200">
              {skill.name}
            </span>
            <span
              className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${badge}`}
            >
              {skill.level}
            </span>
          </div>
          <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-slate-800">
            <div
              className={`h-full rounded-full ${barColor}`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-3 sm:text-4xl lg:text-6xl">
          Skills
        </h2>
        <p className="text-sm text-slate-400 mb-8 max-w-2xl">
          Full-stack engineering across UI, APIs, AI integrations, and
          production tooling — everything visible at a glance.
        </p>

        {/* Stack flow — zero-click overview */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
          <div className="grid divide-y divide-slate-800 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {stackFlow.map((layer, index) => (
              <div key={layer.label} className="px-4 py-4 sm:px-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  {String(index + 1).padStart(2, "0")} · {layer.label}
                </p>
                <p className="mt-1 text-xs font-medium leading-snug text-slate-300">
                  {layer.tech}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* All categories visible — no tabs, no selection */}
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <article
                key={group.id}
                className={`rounded-2xl border ${group.border} bg-slate-900/60 overflow-hidden`}
              >
                <div
                  className={`flex items-center gap-3 border-b border-slate-800 px-5 py-4 ${group.headerBg}`}
                >
                  <span className={`text-xl ${group.iconColor}`}>
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
                  {group.items.map((skill) => (
                    <SkillRow
                      key={skill.name}
                      skill={skill}
                      barColor={group.barColor}
                      badge={group.badge}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Legend — static, no interaction needed */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-6 rounded-full bg-cyan-400" />
            Advanced / Proficient
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-4 rounded-full bg-slate-600" />
            Working Knowledge
          </span>
        </div>
      </div>
    </section>
  );
}
