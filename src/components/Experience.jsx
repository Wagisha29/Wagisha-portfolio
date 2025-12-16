// src/components/Experience.jsx
const experiences = [
  {
    company: "Observe.AI",
    role: "Software Development Engineer 1",
    period: "July 2024 – Present",
    location: "Bengaluru, India",
    logo: "observe_logo.jpg",
    highlights: [
      "Designed and implemented a reusable coaching template system, saving ~50 admin hours per week.",
      "Built virtualized, filterable tables handling 1,000+ records with smooth performance and 2x faster data access.",
      "Optimized frontend via lazy loading, memoization, and API trimming, reducing screen load times by 20–30%.",
      "Implemented bulk update flows for 10,000+ agents daily, improving workflow efficiency by 30–40%.",
    ],
    tech: "React.js, TypeScript, Node.js, HTML5/CSS3, REST APIs, Git, Jenkins, Harness",
  },
  {
    company: "Observe.AI",
    role: "Software Engineer Intern",
    period: "Jan 2024 – July 2024",
    location: "Bengaluru, India",
    logo: "observe_logo.jpg",
    highlights: [
      "Built custom filter components that sped up querying and improved UX satisfaction scores.",
      "Developed dynamic React components powering an AI chatbot UI, improving rendering efficiency and engagement.",
    ],
    tech: "React.js, TypeScript, REST APIs, Git",
  },
  {
    company: "ServiceNow",
    role: "Software Engineer Intern",
    period: "May 2023 – July 2023",
    location: "Remote / India",
    logo: "servicenow_logo.png",
    highlights: [
      "Built JavaScript-driven interactive map visualizations to streamline complex data workflows.",
      "Optimized ETL pipelines, improving migration accuracy and cutting processing time by ~25%.",
    ],
    tech: "JavaScript, Data Visualization, ETL Pipelines",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    period: "May 2022 – July 2022",
    location: "Remote / India",
    logo: "Microsoft_logo.webp",
    highlights: [
      "Developed a content-based movie recommendation system using KNN and cosine similarity.",
      "Implemented sentiment analysis on user reviews to improve recommendation relevance and UX.",
    ],
    tech: "Python, Machine Learning, KNN, NLP",
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
          Experience
        </h2>
        <p className="text-sm text-slate-400 mb-8">
          Roles, internships, and projects where I&apos;ve applied frontend and software engineering skills.
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
                      {exp.company} · {exp.location}
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