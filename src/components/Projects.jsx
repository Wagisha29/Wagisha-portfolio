import { useNavigate } from "react-router-dom";
import { FiExternalLink, FiFileText, FiGithub } from "react-icons/fi";

const btnPrimary =
  "inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-slate-900 transition-colors hover:bg-cyan-400";

const btnSecondary =
  "inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-400";

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
    github: "#",
  },
  {
    id: "photobooth",
    name: "Interactive Media Capture",
    subtitle: "Web App",
    description:
      "Fast, responsive image capture and client-side processing with performance-optimized UI interactions.",
    highlights: ["Sub-2s load time", "Optimized re-renders", "Responsive design"],
    tech: ["React", "Vite", "JavaScript", "CSS Animations"],
    image: "/project-images/photobooth1.jpg",
    tag: "Frontend · Performance",
    liveDemo: "https://photo-booth-red.vercel.app/",
    caseStudy: "interactive-media-capture",
    github: "https://github.com/Wagisha29/PhotoBooth",
  },
];

function ProjectCard({ project, navigate }) {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 sm:flex-row"
    >
      {/* Compact thumbnail */}
      <div className="relative shrink-0 sm:w-44 md:w-52">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full sm:min-h-[180px]"
          onError={(e) => {
            e.target.src = PLACEHOLDER;
          }}
        />
        <span className="absolute left-3 top-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-300">
          {project.tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2">
          <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
            {project.name}
          </h3>
          <p className="text-xs text-slate-500">{project.subtitle}</p>
        </div>

        <p className="text-sm leading-relaxed text-slate-400 line-clamp-2">
          {project.description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-1.5 text-[11px] text-slate-500"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex shrink-0 flex-wrap gap-2">
            <button
              type="button"
              onClick={() => navigate(`/case-study/${project.caseStudy}`)}
              className={btnSecondary}
            >
              <FiFileText className="h-3 w-3" />
              Case Study
            </button>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className={btnPrimary}
            >
              <FiExternalLink className="h-3 w-3" />
              Live Demo
            </a>
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
  );
}

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-3 sm:text-4xl lg:text-6xl">
          Selected Projects
        </h2>
        <p className="text-sm text-slate-400 mb-8 max-w-2xl">
          Full-stack and AI-powered builds — compact overview of each project
          with direct links to demos and case studies.
        </p>

        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
}
