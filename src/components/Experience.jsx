// src/components/Experience.jsx
const experiences = [
  {
    company: "Arctic Wolf",
    companyUrl: "https://arcticwolf.com",
    role: "Software Engineer 2",
    period: "January 2026 – Present",
    location: "Bengaluru, India",
    logo: "arctic-wolf-logo.png",
    highlights: [
      "Developed AI Customer Engagement Assistant, a chatbot that helps customers with their queries and issues.",
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
      className="bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">
        Professional Experience
        </h2>
        <p className="text-sm text-slate-400 mb-8">
        Professional experience building scalable, production-ready software in product-driven teams.

        </p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}-${exp.period}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-8 w-8 rounded-md object-contain bg-slate-800"
                    />
                  )}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-slate-300">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}{" "}
                      · {exp.location}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-400">{exp.period}</p>
              </div>

              <ul className="mb-3 space-y-1.5 text-xs text-slate-300">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Tech:</span> {exp.tech}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}