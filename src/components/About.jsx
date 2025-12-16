function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          About Me
        </h2>

        <div className="grid gap-10 md:grid-cols-[1.1fr,2fr] items-start">
          {/* Left: Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-purple-500/30 to-pink-500/30 blur-lg" />
              <img
                src="/wagisha_formal.jpeg"
                alt="Portrait of Wagisha"
                className="relative w-full h-auto max-w-md rounded-3xl object-contain border-2 border-slate-700 shadow-xl shadow-cyan-500/20"
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="space-y-4 text-sm text-slate-300 md:text-base">
            <p>
              I’m a Frontend Engineer (SDE-I at Observe.AI) with 1.5+ years of
              experience building scalable, high-performance web applications
              used by thousands of users daily. I specialize in React.js,
              TypeScript, and modern frontend architecture, with a strong focus
              on clean code, performance optimization, and intuitive user
              experiences.
            </p>
            <p>
              At Observe.AI, I’ve owned and shipped complex, data-heavy features
              such as virtualized tables, bulk update workflows, and reusable UI
              systems—improving performance and reducing average load times by
              up to 30% while significantly enhancing user productivity. I enjoy
              working closely with product and backend teams and taking
              end-to-end ownership of features.
            </p>
            <p>
              I hold a B.Tech in Electronics and Communication Engineering from
              Indira Gandhi Delhi Technical University for Women (IGDTUW),
              graduated in 2024, with a GPA of 8.7. Alongside my professional
              work, I have a strong foundation in Data Structures and
              Algorithms, having solved 700+ problems on LeetCode, which helps
              me write scalable, maintainable, and well-structured code.
            </p>
            <p>
              I’m passionate about learning, building real-world products, and
              continuously improving as an engineer. Outside of work, I enjoy
              experimenting with side projects, refining frontend performance,
              and exploring system design concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;