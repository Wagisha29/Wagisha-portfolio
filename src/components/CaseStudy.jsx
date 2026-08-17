// src/components/CaseStudy.jsx
import { useLayoutEffect } from "react";
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
  },

  spendwise: {
    name: "SpendWise",
    problemStatement:
      "Most personal finance tools either overwhelm users with raw transaction lists or fail to turn spending data into actionable insights. The challenge was to build a dashboard that makes daily tracking effortless while surfacing clear trends, category breakdowns, and AI-driven recommendations users can act on.",
    overview:
      "SpendWise is a modern personal finance tracking dashboard and AI financial copilot. Users track daily transactions, monitor income versus expenses, and visualize spending habits across customizable categories using clean data visualizations. It features seamless Google Authentication, interactive monthly analytics, and WiseBot — an integrated AI copilot for end-of-month budget audits and actionable financial recommendations.",
    images: [
      "/project-images/spendWise1.jpg",
      "/project-images/spendWise2.jpg",
      "/project-images/spendWise3.jpg",
      "/project-images/spendWise4.jpg",
    ],
    goals: [
      "Provide one-click Google Sign-In with isolated, secure user workspaces",
      "Surface key financial KPIs — monthly income, expenses, and net savings rate",
      "Enable quick income and expense entry with categorized, date-stamped records",
      "Deliver rich analytics: 12-month trends, category shifts, and breakdown charts",
      "Integrate an AI copilot for automated summaries and natural language financial queries",
    ],
    constraints: [
      "Real-time chart rendering must stay responsive as transaction volume grows",
      "AI responses must be context-aware using aggregated monthly data without exposing raw PII",
      "Multi-tenant data isolation required for every authenticated user session",
    ],
    highlights: [
      "Top KPI metric cards with net savings rate and balance badges",
      "Income vs. expense 12-month bar chart and multi-color stacked category chart",
      "Donut chart with real-time percentage badges and average daily spend metrics",
      "WiseBot AI copilot for end-of-month audits and savings suggestions",
      "Recent activity feed with search, category tags, and inline deletion",
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "Supabase",
      "Google OAuth 2.0",
      "LLM API (Gemini / OpenAI)",
      "Vercel",
      "Supabase Edge Functions",
    ],
    challenges: [
      "Designing glassmorphism tooltips and multi-chart layouts that remain readable on all screen sizes",
      "Aggregating transaction data efficiently for both real-time dashboard metrics and AI payloads",
      "Passing structured monthly JSON to an LLM while keeping response latency low",
      "Ensuring strict per-user data tenancy across auth, storage, and AI query scopes",
    ],
    solutions: [
      "Built reusable Recharts components — donut, stacked bar, and trend charts — with custom glassmorphism tooltips",
      "Used Supabase with Google OAuth 2.0 for auth and row-level security to isolate user workspaces",
      "Computed smart metrics (average daily spend, top category impact) client-side from live transaction state",
      "Fed aggregated monthly summaries to the LLM API via Supabase Edge Functions for context-aware WiseBot responses",
    ],
    results:
      "SpendWise delivers a polished financial dashboard where users can sign in with Google, log transactions in seconds, and immediately see income-versus-expense trends and category breakdowns. WiseBot generates end-of-month budget audits with actionable savings suggestions based on discretionary versus fixed expense ratios, and supports natural language queries for custom date ranges and category spending.",
  },
};

export default function CaseStudy() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

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

        <h1 className="text-2xl font-bold mb-6 sm:text-3xl md:text-4xl">{caseStudy.name}</h1>

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
