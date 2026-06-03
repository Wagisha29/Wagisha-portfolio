// src/components/Experience.jsx
const experiences = [
  {
    company: "Arctic Wolf",
    companyUrl: "https://arcticwolf.com",
    role: "Software Engineer 2 - Fullstack",
    period: "January 2026 – Present",
    location: "Bengaluru, India",
    logo: "arctic-wolf-logo.png",
    highlights: [
      "Building Aurora Security Assistant, a conversation assistance that helps customers with their queries and issues.",
      "Integrated MCP Apps to enable secure, cross-platform communication between internal systems.",
    ],
    tech: "React, TypeScript, Material UI, REST APIs, Node.js, CI/CD, Git",
  },
  {
    company: "Observe.AI",
    companyUrl: "https://www.observe.ai",
    role: "Software Engineer 1 – Frontend",
    period: "July 2024 – December 2025",
    location: "Bengaluru, India",
    logo: "observe_logo.jpg",
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
    highlights: [
      "Developed JavaScript-based UI visualizations to simplify exploration of complex datasets.",
      "Optimized backend data pipelines, reducing processing time by ~25% and improving reliability.",
    ],
    tech: "JavaScript, Data Visualization, Data Pipelines",
  },
  {
    company: "Microsoft",
    companyUrl: "https://www.microsoft.com",
    role: "Software Engineer Intern",
    period: "May 2022 – July 2022",
    location: "Hyderabad, India",
    logo: "Microsoft_logo.webp",
    highlights: [
      "Built a recommendation system using similarity-based algorithms to deliver personalized results.",
      "Applied sentiment analysis techniques to improve relevance and user experience.",
    ],
    tech: "Python, Machine Learning, NLP",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300 mb-4">
          Career path
        </span>
        <h2 className="text-6xl font-semibold tracking-tight mb-3">
          Professional Experience
        </h2>
        <p className="text-sm md:text-base text-slate-400 mb-14 max-w-2xl leading-relaxed border-l-2 border-cyan-500/80 py-1 pl-4">
          Building scalable, production-ready software in product-driven teams
          across security, AI, and enterprise platforms.
        </p>

        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-cyan-400/80 via-cyan-500/30 to-slate-800 md:left-[31px]"
            aria-hidden="true"
          />

          <ol className="space-y-0">
            {experiences.map((exp, index) => {
              const isCurrent = exp.period.includes("Present");
              const isLast = index === experiences.length - 1;

              return (
                <li
                  key={`${exp.company}-${exp.role}-${exp.period}`}
                  className={`relative grid grid-cols-[56px_1fr] gap-x-4 md:grid-cols-[64px_1fr] md:gap-x-8 ${isLast ? "" : "pb-12 md:pb-14"}`}
                >
                  {/* Timeline node */}
                  <div className="relative flex justify-center pt-1">
                    <div
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-slate-950 p-2 md:h-16 md:w-16 ${
                        isCurrent
                          ? "border-cyan-400 shadow-lg shadow-cyan-500/25"
                          : "border-slate-700"
                      }`}
                    >
                      {exp.logo && (
                        <img
                          src={exp.logo}
                          alt=""
                          className="h-full w-full rounded-full object-contain"
                        />
                      )}
                      {isCurrent && (
                        <span
                          className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-cyan-400 ring-2 ring-slate-950"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <article
                    className={`group rounded-2xl border bg-slate-900/40 p-5 md:p-6 transition-colors ${
                      isCurrent
                        ? "border-cyan-500/40 hover:border-cyan-400/70"
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          {isCurrent && (
                            <span className="rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                              Current
                            </span>
                          )}
                          <span className="text-xs font-medium text-slate-500 md:text-sm">
                            {exp.location}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-50 md:text-xl">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm text-slate-300 md:text-base">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <span className="font-medium text-slate-200">
                              {exp.company}
                            </span>
                          )}
                        </p>
                      </div>
                      <time
                        dateTime={exp.period}
                        className="shrink-0 rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-300 md:text-sm"
                      >
                        {exp.period}
                      </time>
                    </div>

                    <ul className="mb-5 space-y-2.5 border-l border-slate-800 pl-4 text-sm leading-relaxed text-slate-300 md:text-base md:space-y-3">
                      {exp.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.split(", ").map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-400 transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-200/90 md:text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
