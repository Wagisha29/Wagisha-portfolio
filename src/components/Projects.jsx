// src/components/Projects.jsx
import { useNavigate } from "react-router-dom";
import { FiExternalLink, FiFileText, FiGithub } from "react-icons/fi";

const projects = [
  {
    name: "Interactive Media Capture Web App",
    problemStatement: "A production-style web application focused on fast, responsive image capture and client-side processing with performance-optimized UI interactions.",
    overview: "Designed as a lightweight, performance-focused frontend application to explore client-side image processing, smooth UI transitions, and responsive layouts across devices.",
    highlights: ["Sub-2s initial load time", "Optimized re-renders for smoother interactions", "Responsive design across mobile and desktop"],
    tech: ["React", "Vite", "JavaScript", "CSS animations"],
    liveDemo: "https://photo-booth-red.vercel.app/",
    caseStudy: "interactive-media-capture", // This matches the key in CaseStudy component
    github: "https://github.com/Wagisha29/PhotoBooth",
  },
  {
    name: "Enterprise Analytics Dashboard",
    problemStatement: "A data-intensive dashboard designed to help users explore large datasets efficiently without sacrificing performance",
    overview: "This project simulates a real-world enterprise analytics product, focusing on scalable frontend architecture, efficient data rendering, and smooth user interactions for large datasets.",
    highlights: ["Virtualized tables for large datasets", "Server-side pagination and filtering", "Performance-optimized rendering"],
    tech: ["React", "TypeScript", "TanStack Table", "React Query", "REST APIs","CI/CD", "Git"],
    liveDemo: "#",
    caseStudy: "enterprise-analytics-dashboard", // This matches the key in CaseStudy component
    github: "#",
  },
];

export default function Projects() {

  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">
          Selected Projects
        </h2>
        <p className="text-sm text-slate-400 mb-12">
          A selection of frontend projects that demonstrate my approach to building scalable, user-focused interfaces.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-400/60 transition-colors"
            >
              {/* Project Name */}
              <h3 className="text-lg font-semibold text-slate-50 mb-3">
                {project.name}
              </h3>

              {/* 1-line Problem Statement */}
              <p className="text-sm text-slate-300 mb-4">
                {project.problemStatement}
              </p>

              {/* Overview */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                  Overview
                </h4>
                <p className="text-xs text-slate-400">
                  {project.overview}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                  Highlights
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs rounded-full bg-slate-800 px-3 py-1 text-slate-300"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                  Tech
                </h4>
                <p className="text-xs text-cyan-400">
                  {project.tech.join(", ")}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                

                <button
                  onClick={() => navigate(`/case-study/${project.caseStudy}`)}
                  className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                  <FiFileText className="h-3.5 w-3.5" />
                  <span>Case Study</span>
                </button>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-cyan-400 transition-colors"
                >
                  <FiExternalLink className="h-3.5 w-3.5" />
                  <span>Live Demo</span>
                </a>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                  <FiGithub className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
