function About() {
    return (
        <section
        id="about"
        className="bg-slate-950 text-slate-50 border-t border-slate-800"
        >
        <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
            About Me
            </h2>

            <div className="space-y-3 text-sm text-slate-300 md:text-base max-w-2xl">
            <p>
                I started my journey in frontend development by experimenting with small UI
                projects and quickly fell in love with building for the web.
            </p>
            <p>
                I enjoy creating clean, responsive interfaces and turning designs into
                pixel-perfect, production-ready code.
            </p>
            <p>
                I think like a problem solver: I care about the details, but always keep
                performance, accessibility, and user experience in mind.
            </p>
            <p>
                I&apos;m a curious learner who likes to understand how things work under
                the hood and continuously refine how I write and structure my code.
            </p>
            </div>
        </div>
    </section>
    )
}

export default About;