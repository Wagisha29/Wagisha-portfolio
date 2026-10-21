import { useNavigate } from "react-router-dom";
import { FiExternalLink, FiFileText, FiGithub, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";

const btnPrimary =
  "interactive-btn inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-cyan-500 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-cyan-400 sm:w-auto sm:py-1.5";

const btnSecondary =
  "interactive-btn inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400 sm:w-auto sm:py-1.5";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231e293b' width='400' height='300'/%3E%3Ctext fill='%23647593' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EPreview%3C/text%3E%3C/svg%3E";

const projects = [
  {
    id: "spendwise",
    name: "SpendWise",
    subtitle: "AI-Powered Personal Finance Copilot",
    description:
      "Full-stack financial dashboard with WiseBot—an AI copilot for budget audits and actionable spending advice.",
    highlights: ["WiseBot LLM chatbot", "KPI & analytics", "Google OAuth + Supabase"],
    tech: ["Python", "FastAPI", "React", "Supabase", "LLM API"],
    image: "/project-images/spendWise1.jpg",
    tag: "Full Stack · AI",
    liveDemo: "https://spendwise-io.vercel.app/",
    caseStudy: "spendwise",
    github: "https://github.com/Wagisha29/SpendWise",
  },
  {
    id: "photobooth",
    name: "Interactive Media Capture",
    subtitle: "Web App",
    description:
      "Fast, responsive image capture and client-side processing with performance-optimized UI interactions.",
    highlights: ["Sub-2s load time", "Optimized re-renders", "Responsive design"],
    tech: ["React", "Vite", "JavaScript", "CSS Animations"],
    image: "/project-images/photobooth-preview.svg",
    tag: "Frontend · Performance",
    liveDemo: "https://photo-booth-red.vercel.app/",
    caseStudy: "interactive-media-capture",
    github: "https://github.com/Wagisha29/PhotoBooth",
  },
];

function ProjectCard({ project, navigate, delay }) {
  return (
    <Reveal delay={delay}>
      <article className="group interactive-card flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 sm:flex-row">
        <div className="relative shrink-0 overflow-hidden sm:w-44 md:w-52">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-full sm:min-h-[180px]"
            onError={(e) => {
              e.target.src = PLACEHOLDER;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
          <span className="absolute left-3 top-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-300 backdrop-blur-sm">
            {project.tag}
          </span>
          <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-cyan-300 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
            <FiArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
          <div className="mb-2">
            <h3 className="text-base font-semibold text-slate-50 transition-colors group-hover:text-cyan-100 sm:text-lg">
              {project.name}
            </h3>
            <p className="text-xs text-slate-500">{project.subtitle}</p>
          </div>

          <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>

          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-1.5 text-[11px] text-slate-500 transition-colors group-hover:text-slate-400"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="interactive-pill rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className={btnPrimary}
              >
                <FiExternalLink className="h-3 w-3" />
                Live Demo
              </a>
              <button
                type="button"
                onClick={() => navigate(`/case-study/${project.caseStudy}`)}
                className={btnSecondary}
              >
                <FiFileText className="h-3 w-3" />
                Case Study
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={btnSecondary}
              >
                <FiGithub className="h-3 w-3" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="border-t border-slate-800 bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <Reveal>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Selected Projects
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-8 max-w-2xl text-sm text-slate-400">
            Hover a project to preview — jump to live demos and case studies in one click.
          </p>
        </Reveal>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              navigate={navigate}
              delay={index * 140}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
