import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Arctic Wolf",
    companyUrl: "https://arcticwolf.com",
    role: "Software Engineer 2 - Fullstack",
    period: "January 2026 – Present",
    location: "Bengaluru, India",
    logo: "arctic-wolf-logo.png",
    teaser:
      "Building AI-powered security tools — Aurora Assistant, MCP integrations, and Zoom RTMS.",
    highlights: [
      "Building Aurora Security Assistant, a conversational AI that helps customers resolve security queries and issues.",
      "Integrated MCP Apps to enable secure, cross-platform communication between internal AI systems.",
      "Developing Zoom RTMS integration secured with Okta authentication and real-time WebSocket communication.",
    ],
    tech: "Python, React, TypeScript, Material UI, REST APIs, WebSocket, Okta, MCP",
  },
  {
    company: "Observe.AI",
    companyUrl: "https://www.observe.ai",
    role: "Software Engineer 1 – Frontend",
    period: "July 2024 – December 2025",
    location: "Bengaluru, India",
    logo: "observe_logo.jpg",
    teaser:
      "Enterprise frontend systems — virtualized tables, bulk workflows, and 20–30% performance gains.",
    highlights: [
      "Designed and delivered reusable frontend systems used by enterprise customers, reducing repetitive admin work and saving ~50 hours per week.",
      "Built scalable, data-intensive UI components (virtualized tables, filters, search) handling 1,000+ records with smooth performance.",
      "Improved frontend performance through lazy loading, memoization, and API optimization, reducing average load times by 20–30%.",
      "Developed bulk update workflows supporting 10,000+ daily operations, improving user efficiency by 30–40%.",
    ],
    tech: "React, TypeScript, Ant Design, REST APIs, Node.js, CI/CD, Git",
  },
  {
    company: "Observe.AI",
    companyUrl: "https://www.observe.ai",
    role: "Software Engineer Intern",
    period: "Jan 2024 – July 2024",
    location: "Bengaluru, India",
    logo: "observe_logo.jpg",
    teaser:
      "Reusable UI components and AI-driven workflow interfaces at an enterprise AI platform.",
    highlights: [
      "Built reusable UI components and custom filters to improve query performance and overall usability.",
      "Implemented React components supporting AI-driven workflows, improving rendering efficiency and user engagement.",
    ],
    tech: "React, TypeScript, REST APIs",
  },
  {
    company: "ServiceNow",
    companyUrl: "https://www.servicenow.com",
    role: "Software Engineer Intern",
    period: "May 2023 – July 2023",
    location: "Hyderabad, India",
    logo: "servicenow_logo.png",
    teaser:
      "Data visualization UIs and backend pipeline optimization (~25% faster processing).",
    highlights: [
      "Developed JavaScript-based UI visualizations to simplify exploration of complex datasets.",
      "Optimized backend data pipelines, reducing processing time by ~25% and improving reliability.",
    ],
    tech: "JavaScript, Data Visualization, Data Pipelines, Node.js",
  },
  {
    company: "Microsoft",
    companyUrl: "https://www.microsoft.com",
    role: "Software Engineer Intern",
    period: "May 2022 – July 2022",
    location: "Hyderabad, India",
    logo: "Microsoft_logo.webp",
    teaser:
      "ML recommendation system with similarity-based algorithms and sentiment analysis.",
    highlights: [
      "Built a recommendation system using similarity-based algorithms to deliver personalized results.",
      "Applied sentiment analysis techniques to improve relevance and user experience.",
    ],
    tech: "Python, Machine Learning, NLP, KNN algorithms",
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="border-t border-slate-800 bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <Reveal>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Professional Experience
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-12 max-w-2xl text-sm text-slate-400">
            Tap a role to expand details — production work across security, AI, and
            enterprise products.
          </p>
        </Reveal>

        <div className="space-y-3">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;
            const isCurrent = exp.period.includes("Present");
            const key = `${exp.company}-${exp.role}-${exp.period}`;

            return (
              <Reveal key={key} delay={index * 70}>
                <article
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`interactive-card overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-500/50 bg-slate-900/80 shadow-lg shadow-cyan-500/5"
                      : isHovered
                        ? "border-slate-600 bg-slate-900/60"
                        : "border-slate-800 bg-slate-900/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${index}`}
                    className="flex w-full items-center gap-4 p-5 text-left md:gap-5 md:p-6"
                  >
                    {exp.logo && (
                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          isHovered || isOpen ? "scale-105" : ""
                        }`}
                      >
                        <img
                          src={exp.logo}
                          alt=""
                          className="h-11 w-11 rounded-xl border border-slate-700 bg-slate-800 object-contain p-1.5 md:h-12 md:w-12"
                        />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-300">
                            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-cyan-400" />
                            Current
                          </span>
                        )}
                        <span className="text-xs text-slate-500">{exp.period}</span>
                      </div>
                      <h3 className="mt-1 text-base font-semibold text-slate-50 md:text-lg">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-slate-400">
                        {exp.company}
                        <span className="text-slate-600"> · </span>
                        {exp.location}
                      </p>
                      {!isOpen && exp.teaser && (
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500 md:text-sm">
                          {exp.teaser}
                        </p>
                      )}
                    </div>

                    <FiChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-cyan-400" : "text-slate-500"
                      }`}
                    />
                  </button>

                  <div
                    id={`panel-${index}`}
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-800 px-5 pb-6 pt-4 md:px-6 md:pb-7">
                        {exp.companyUrl && (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="interactive-btn mb-4 inline-block text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
                          >
                            Visit {exp.company} →
                          </a>
                        )}

                        <ul className="space-y-3 text-sm leading-relaxed text-slate-300 md:text-base">
                          {exp.highlights.map((item, i) => (
                            <li
                              key={item}
                              className="flex gap-3 transition-all duration-300 hover:translate-x-1"
                              style={{ transitionDelay: `${i * 40}ms` }}
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {exp.tech.split(", ").map((item) => (
                            <span
                              key={item}
                              className="interactive-pill rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
