// src/components/CaseStudy.jsx
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

// This data should match your projects data - you can move it to a shared file later
const caseStudyData = {
  "interactive-media-capture": {
    name: "Interactive Media Capture Web App",
    problemStatement: "A production-style web application focused on fast, responsive image capture and client-side processing with performance-optimized UI interactions.",
    overview: "Designed as a lightweight, performance-focused frontend application to explore client-side image processing, smooth UI transitions, and responsive layouts across devices.",
    highlights: ["Sub-2s initial load time", "Optimized re-renders for smoother interactions", "Responsive design across mobile and desktop"],
    tech: ["React", "Vite", "JavaScript", "CSS animations"],
    // Add more detailed case study content here
    challenges: ["Challenge 1 description", "Challenge 2 description"],
    solutions: ["Solution 1 description", "Solution 2 description"],
    results: "Results and metrics here"
  },
  "enterprise-analytics-dashboard": {
    name: "Enterprise Analytics Dashboard",
    problemStatement: "A data-intensive dashboard designed to help users explore large datasets efficiently without sacrificing performance",
    overview: "This project simulates a real-world enterprise analytics product, focusing on scalable frontend architecture, efficient data rendering, and smooth user interactions for large datasets.",
    highlights: ["Virtualized tables for large datasets", "Server-side pagination and filtering", "Performance-optimized rendering"],
    tech: ["React", "TypeScript", "TanStack Table", "React Query", "REST APIs", "CI/CD", "Git"],
    challenges: ["Challenge 1 description", "Challenge 2 description"],
    solutions: ["Solution 1 description", "Solution 2 description"],
    results: "Results and metrics here"
  }
};

export default function CaseStudy() {
  // Line 1: Extract the project ID from the URL
  const { projectId } = useParams();
  
  // Line 2: Get the navigate function to go back
  const navigate = useNavigate();
  
  // Line 3: Find the case study data based on the URL parameter
  const caseStudy = caseStudyData[projectId];

  // Line 4: If project not found, show error message
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
      {/* Line 5: Container with max width for readability */}
      <div className="mx-auto max-w-4xl px-4 py-20">
        
        {/* Line 6: Back button */}
        <button
          onClick={() => navigate(-1)} // Line 7: Navigate to previous page
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 transition-colors"
        >
          <FiArrowLeft className="h-4 w-4" />
          <span>Back to Projects</span>
        </button>

        {/* Line 8: Case Study Title */}
        <h1 className="text-4xl font-bold mb-6 text-slate-50">
          {caseStudy.name}
        </h1>

        {/* Line 9: Problem Statement Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-200">
            Problem Statement
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {caseStudy.problemStatement}
          </p>
        </section>

        {/* Line 10: Overview Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-200">
            Overview
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {caseStudy.overview}
          </p>
        </section>

        {/* Line 11: Highlights Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-200">
            Key Highlights
          </h2>
          <ul className="space-y-2">
            {caseStudy.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span className="text-slate-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Line 12: Tech Stack Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-200">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tech.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full bg-slate-800 px-4 py-2 text-sm text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Line 13: Challenges Section (you can expand this) */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-200">
            Challenges
          </h2>
          <ul className="space-y-2">
            {caseStudy.challenges.map((challenge, idx) => (
              <li key={idx} className="text-slate-300">
                {challenge}
              </li>
            ))}
          </ul>
        </section>

        {/* Line 14: Solutions Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-200">
            Solutions
          </h2>
          <ul className="space-y-2">
            {caseStudy.solutions.map((solution, idx) => (
              <li key={idx} className="text-slate-300">
                {solution}
              </li>
            ))}
          </ul>
        </section>

        {/* Line 15: Results Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-200">
            Results
          </h2>
          <p className="text-slate-300 leading-relaxed">
            {caseStudy.results}
          </p>
        </section>
      </div>
    </div>
  );
}