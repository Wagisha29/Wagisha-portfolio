// src/components/CaseStudy.jsx
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const caseStudyData = {
  "interactive-media-capture": {
    name: "Interactive Media Capture Web App",
    problemStatement:
      "Capturing and sharing memories digitally is common, but many browser-based photo tools feel slow, clunky, or lack a cohesive user experience. The goal was to build a lightweight, browser-based photo booth that enables users to capture photos, apply creative filters, add personal context, and download a polished output — all without relying on external services or heavy backend infrastructure.",
    overview:
      "This project is a frontend-focused web application that simulates a retro photo booth experience. Users can capture a sequence of photos via their webcam, apply visual filters, add a short caption, and download the final photo strip as a single image. The emphasis was on performance, smooth interactions, and responsive design.",
    images: [
      "/project-images/photobooth1.jpg",
      "/project-images/photobooth2.jpg",
      "/project-images/photobooth3.jpg",
    ],
    goals: [
      "Provide smooth webcam-based photo capture in the browser",
      "Enable creative customization through client-side filters",
      "Deliver a polished, downloadable output with minimal user effort",
      "Maintain fast load times and responsive UI interactions",
    ],
    constraints: [
      "Frontend-only solution with no server-side image processing",
      "Browser performance and memory limitations",
      "Real-time camera access and rendering constraints",
    ],
    highlights: [
      "Sub-2s initial load time",
      "Smooth camera capture and filter interactions",
      "Responsive design across mobile and desktop devices",
    ],
    tech: ["React", "Vite", "JavaScript", "CSS Animations", "html2canvas"],
    challenges: [
      "Managing real-time webcam access reliably across browsers",
      "Applying visual filters without degrading UI performance",
      "Generating a downloadable image while preserving layout fidelity",
    ],
    solutions: [
      "Used browser-native MediaDevices APIs for consistent webcam access",
      "Applied lightweight CSS-based filters instead of heavy image processing",
      "Leveraged html2canvas to export the DOM-based photo strip as an image",
    ],
    results:
      "The application loads in under 2 seconds on average devices and provides a smooth, responsive photo capture experience. All image processing happens client-side, with no external dependencies, resulting in a fast and reliable user experience across devices.",
    improvements: [
      "Improve accessibility for keyboard navigation and screen readers",
      "Add filter previews before capture",
      "Enhance error handling for camera permissions and unsupported devices",
    ],
  },

  "enterprise-analytics-dashboard": {
    name: "Enterprise Analytics Dashboard",
    problemStatement:
      "Enterprise users need to explore large datasets efficiently, but traditional tables often become slow and unresponsive as data size grows. The challenge was to design a frontend system that could handle large volumes of data without sacrificing performance or usability.",
    overview:
      "This project simulates a real-world enterprise analytics product, focusing on scalable frontend architecture, efficient data rendering, and smooth user interactions when working with large datasets.",
    images: [
      "/project-images/analytics-dashboard-1.jpg",
      "/project-images/analytics-dashboard-2.jpg",
      "/project-images/analytics-dashboard-3.jpg",
    ],
    goals: [
      "Support smooth interaction with datasets of 10k+ rows",
      "Minimize initial load time and unnecessary re-renders",
      "Provide a clean, intuitive UI for non-technical users",
    ],
    constraints: [
      "Frontend-heavy architecture with limited backend complexity",
      "Network latency and browser rendering limitations",
    ],
    highlights: [
      "Virtualized tables for large datasets",
      "Server-side pagination and filtering",
      "Performance-optimized rendering",
    ],
    tech: [
      "React",
      "TypeScript",
      "TanStack Table",
      "React Query",
      "REST APIs",
      "CI/CD",
      "Git",
    ],
    challenges: [
      "Rendering large datasets caused UI lag and performance bottlenecks",
      "Frequent re-renders during filtering and sorting",
      "Balancing feature richness with UI simplicity",
    ],
    solutions: [
      "Implemented table virtualization to render only visible rows",
      "Moved pagination, filtering, and sorting to the server",
      "Used memoization and debounced inputs to reduce re-renders",
    ],
    results:
      "The dashboard handles datasets of over 10,000 rows smoothly, with an initial render time under 1.5 seconds. User interactions such as sorting and filtering remain responsive, and the architecture is scalable for future enhancements.",
    improvements: [
      "Add column customization and user preference persistence",
      "Improve accessibility and keyboard navigation",
      "Introduce client-side caching for frequently accessed data",
    ],
  },
};

export default function CaseStudy() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudyData[projectId];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-cyan-400 hover:text-cyan-300"
          >
            Go back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8"
        >
          <FiArrowLeft className="h-4 w-4" />
          <span>Back to Projects</span>
        </button>

        <h1 className="text-4xl font-bold mb-6">{caseStudy.name}</h1>

        <Section title="Problem Statement" text={caseStudy.problemStatement} />
        <Section title="Overview" text={caseStudy.overview} />

        {caseStudy.images && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-slate-200">
              Application Interface
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900/60 hover:border-cyan-400/60 transition-colors group"
                >
                  <img
                    src={image}
                    alt={`${caseStudy.name} interface ${idx + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231e293b' width='400' height='300'/%3E%3Ctext fill='%23647593' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage Coming Soon%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <ListSection title="Goals" items={caseStudy.goals} />
        <ListSection title="Constraints" items={caseStudy.constraints} />
        <ListSection title="Key Highlights" items={caseStudy.highlights} />

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-200">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-800 px-4 py-2 text-sm text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <ListSection title="Challenges" items={caseStudy.challenges} />
        <ListSection title="Solutions" items={caseStudy.solutions} />
        <Section title="Results" text={caseStudy.results} />
        <ListSection title="What I’d Improve Next" items={caseStudy.improvements} />
      </div>
    </div>
  );
}

function Section({ title, text }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3 text-slate-200">{title}</h2>
      <p className="text-slate-300 leading-relaxed">{text}</p>
    </section>
  );
}

function ListSection({ title, items }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3 text-slate-200">{title}</h2>
      <ul className="space-y-2 text-slate-300">
        {items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
