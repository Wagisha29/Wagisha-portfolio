function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
        Profile
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
          Frontend Engineer • React • TypeScript • Scalable UI Systems

            </p>
            <p>
            I’m a Frontend Engineer with experience building scalable, high-performance web applications in product-driven environments. Currently, I work at Observe.AI, where I design and deliver user-facing features used by thousands of users daily. My primary expertise lies in React, TypeScript, and modern frontend architecture, with a strong focus on performance, maintainability, and clean UI systems.
            </p>
            <p>
            At Observe.AI, I’ve owned and shipped complex, data-intensive features such as virtualized tables, bulk update workflows, and reusable component systems. My work has improved frontend performance by up to 30%, reduced load times, and significantly enhanced user productivity. I regularly collaborate with product managers, designers, and backend engineers, taking end-to-end ownership from requirements to production.

            </p>
            <p>
            I enjoy working on frontend problems that involve scale, data, and real-world constraints, and I care deeply about building interfaces that are both performant and intuitive. I thrive in collaborative, fast-paced teams where engineering decisions directly impact product quality and user experience.

            </p>
            <p>
            I am open to relocation and global opportunities, particularly in Canada, the UK, Europe, and the UAE.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;