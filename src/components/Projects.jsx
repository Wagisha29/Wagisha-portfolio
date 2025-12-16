// src/components/Projects.jsx
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "Wagisha29";
const MAX_PROJECTS = 4;

function extractSummaryFromReadme(readmeText) {
  if (!readmeText) return null;

  // Split into lines, remove empty lines
  const lines = readmeText
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  if (lines.length === 0) return null;

  // Skip first heading if it starts with #
  let startIndex = 0;
  if (lines[0].startsWith("#")) {
    startIndex = 1;
  }

  const first = lines[startIndex] || "";
  const second = lines[startIndex + 1] || "";

  // Return 1–2 lines, joined
  const summary = [first, second].filter(Boolean).join(" ");
  return summary || null;
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        // 1. Fetch recent repos
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`,
          { headers }
        );
        const repos = await reposRes.json();

        if (!Array.isArray(repos)) {
          console.error("Unexpected repos response", repos);
          setLoading(false);
          return;
        }

        // Filter out forks and keep the most recent ones
        const filtered = repos.filter((repo) => !repo.fork);

        // 2. For each repo, fetch README and extract summary
        const withReadmes = await Promise.all(
          filtered.slice(0, 12).map(async (repo) => {
            try {
              const readmeRes = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`,
                { headers }
              );

              if (!readmeRes.ok) {
                // fallback to repo description if README missing
                return {
                  name: repo.name,
                  htmlUrl: repo.html_url,
                  description: repo.description,
                  language: repo.language,
                  homepage: repo.homepage,
                };
              }

              const readmeData = await readmeRes.json();
              const content = readmeData.content
                ? atob(readmeData.content) // base64 decode
                : "";
              const summary = extractSummaryFromReadme(content);

              return {
                name: repo.name,
                htmlUrl: repo.html_url,
                description: summary || repo.description,
                language: repo.language,
                homepage: repo.homepage,
              };
            } catch (err) {
              console.error("Error fetching README for", repo.name, err);
              return {
                name: repo.name,
                htmlUrl: repo.html_url,
                description: repo.description,
                language: repo.language,
                homepage: repo.homepage,
              };
            }
          })
        );

        // Show up to MAX_PROJECTS projects (or fewer if you have less than that)
        setProjects(withReadmes.slice(0, MAX_PROJECTS));
      } catch (error) {
        console.error("Error fetching GitHub projects", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">
          Projects
        </h2>
        <p className="text-sm text-slate-400 mb-8">
          A selection of my recent work, fetched directly from my GitHub profile.
        </p>

        {loading ? (
          <p className="text-sm text-slate-400">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-sm text-slate-400">
            No projects found yet. Please check back soon.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.htmlUrl}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-cyan-400/60 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-slate-50 break-words">
                    {project.name}
                  </h3>
                  {project.language && (
                    <span className="text-xs rounded-full bg-slate-800 px-2 py-0.5 text-slate-300">
                      {project.language}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 mb-4 line-clamp-3">
                  {project.description || "No description provided yet."}
                </p>

                <div className="flex items-center justify-between gap-3 text-xs">
                  <a
                    href={project.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
                  >
                    View on GitHub
                  </a>

                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-cyan-500 px-3 py-1 font-medium text-slate-900 hover:bg-cyan-400 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}